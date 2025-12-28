"""
Add geographic coordinates to temples and spiritual places for map integration
"""

import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
db_name = os.environ['DB_NAME']

# Approximate coordinates for major temples and places
# These are estimated coordinates - in production, verify with actual locations
TEMPLE_COORDINATES = {
    "banke-bihari-temple": {"lat": 27.5781, "lng": 77.6984},
    "iskcon-vrindavan": {"lat": 27.5731, "lng": 77.7003},
    "prem-mandir": {"lat": 27.5667, "lng": 77.6969},
    "krishna-janmabhoomi": {"lat": 27.5036, "lng": 77.6734},
    "radha-vallabh": {"lat": 27.5800, "lng": 77.6989},
    "govind-dev-temple": {"lat": 27.5814, "lng": 77.6972},
    "madan-mohan-temple": {"lat": 27.5844, "lng": 77.6856},
    "radha-raman-temple": {"lat": 27.5806, "lng": 77.6997},
    "shahji-temple": {"lat": 27.5783, "lng": 77.6991},
    "rangaji-temple": {"lat": 27.5778, "lng": 77.7006},
    "jaipur-temple": {"lat": 27.5764, "lng": 77.7011},
    "imli-tala-tree": {"lat": 27.5792, "lng": 77.6978},
    "jugal-kishore-temple": {"lat": 27.5789, "lng": 77.6995},
    "katyayani-temple": {"lat": 27.5847, "lng": 77.6864},
    "vaishno-devi-temple-vn": {"lat": 27.5772, "lng": 77.6992}
}

SPIRITUAL_PLACE_COORDINATES = {
    "kesi-ghat": {"lat": 27.5828, "lng": 77.6867},
    "radha-kund": {"lat": 27.4936, "lng": 77.7333},
    "shyam-kund": {"lat": 27.4933, "lng": 77.7336},
    "kusum-sarovar": {"lat": 27.4897, "lng": 77.7364},
    "nidhivan": {"lat": 27.5794, "lng": 77.6975},
    "govardhan-hill": {"lat": 27.4917, "lng": 77.7333},
    "manasi-ganga": {"lat": 27.4958, "lng": 77.7322},
    "chir-ghat": {"lat": 27.5836, "lng": 77.6858},
    "vishram-ghat": {"lat": 27.5047, "lng": 77.6717},
    "seva-kunj": {"lat": 27.5796, "lng": 77.6973},
    "dauji-temple": {"lat": 27.5928, "lng": 77.7544}
}

async def add_coordinates():
    """Add lat/lng coordinates to temples and spiritual places"""
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    
    print("🗺️  Adding geographic coordinates to database...")
    print("=" * 60)
    
    try:
        # Update temples
        temple_count = 0
        for temple_id, coords in TEMPLE_COORDINATES.items():
            result = await db.temples.update_one(
                {"_id": temple_id},
                {"$set": {"coordinates": coords}}
            )
            if result.modified_count > 0:
                temple_count += 1
                print(f"   ✅ Updated {temple_id}")
        
        print(f"\n📍 {temple_count} temples updated with coordinates")
        
        # Update spiritual places
        place_count = 0
        for place_id, coords in SPIRITUAL_PLACE_COORDINATES.items():
            result = await db.spiritual_places.update_one(
                {"_id": place_id},
                {"$set": {"coordinates": coords}}
            )
            if result.modified_count > 0:
                place_count += 1
                print(f"   ✅ Updated {place_id}")
        
        print(f"\n🕉️  {place_count} spiritual places updated with coordinates")
        print("\n" + "=" * 60)
        print("✅ Geographic data added successfully!")
        print("\n🗺️  Map integration ready!")
        
    except Exception as e:
        print(f"\n❌ Error adding coordinates: {str(e)}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(add_coordinates())
