from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class SpiritualPlace(BaseModel):
    id: str = Field(..., alias="_id")
    name: str
    location: str
    type: str
    summary: str
    description: str
    bestTimeToVisit: str
    activities: List[str]
    createdAt: Optional[datetime] = Field(default_factory=datetime.utcnow)
    updatedAt: Optional[datetime] = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True

class SpiritualPlaceCreate(BaseModel):
    id: str
    name: str
    location: str
    type: str
    summary: str
    description: str
    bestTimeToVisit: str
    activities: List[str]
