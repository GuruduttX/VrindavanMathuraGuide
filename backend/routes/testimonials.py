from fastapi import APIRouter, HTTPException, Depends, Query
from models.user_content import Testimonial, TestimonialCreate, NewsletterSubscriber, NewsletterSubscribe
from motor.motor_asyncio import AsyncIOMotorClient
import os
import uuid

router = APIRouter(prefix="/testimonials", tags=["testimonials"])

def get_database():
    """Dependency to get database connection"""
    mongo_url = os.environ["MONGO_URL"]
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ["DB_NAME"]]
    return db

@router.get("", response_model=dict)
async def get_approved_testimonials(
    limit: int = Query(10, le=50),
    skip: int = Query(0, ge=0),
    db = Depends(get_database)
):
    """Get approved testimonials for public display"""
    try:
        testimonials = await db.testimonials.find(
            {"approved": True}
        ).sort("createdAt", -1).skip(skip).limit(limit).to_list(limit)
        
        total = await db.testimonials.count_documents({"approved": True})
        
        return {
            "success": True,
            "data": testimonials,
            "total": total,
            "limit": limit,
            "skip": skip
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching testimonials: {str(e)}")

@router.post("", response_model=dict)
async def submit_testimonial(testimonial: TestimonialCreate, db = Depends(get_database)):
    """Submit a new testimonial (requires admin approval)"""
    try:
        testimonial_dict = testimonial.dict()
        testimonial_dict["_id"] = str(uuid.uuid4())
        testimonial_dict["approved"] = False  # Requires admin approval
        
        await db.testimonials.insert_one(testimonial_dict)
        
        return {
            "success": True,
            "message": "Thank you for your testimonial! It will be reviewed and published shortly."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error submitting testimonial: {str(e)}")

@router.get("/stats", response_model=dict)
async def get_testimonial_stats(db = Depends(get_database)):
    """Get testimonial statistics"""
    try:
        total = await db.testimonials.count_documents({})
        approved = await db.testimonials.count_documents({"approved": True})
        pending = await db.testimonials.count_documents({"approved": False})
        
        # Calculate average rating
        pipeline = [
            {"$match": {"approved": True}},
            {"$group": {"_id": None, "avgRating": {"$avg": "$rating"}}}
        ]
        result = await db.testimonials.aggregate(pipeline).to_list(1)
        avg_rating = result[0]["avgRating"] if result else 0
        
        return {
            "success": True,
            "data": {
                "total": total,
                "approved": approved,
                "pending": pending,
                "averageRating": round(avg_rating, 1)
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching stats: {str(e)}")
