"""
Database seeding script for Vrindavan Mathura Guide
Seeds the database with initial temple, spiritual place, planning guide, and festival data
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

# Sample data matching the frontend structure
TEMPLES_DATA = [
    {
        "_id": "banke-bihari-temple",
        "name": "Banke Bihari Temple",
        "location": "Vrindavan",
        "deity": "Lord Krishna (Banke Bihari form)",
        "summary": "Banke Bihari Temple is one of the most revered temples in Vrindavan, dedicated to Lord Krishna in his Banke Bihari form. The temple is known for its unique darshan customs where the curtain is opened and closed multiple times, preventing devotees from being mesmerized by the deity's enchanting form.",
        "history": "The temple was established in 1864 by Swami Haridas, a renowned devotee and musician. The deity was discovered by Swami Haridas at Nidhivan. The term 'Banke' means bent, and 'Bihari' means supreme enjoyer, referring to Krishna's threefold bending posture.",
        "significance": "This temple holds immense spiritual significance as it is believed that Swami Haridas, through his devotional music, made Lord Krishna manifest in this form. The deity is considered highly sacred and powerful, attracting millions of devotees annually.",
        "darshan": {
            "morning": "7:30 AM – 12:00 PM",
            "evening": "5:30 PM – 9:30 PM",
            "notes": "Darshan timings may vary on festivals and special occasions."
        }
    },
    {
        "_id": "iskcon-vrindavan",
        "name": "ISKCON Vrindavan (Krishna Balaram Mandir)",
        "location": "Vrindavan",
        "deity": "Krishna-Balaram, Radha-Shyamasundar, Gaura-Nitai",
        "summary": "ISKCON Vrindavan, also known as Krishna Balaram Mandir, is the main temple of the International Society for Krishna Consciousness in Vrindavan. Founded by Srila Prabhupada in 1975, it serves as a major pilgrimage center combining traditional worship with modern temple management.",
        "history": "The temple was established by A.C. Bhaktivedanta Swami Prabhupada, founder of ISKCON, in 1975. It was one of the first major temples built by ISKCON outside of Western countries. The temple complex includes the samadhi (memorial) of Srila Prabhupada.",
        "significance": "This temple represents the global spread of Krishna consciousness and Gaudiya Vaishnavism. It bridges traditional Vrindavan devotion with modern organizational structure, attracting both Indian pilgrims and international devotees.",
        "darshan": {
            "morning": "4:30 AM – 1:00 PM",
            "evening": "4:00 PM – 9:00 PM",
            "notes": "Daily schedule. Guest house accommodation available for devotees."
        },
        "visitorGuidance": [
            "Dress code enforced - traditional or modest clothing required",
            "Free guided tours available for groups",
            "Prasadam (sanctified food) available at the dining hall",
            "Bookstore and gift shop on premises",
            "Clean restroom facilities available",
            "Samadhi of Srila Prabhupada can be visited separately"
        ],
        "festivals": ["Janmashtami", "Gaura Purnima", "Radha Ashtami"]
    },
    {
        "_id": "prem-mandir",
        "name": "Prem Mandir",
        "location": "Vrindavan",
        "deity": "Radha Krishna, Sita Ram",
        "summary": "Prem Mandir, meaning Temple of Divine Love, is a modern architectural marvel in Vrindavan inaugurated in 2012. Built entirely of white marble with intricate carvings depicting Krishna's pastimes, it combines traditional devotion with contemporary temple design and illumination.",
        "history": "Prem Mandir was constructed under the guidance of Jagadguru Kripalu Maharaj and was inaugurated on February 15, 2012. The construction took approximately 11 years, involving artisans from across India. The temple showcases episodes from Krishna and Rama's lives through detailed marble carvings.",
        "significance": "The temple represents modern temple architecture while maintaining spiritual authenticity. It emphasizes the message of divine love (prem) and has become one of the most visited temples in Vrindavan due to its aesthetic beauty and devotional atmosphere.",
        "darshan": {
            "morning": "5:30 AM – 12:00 PM",
            "evening": "4:30 PM – 9:30 PM",
            "notes": "Evening light and sound show at 7:00 PM. Timings vary in winter."
        },
        "visitorGuidance": [
            "Arrive before 6:30 PM to secure a good spot for the evening show",
            "The temple premises are extensive - allow 1-2 hours for complete visit",
            "Wheelchair and stroller accessible",
            "Clean facilities and well-maintained gardens",
            "Photography allowed in outer premises, restricted inside sanctum",
            "Security check at entrance - avoid carrying large bags"
        ],
        "festivals": ["Janmashtami", "Radha Ashtami", "Holi", "Diwali"]
    },
    {
        "_id": "krishna-janmabhoomi",
        "name": "Krishna Janmabhoomi Temple",
        "location": "Mathura",
        "deity": "Lord Krishna",
        "summary": "Krishna Janmabhoomi Temple marks the birthplace of Lord Krishna in Mathura. The temple complex includes the prison cell where Krishna was born to Devaki and Vasudeva. It is one of the most sacred pilgrimage sites in Hinduism and attracts millions of devotees annually.",
        "history": "The site has been a place of worship for over 5,000 years. The original temple was destroyed multiple times through history. The current structure was rebuilt in the 20th century. The prison cell (garbha griha) where Krishna is believed to have been born remains the spiritual center.",
        "significance": "As the birthplace of Lord Krishna, this site holds supreme importance in Hindu theology and pilgrimage traditions. It connects devotees directly to the moment of Krishna's divine appearance on earth, making it one of the holiest sites in Vaishnavism.",
        "darshan": {
            "morning": "5:00 AM – 12:00 PM",
            "evening": "4:00 PM – 9:00 PM",
            "notes": "Strict security protocols. Electronics not allowed. Timings vary seasonally."
        },
        "visitorGuidance": [
            "Leave all electronic devices, bags, and valuables in lockers before entry",
            "Security screening is mandatory for all visitors",
            "Expect waiting times of 2-4 hours during peak seasons",
            "Dress conservatively - shoulders and knees must be covered",
            "Visit early morning on weekdays for shorter wait times",
            "Guided tours available in multiple languages"
        ],
        "festivals": ["Janmashtami", "Holi", "Diwali"]
    },
    {
        "_id": "radha-vallabh",
        "name": "Radha Vallabh Temple",
        "location": "Vrindavan",
        "deity": "Radha Vallabh (Krishna with focus on Radha)",
        "summary": "Radha Vallabh Temple is a significant spiritual center established in the 16th century by Hit Harivansh Mahaprabhu. Unique for its singular focus on Radha, the temple enshrines only Radha's crown alongside Krishna, symbolizing their inseparable divine love.",
        "history": "The temple was founded in 1585 CE by Hit Harivansh Mahaprabhu, a contemporary of Chaitanya Mahaprabhu. The tradition emphasizes Radha as the supreme power, with Krishna as her beloved. The temple follows the Radhavallabh Sampradaya, one of the major Vaishnava traditions.",
        "significance": "This temple represents a unique theological position within Krishna worship, emphasizing Radha's supremacy. The temple's practices and philosophy attract scholars and devotees interested in the Radha-centric bhakti tradition.",
        "darshan": {
            "morning": "8:00 AM – 12:00 PM",
            "evening": "5:00 PM – 9:00 PM",
            "notes": "Traditional worship practices preserved. Classical music performances during festivals."
        },
        "visitorGuidance": [
            "Quieter temple suitable for contemplative visits",
            "Photography policies vary - ask temple authorities",
            "Limited English signage - local guide recommended for deeper understanding",
            "Adjacent to other historical temples in Vrindavan's old quarter",
            "Modest dress code enforced",
            "Best visited during morning hours for peaceful darshan"
        ],
        "festivals": ["Radha Ashtami", "Janmashtami", "Holi"]
    }
]

SPIRITUAL_PLACES_DATA = [
    {
        "_id": "kesi-ghat",
        "name": "Kesi Ghat",
        "location": "Vrindavan",
        "type": "Ghat",
        "summary": "Kesi Ghat is one of the most important ghats on the Yamuna River in Vrindavan, named after the demon Kesi whom Krishna defeated. The ghat is known for its spiritual atmosphere, daily aartis, and historical significance in Krishna's pastimes.",
        "description": "Kesi Ghat stretches along the Yamuna River and serves as a primary bathing and worship spot for pilgrims. The ghat hosts the famous Yamuna Aarti during evenings, attracting hundreds of devotees. The site is mentioned in ancient scriptures describing Krishna's childhood activities.",
        "bestTimeToVisit": "Early morning (6:00-8:00 AM) for peaceful bathing or evening (6:00-7:30 PM) for Yamuna Aarti",
        "activities": ["Yamuna Aarti", "Holy bath", "Meditation", "Boat rides"]
    }
]

PLANNING_GUIDES_DATA = [
    {
        "_id": "best-time-to-visit",
        "title": "Best Time to Visit Mathura-Vrindavan",
        "summary": "The ideal time to visit Mathura-Vrindavan depends on your tolerance for weather and crowds. October to March offers pleasant weather, while monsoon and summer present different experiences with varying crowd levels and spiritual intensity.",
        "category": "timing",
        "content": {
            "bestMonths": "October to March (Pleasant weather, moderate crowds)",
            "peakSeason": "Janmashtami (August/September), Holi (February/March) - Expect very large crowds, advance planning essential",
            "summerMonths": "April to June - Hot weather (35-45°C), fewer tourists, peaceful temple visits",
            "monsoonMonths": "July to September - Rainfall, lush greenery, spiritual atmosphere, minimal crowds",
            "recommendations": [
                "First-time visitors: October-November or February-March",
                "Festival enthusiasts: Plan around Janmashtami or Holi",
                "Seeking solitude: May-June or July-August (prepare for weather)",
                "Senior citizens: November-February for comfortable temperatures"
            ]
        }
    },
    {
        "_id": "dress-code-guidelines",
        "title": "Dress Code and Temple Etiquette",
        "summary": "Mathura-Vrindavan temples enforce modest dress codes reflecting the sacred nature of these sites. Visitors should dress conservatively to show respect and ensure smooth entry into all temples and spiritual locations.",
        "category": "dress-code",
        "content": {
            "generalGuidelines": [
                "Shoulders must be covered (no sleeveless tops)",
                "Legs covered below knees (no shorts)",
                "Avoid transparent or tight-fitting clothing",
                "Remove footwear before entering temples",
                "Head covering recommended for women in certain temples"
            ],
            "strictTemples": "Banke Bihari, Krishna Janmabhoomi, and Radha Vallabh enforce dress codes strictly",
            "recommendations": "Carry a light shawl or scarf for flexibility. Comfortable walking shoes are essential as you'll remove them frequently."
        }
    }
]

FESTIVALS_DATA = [
    {
        "_id": "janmashtami",
        "name": "Janmashtami",
        "summary": "Janmashtami celebrates the birth of Lord Krishna at midnight. It is the most significant festival in Mathura-Vrindavan, marked by massive crowds, elaborate decorations, midnight celebrations, and deep devotional fervor across all temples.",
        "description": "The festival occurs in August or September (based on lunar calendar). Temples remain open throughout the night. Expect crowds of 100,000+ devotees in major temples. Advance accommodation booking is essential.",
        "crowdExpectation": "Extremely High",
        "safetyNotes": "Stay with groups, keep valuables secure, follow police instructions, carry identification",
        "bestExperience": "Krishna Janmabhoomi in Mathura or Banke Bihari in Vrindavan"
    }
]

async def seed_database():
    """Seed the database with initial data"""
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    
    print("🌱 Starting database seeding...")
    
    try:
        # Clear existing data (optional - comment out if you want to preserve existing data)
        print("Clearing existing data...")
        await db.temples.delete_many({})
        await db.spiritual_places.delete_many({})
        await db.planning_guides.delete_many({})
        await db.festivals.delete_many({})
        
        # Seed temples
        print(f"Seeding {len(TEMPLES_DATA)} temples...")
        if TEMPLES_DATA:
            await db.temples.insert_many(TEMPLES_DATA)
        
        # Seed spiritual places
        print(f"Seeding {len(SPIRITUAL_PLACES_DATA)} spiritual places...")
        if SPIRITUAL_PLACES_DATA:
            await db.spiritual_places.insert_many(SPIRITUAL_PLACES_DATA)
        
        # Seed planning guides
        print(f"Seeding {len(PLANNING_GUIDES_DATA)} planning guides...")
        if PLANNING_GUIDES_DATA:
            await db.planning_guides.insert_many(PLANNING_GUIDES_DATA)
        
        # Seed festivals
        print(f"Seeding {len(FESTIVALS_DATA)} festivals...")
        if FESTIVALS_DATA:
            await db.festivals.insert_many(FESTIVALS_DATA)
        
        print("✅ Database seeding completed successfully!")
        
        # Print summary
        temple_count = await db.temples.count_documents({})
        place_count = await db.spiritual_places.count_documents({})
        guide_count = await db.planning_guides.count_documents({})
        festival_count = await db.festivals.count_documents({})
        
        print(f"\n📊 Summary:")
        print(f"   Temples: {temple_count}")
        print(f"   Spiritual Places: {place_count}")
        print(f"   Planning Guides: {guide_count}")
        print(f"   Festivals: {festival_count}")
        
    except Exception as e:
        print(f"❌ Error seeding database: {str(e)}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(seed_database())
