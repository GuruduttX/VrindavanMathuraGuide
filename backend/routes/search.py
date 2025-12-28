from fastapi import APIRouter, HTTPException, Depends, Query
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/search", tags=["search"])

def get_database():
    """Dependency to get database connection"""
    mongo_url = os.environ["MONGO_URL"]
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ["DB_NAME"]]
    return db

@router.get("", response_model=dict)
async def search_all(
    q: str = Query(..., min_length=2, description="Search query"),
    db = Depends(get_database)
):
    """Universal search across temples, spiritual places, and festivals"""
    try:
        search_regex = {"$regex": q, "$options": "i"}
        
        # Search temples
        temples = await db.temples.find({
            "$or": [
                {"name": search_regex},
                {"location": search_regex},
                {"deity": search_regex},
                {"summary": search_regex}
            ]
        }).limit(10).to_list(10)
        
        # Search spiritual places
        places = await db.spiritual_places.find({
            "$or": [
                {"name": search_regex},
                {"location": search_regex},
                {"type": search_regex},
                {"summary": search_regex}
            ]
        }).limit(10).to_list(10)
        
        # Search festivals
        festivals = await db.festivals.find({
            "$or": [
                {"name": search_regex},
                {"summary": search_regex},
                {"description": search_regex}
            ]
        }).limit(10).to_list(10)
        
        # Search planning guides
        guides = await db.planning_guides.find({
            "$or": [
                {"title": search_regex},
                {"summary": search_regex}
            ]
        }).limit(5).to_list(5)
        
        return {
            "success": True,
            "query": q,
            "results": {
                "temples": temples,
                "spiritualPlaces": places,
                "festivals": festivals,
                "planningGuides": guides
            },
            "totalResults": len(temples) + len(places) + len(festivals) + len(guides)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error searching: {str(e)}")
