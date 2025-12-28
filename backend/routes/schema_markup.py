from fastapi import APIRouter, HTTPException, Depends
from motor.motor_asyncio import AsyncIOMotorClient
import os
import json

router = APIRouter(prefix="/schema", tags=["schema-markup"])

def get_database():
    """Dependency to get database connection"""
    mongo_url = os.environ["MONGO_URL"]
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ["DB_NAME"]]
    return db

def generate_temple_schema(temple):
    """Generate JSON-LD schema for temple page"""
    schema = {
        "@context": "https://schema.org",
        "@type": ["Place", "TouristAttraction", "PlaceOfWorship"],
        "name": temple["name"],
        "description": temple["summary"],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": temple["location"],
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
        }
    }
    
    # Add opening hours if available
    if "darshan" in temple and "morning" in temple["darshan"] and "evening" in temple["darshan"]:
        try:
            morning = temple["darshan"]["morning"].split("–")
            evening = temple["darshan"]["evening"].split("–")
            
            schema["openingHoursSpecification"] = [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": morning[0].strip() if len(morning) > 0 else "07:30",
                    "closes": morning[1].strip() if len(morning) > 1 else "12:00",
                    "description": "Morning darshan"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": evening[0].strip() if len(evening) > 0 else "17:00",
                    "closes": evening[1].strip() if len(evening) > 1 else "21:00",
                    "description": "Evening darshan"
                }
            ]
        except:
            pass
    
    # Add FAQs if available
    if "faqs" in temple and len(temple["faqs"]) > 0:
        faq_schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": []
        }
        
        for faq in temple["faqs"]:
            faq_schema["mainEntity"].append({
                "@type": "Question",
                "name": faq["question"],
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq["answer"]
                }
            })
        
        # Return both schemas
        return {
            "place": schema,
            "faq": faq_schema
        }
    
    return {"place": schema}

@router.get("/temple/{temple_id}")
async def get_temple_schema(temple_id: str, db = Depends(get_database)):
    """Generate schema markup for temple page"""
    try:
        temple = await db.temples.find_one({"_id": temple_id})
        if not temple:
            raise HTTPException(status_code=404, detail="Temple not found")
        
        schema = generate_temple_schema(temple)
        return {
            "success": True,
            "data": schema
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating schema: {str(e)}")

@router.get("/spiritual-place/{place_id}")
async def get_spiritual_place_schema(place_id: str, db = Depends(get_database)):
    """Generate schema markup for spiritual place page"""
    try:
        place = await db.spiritual_places.find_one({"_id": place_id})
        if not place:
            raise HTTPException(status_code=404, detail="Spiritual place not found")
        
        schema = {
            "@context": "https://schema.org",
            "@type": ["Place", "TouristAttraction"],
            "name": place["name"],
            "description": place["summary"],
            "address": {
                "@type": "PostalAddress",
                "addressLocality": place["location"],
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN"
            },
            "touristType": place["type"]
        }
        
        return {
            "success": True,
            "data": {"place": schema}
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating schema: {str(e)}")

@router.get("/festival/{festival_id}")
async def get_festival_schema(festival_id: str, db = Depends(get_database)):
    """Generate schema markup for festival page"""
    try:
        festival = await db.festivals.find_one({"_id": festival_id})
        if not festival:
            raise HTTPException(status_code=404, detail="Festival not found")
        
        schema = {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": festival["name"],
            "description": festival["summary"],
            "location": {
                "@type": "Place",
                "name": "Mathura-Vrindavan",
                "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "Uttar Pradesh",
                    "addressCountry": "IN"
                }
            },
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled"
        }
        
        return {
            "success": True,
            "data": {"event": schema}
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating schema: {str(e)}")

@router.get("/breadcrumb/{page_type}/{page_id}")
async def get_breadcrumb_schema(page_type: str, page_id: str, db = Depends(get_database)):
    """Generate breadcrumb schema for any page"""
    try:
        # Fetch the item to get its name
        item_name = ""
        if page_type == "temple":
            item = await db.temples.find_one({"_id": page_id})
            item_name = item["name"] if item else page_id
        elif page_type == "spiritual-place":
            item = await db.spiritual_places.find_one({"_id": page_id})
            item_name = item["name"] if item else page_id
        elif page_type == "festival":
            item = await db.festivals.find_one({"_id": page_id})
            item_name = item["name"] if item else page_id
        
        schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://vrindavanmathuraguide.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": page_type.replace("-", " ").title() + "s",
                    "item": f"https://vrindavanmathuraguide.com/{page_type}s"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": item_name,
                    "item": f"https://vrindavanmathuraguide.com/{page_type}s/{page_id}"
                }
            ]
        }
        
        return {
            "success": True,
            "data": schema
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating breadcrumb schema: {str(e)}")
