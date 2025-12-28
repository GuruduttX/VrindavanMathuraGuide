from fastapi import APIRouter, HTTPException
from models.temple import Temple, TempleCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/temples", tags=["temples"])

mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

@router.get("", response_model=dict)
async def get_all_temples():
    """Fetch all temples from database"""
    try:
        temples = await db.temples.find().to_list(100)
        return {
            "success": True,
            "data": temples,
            "count": len(temples)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching temples: {str(e)}")

@router.get("/{temple_id}", response_model=dict)
async def get_temple_by_id(temple_id: str):
    """Fetch single temple by ID"""
    try:
        temple = await db.temples.find_one({"_id": temple_id})
        if not temple:
            raise HTTPException(status_code=404, detail="Temple not found")
        return {
            "success": True,
            "data": temple
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching temple: {str(e)}")

@router.post("", response_model=dict)
async def create_temple(temple: TempleCreate):
    """Create a new temple entry"""
    try:
        temple_dict = temple.dict()
        temple_dict["_id"] = temple_dict.pop("id")
        result = await db.temples.insert_one(temple_dict)
        created_temple = await db.temples.find_one({"_id": temple_dict["_id"]})
        return {
            "success": True,
            "data": created_temple,
            "message": "Temple created successfully"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error creating temple: {str(e)}")
