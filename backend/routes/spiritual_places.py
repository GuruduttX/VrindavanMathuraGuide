from fastapi import APIRouter, HTTPException, Depends
from models.spiritual_place import SpiritualPlace, SpiritualPlaceCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/spiritual-places", tags=["spiritual-places"])

def get_database():
    """Dependency to get database connection"""
    mongo_url = os.environ["MONGO_URL"]
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ["DB_NAME"]]
    return db

@router.get("", response_model=dict)
async def get_all_spiritual_places(db = Depends(get_database)):
    """Fetch all spiritual places from database"""
    try:
        places = await db.spiritual_places.find().to_list(100)
        return {
            "success": True,
            "data": places,
            "count": len(places)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching spiritual places: {str(e)}")

@router.get("/{place_id}", response_model=dict)
async def get_spiritual_place_by_id(place_id: str, db = Depends(get_database)):
    """Fetch single spiritual place by ID"""
    try:
        place = await db.spiritual_places.find_one({"_id": place_id})
        if not place:
            raise HTTPException(status_code=404, detail="Spiritual place not found")
        return {
            "success": True,
            "data": place
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching spiritual place: {str(e)}")

@router.post("", response_model=dict)
async def create_spiritual_place(place: SpiritualPlaceCreate, db = Depends(get_database)):
    """Create a new spiritual place entry"""
    try:
        place_dict = place.dict()
        place_dict["_id"] = place_dict.pop("id")
        result = await db.spiritual_places.insert_one(place_dict)
        created_place = await db.spiritual_places.find_one({"_id": place_dict["_id"]})
        return {
            "success": True,
            "data": created_place,
            "message": "Spiritual place created successfully"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error creating spiritual place: {str(e)}")
