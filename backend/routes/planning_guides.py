from fastapi import APIRouter, HTTPException
from models.planning_guide import PlanningGuide, PlanningGuideCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/planning-guides", tags=["planning-guides"])

mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

@router.get("", response_model=dict)
async def get_all_planning_guides():
    """Fetch all planning guides from database"""
    try:
        guides = await db.planning_guides.find().to_list(100)
        return {
            "success": True,
            "data": guides,
            "count": len(guides)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching planning guides: {str(e)}")

@router.get("/{guide_id}", response_model=dict)
async def get_planning_guide_by_id(guide_id: str):
    """Fetch single planning guide by ID"""
    try:
        guide = await db.planning_guides.find_one({"_id": guide_id})
        if not guide:
            raise HTTPException(status_code=404, detail="Planning guide not found")
        return {
            "success": True,
            "data": guide
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching planning guide: {str(e)}")

@router.post("", response_model=dict)
async def create_planning_guide(guide: PlanningGuideCreate):
    """Create a new planning guide entry"""
    try:
        guide_dict = guide.dict()
        guide_dict["_id"] = guide_dict.pop("id")
        result = await db.planning_guides.insert_one(guide_dict)
        created_guide = await db.planning_guides.find_one({"_id": guide_dict["_id"]})
        return {
            "success": True,
            "data": created_guide,
            "message": "Planning guide created successfully"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error creating planning guide: {str(e)}")
