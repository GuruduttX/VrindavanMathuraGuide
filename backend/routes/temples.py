from fastapi import APIRouter, HTTPException, Depends
from models.temple import Temple, TempleCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/temples", tags=["temples"])

def get_database():
    """Dependency to get database connection"""
    mongo_url = os.environ["MONGO_URL"]
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ["DB_NAME"]]
    return db

@router.get("", response_model=dict)
async def get_all_temples(
    location: str = Query(None, description="Filter by location (Vrindavan/Mathura)"),
    deity: str = Query(None, description="Filter by deity name"),
    sortBy: str = Query("name", description="Sort by field (name/location)"),
    order: str = Query("asc", description="Sort order (asc/desc)"),
    db = Depends(get_database)
):
    """Fetch all temples from database with optional filtering and sorting"""
    try:
        # Build filter query
        filter_query = {}
        if location:
            filter_query["location"] = {"$regex": location, "$options": "i"}
        if deity:
            filter_query["deity"] = {"$regex": deity, "$options": "i"}
        
        # Build sort
        sort_direction = 1 if order == "asc" else -1
        
        temples = await db.temples.find(filter_query).sort(sortBy, sort_direction).to_list(100)
        return {
            "success": True,
            "data": temples,
            "count": len(temples),
            "filters": {
                "location": location,
                "deity": deity,
                "sortBy": sortBy,
                "order": order
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching temples: {str(e)}")

@router.get("/{temple_id}", response_model=dict)
async def get_temple_by_id(temple_id: str, db = Depends(get_database)):
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
async def create_temple(temple: TempleCreate, db = Depends(get_database)):
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
