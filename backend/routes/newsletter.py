from fastapi import APIRouter, HTTPException, Depends
from models.user_content import NewsletterSubscriber, NewsletterSubscribe
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/newsletter", tags=["newsletter"])

def get_database():
    """Dependency to get database connection"""
    mongo_url = os.environ["MONGO_URL"]
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ["DB_NAME"]]
    return db

@router.post("/subscribe", response_model=dict)
async def subscribe_newsletter(subscriber: NewsletterSubscribe, db = Depends(get_database)):
    """Subscribe to newsletter"""
    try:
        # Check if email already exists
        existing = await db.newsletter.find_one({"_id": subscriber.email})
        
        if existing:
            if existing.get("active"):
                return {
                    "success": False,
                    "message": "This email is already subscribed to our newsletter."
                }
            else:
                # Reactivate subscription
                await db.newsletter.update_one(
                    {"_id": subscriber.email},
                    {"$set": {"active": True}}
                )
                return {
                    "success": True,
                    "message": "Your newsletter subscription has been reactivated!"
                }
        
        # New subscription
        subscriber_dict = subscriber.dict()
        subscriber_dict["_id"] = subscriber_dict.pop("email")
        subscriber_dict["active"] = True
        
        await db.newsletter.insert_one(subscriber_dict)
        
        return {
            "success": True,
            "message": "Thank you for subscribing! You'll receive updates about Mathura-Vrindavan temples and festivals."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error subscribing: {str(e)}")

@router.post("/unsubscribe", response_model=dict)
async def unsubscribe_newsletter(subscriber: NewsletterSubscribe, db = Depends(get_database)):
    """Unsubscribe from newsletter"""
    try:
        result = await db.newsletter.update_one(
            {"_id": subscriber.email},
            {"$set": {"active": False}}
        )
        
        if result.modified_count > 0:
            return {
                "success": True,
                "message": "You have been unsubscribed from our newsletter."
            }
        else:
            return {
                "success": False,
                "message": "Email not found in our newsletter list."
            }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error unsubscribing: {str(e)}")

@router.get("/count", response_model=dict)
async def get_subscriber_count(db = Depends(get_database)):
    """Get total active subscribers count"""
    try:
        count = await db.newsletter.count_documents({"active": True})
        return {
            "success": True,
            "data": {"activeSubscribers": count}
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching count: {str(e)}")
