from pydantic import BaseModel, Field
from typing import Dict, Any, Optional
from datetime import datetime

class PlanningGuide(BaseModel):
    id: str = Field(..., alias="_id")
    title: str
    summary: str
    content: Dict[str, Any]
    category: str
    createdAt: Optional[datetime] = Field(default_factory=datetime.utcnow)
    updatedAt: Optional[datetime] = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True

class PlanningGuideCreate(BaseModel):
    id: str
    title: str
    summary: str
    content: Dict[str, Any]
    category: str
