from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class Festival(BaseModel):
    id: str = Field(..., alias="_id")
    name: str
    summary: str
    description: str
    crowdExpectation: str
    safetyNotes: str
    bestExperience: str
    createdAt: Optional[datetime] = Field(default_factory=datetime.utcnow)
    updatedAt: Optional[datetime] = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True

class FestivalCreate(BaseModel):
    id: str
    name: str
    summary: str
    description: str
    crowdExpectation: str
    safetyNotes: str
    bestExperience: str
