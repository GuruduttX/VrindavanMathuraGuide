from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class DarshanTimings(BaseModel):
    morning: str
    evening: str
    notes: Optional[str] = None

class FAQ(BaseModel):
    question: str
    answer: str

class Temple(BaseModel):
    id: str = Field(..., alias="_id")
    name: str
    location: str
    deity: str
    summary: str
    history: str
    significance: str
    darshan: DarshanTimings
    visitorGuidance: Optional[List[str]] = []
    festivals: Optional[List[str]] = []
    faqs: Optional[List[FAQ]] = []
    createdAt: Optional[datetime] = Field(default_factory=datetime.utcnow)
    updatedAt: Optional[datetime] = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True
        json_schema_extra = {
            "example": {
                "_id": "banke-bihari-temple",
                "name": "Banke Bihari Temple",
                "location": "Vrindavan",
                "deity": "Lord Krishna (Banke Bihari form)",
                "summary": "One of the most revered temples...",
                "history": "The temple was established in 1864...",
                "significance": "This temple holds immense spiritual significance...",
                "darshan": {
                    "morning": "7:30 AM – 12:00 PM",
                    "evening": "5:30 PM – 9:30 PM",
                    "notes": "Darshan timings may vary on festivals and special occasions."
                }
            }
        }

class TempleCreate(BaseModel):
    id: str
    name: str
    location: str
    deity: str
    summary: str
    history: str
    significance: str
    darshan: DarshanTimings
    visitorGuidance: Optional[List[str]] = []
    festivals: Optional[List[str]] = []
    faqs: Optional[List[FAQ]] = []
