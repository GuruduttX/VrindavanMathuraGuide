from fastapi import APIRouter, HTTPException
from models.festival import Festival, FestivalCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/festivals", tags=["festivals"])

mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

@router.get("", response_model=dict)
async def get_all_festivals():
    """Fetch all festivals from database"""
    try:
        festivals = await db.festivals.find().to_list(100)
        return {
            "success": True,
            "data": festivals,
            "count": len(festivals)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching festivals: {str(e)}")

@router.get("/{festival_id}", response_model=dict)
async def get_festival_by_id(festival_id: str):
    """Fetch single festival by ID"""
    try:
        festival = await db.festivals.find_one({"_id": festival_id})
        if not festival:
            raise HTTPException(status_code=404, detail="Festival not found")
        return {
            "success": True,
            "data": festival
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching festival: {str(e)}")

@router.post("", response_model=dict)
async def create_festival(festival: FestivalCreate):
    """Create a new festival entry"""
    try:
        festival_dict = festival.dict()
        festival_dict["_id"] = festival_dict.pop("id")
        result = await db.festivals.insert_one(festival_dict)
        created_festival = await db.festivals.find_one({"_id": festival_dict["_id"]})
        return {
            "success": True,
            "data": created_festival,
            "message": "Festival created successfully"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error creating festival: {str(e)}")
