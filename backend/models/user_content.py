from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime

class Testimonial(BaseModel):
    id: str = Field(..., alias="_id")
    name: str
    location: str
    rating: int  # 1-5 stars
    comment: str
    visitDate: Optional[str] = None
    approved: bool = False
    createdAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True

class TestimonialCreate(BaseModel):
    name: str
    location: str
    rating: int
    comment: str
    visitDate: Optional[str] = None

class NewsletterSubscriber(BaseModel):
    id: str = Field(..., alias="_id")
    email: EmailStr
    subscribedAt: datetime = Field(default_factory=datetime.utcnow)
    active: bool = True

    class Config:
        populate_by_name = True

class NewsletterSubscribe(BaseModel):
    email: EmailStr
