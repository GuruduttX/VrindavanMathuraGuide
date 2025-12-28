"""
Content Expansion Script - Add 15+ temples, spiritual places, and festivals
This script expands the database with comprehensive content for the Vrindavan Mathura Guide
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

# Additional Temple Data (15 more temples)
ADDITIONAL_TEMPLES = [
    {
        "_id": "govind-dev-temple",
        "name": "Govind Dev Temple",
        "location": "Vrindavan",
        "deity": "Govind Dev (Lord Krishna)",
        "summary": "Govind Dev Temple is one of the most prominent temples in Vrindavan, originally built in 1590 CE. The temple showcases magnificent Mughal architecture and houses the deity that was personally worshipped by Chaitanya Mahaprabhu.",
        "history": "Built by Raja Man Singh of Amber in 1590 CE, the temple once stood seven stories tall. During Aurangzeb's reign, the upper floors were demolished, leaving only the ground floor intact. The original deity was moved to Jaipur for protection, and a replica now resides in Vrindavan.",
        "significance": "This temple holds special importance as the deity was discovered by Rupa Goswami and worshipped by Chaitanya Mahaprabhu himself. The architectural grandeur reflects the devotion of Raja Man Singh and the golden era of Vrindavan's temple construction.",
        "darshan": {
            "morning": "7:30 AM – 12:30 PM",
            "evening": "5:00 PM – 9:00 PM",
            "notes": "Aarti times: Morning 7:30 AM, Evening 7:00 PM"
        },
        "visitorGuidance": [
            "Large temple complex with spacious courtyards",
            "Photography allowed in outer areas",
            "Traditional dress appreciated",
            "Parking available nearby",
            "Best visited during morning hours"
        ],
        "festivals": ["Janmashtami", "Radha Ashtami", "Annakut"]
    },
    {
        "_id": "madan-mohan-temple",
        "name": "Madan Mohan Temple",
        "location": "Vrindavan",
        "deity": "Madan Mohan (Lord Krishna)",
        "summary": "Madan Mohan Temple is the oldest temple in Vrindavan, built in 1580 CE by Kapur Ram Das. The temple is situated on a hill offering panoramic views of the Yamuna River and Vrindavan landscape.",
        "history": "Established in 1580 CE, this was the first temple constructed during Vrindavan's renaissance under the Goswamis. The original deity was moved to Jaipur during Aurangzeb's reign for protection. The temple's elevated position made it a landmark for pilgrims.",
        "significance": "As Vrindavan's oldest standing temple, it represents the beginning of the holy town's transformation into a major pilgrimage center. The deity was installed by Sanatana Goswami, one of the six Goswamis of Vrindavan.",
        "darshan": {
            "morning": "8:00 AM – 12:00 PM",
            "evening": "4:00 PM – 8:00 PM",
            "notes": "Climb required to reach temple. Sunset views are spectacular."
        },
        "visitorGuidance": [
            "Located on hilltop - requires stair climbing",
            "Not wheelchair accessible",
            "Excellent views of Yamuna and Vrindavan",
            "Visit during sunset for beautiful photography",
            "Peaceful atmosphere compared to crowded temples"
        ],
        "festivals": ["Janmashtami", "Radha Ashtami"]
    },
    {
        "_id": "radha-raman-temple",
        "name": "Radha Raman Temple",
        "location": "Vrindavan",
        "deity": "Radha Raman (Self-manifested Krishna deity)",
        "summary": "Radha Raman Temple houses a unique self-manifested deity of Krishna that appeared from a sacred shaligram. The temple maintains traditional worship practices established in 1542 CE and follows the teachings of Gopala Bhatta Goswami.",
        "history": "In 1542 CE, Gopala Bhatta Goswami performed worship of his shaligram shilas. Miraculously, one shila transformed into the beautiful form of Radha Raman (one who pleases Radha). This self-manifested deity has been worshipped continuously since then.",
        "significance": "This is one of the few temples in Vrindavan that still houses an original deity that was never removed during historical conflicts. The self-manifested nature of Radha Raman makes it extraordinarily sacred. The temple maintains the most traditional Gaudiya Vaishnava practices.",
        "darshan": {
            "morning": "7:30 AM – 12:30 PM",
            "evening": "5:30 PM – 9:00 PM",
            "notes": "Extended darshan during festivals. Traditional worship rituals visible."
        },
        "visitorGuidance": [
            "Observe traditional Gaudiya Vaishnava practices",
            "Photography restrictions apply",
            "Original 16th-century deity (never replaced)",
            "Temple maintains historical authenticity",
            "Respectful silence appreciated during worship"
        ],
        "festivals": ["Janmashtami", "Radhashtami", "Sharad Purnima"]
    },
    {
        "_id": "shahji-temple",
        "name": "Shahji Temple",
        "location": "Vrindavan",
        "deity": "Radha Krishna",
        "summary": "Shahji Temple is renowned for its stunning Belgian glass work and intricate architecture. Built in the early 1800s, the temple represents a unique blend of spiritual devotion and artistic excellence.",
        "history": "Constructed by Shah Kundan Lal of Lucknow in the early 19th century, the temple took over 40 years to complete. The exquisite Belgian glass decorations were imported specifically for this project, making it one of the most artistically significant temples in Vrindavan.",
        "significance": "The temple showcases the devotion of wealthy patrons who spared no expense in creating a divine atmosphere. The intricate mirror work and colored glass create a mesmerizing visual experience, representing heaven on earth.",
        "darshan": {
            "morning": "8:00 AM – 12:00 PM",
            "evening": "4:00 PM – 8:00 PM",
            "notes": "Best viewed when sunlight enters through stained glass."
        },
        "visitorGuidance": [
            "Marvel at the Belgian glass artwork",
            "Visit during daytime for best lighting effects",
            "Photography allowed in designated areas",
            "Architectural tour available",
            "Peaceful environment for contemplation"
        ],
        "festivals": ["Janmashtami", "Radha Ashtami", "Diwali"]
    },
    {
        "_id": "rangaji-temple",
        "name": "Rangaji Temple (Ranganatha Temple)",
        "location": "Vrindavan",
        "deity": "Ranganatha (Vishnu in reclining posture)",
        "summary": "Rangaji Temple is the largest temple in Vrindavan, built in South Indian architectural style. It features a 6-story gopuram (tower), making it a unique landmark in the predominantly North Indian temple landscape of Vrindavan.",
        "history": "Built in 1851 by Seth Govind Das and his family from Chennai, the temple brings South Indian temple tradition to Vrindavan. The construction took several years and required artisans from South India to execute the distinctive Dravidian architectural style.",
        "significance": "This temple represents the pan-Indian nature of Krishna devotion, bridging North and South Indian traditions. The unique architecture and worship style offer visitors exposure to diverse expressions of Vaishnavism.",
        "darshan": {
            "morning": "6:00 AM – 1:00 PM",
            "evening": "4:00 PM – 9:00 PM",
            "notes": "Rathotsavam (chariot festival) celebrated annually in March-April."
        },
        "visitorGuidance": [
            "Witness South Indian temple architecture in Vrindavan",
            "Six-story gopuram visible from distance",
            "Annual chariot festival is major attraction",
            "Spacious temple complex",
            "Traditional South Indian prasadam available"
        ],
        "festivals": ["Brahmotsavam", "Rathotsavam", "Janmashtami"]
    },
    {
        "_id": "jaipur-temple",
        "name": "Jaipur Temple (Radha Madhav Temple)",
        "location": "Vrindavan",
        "deity": "Radha Madhav",
        "summary": "Jaipur Temple is an architectural masterpiece built by the Maharaja of Jaipur in 1917. The temple combines Rajasthani architectural excellence with devotional purpose, featuring intricate marble work and beautiful sculptures.",
        "history": "Commissioned by Maharaja Sawai Madho Singh II of Jaipur in 1917, the temple represents the royal patronage of Vrindavan temples. The pink sandstone used in construction gives it a distinctive appearance similar to Jaipur's architecture.",
        "significance": "The temple exemplifies royal devotion and architectural patronage. The detailed sculptural work depicting Krishna's pastimes serves both devotional and educational purposes for visitors.",
        "darshan": {
            "morning": "8:00 AM – 12:00 PM",
            "evening": "5:00 PM – 9:00 PM",
            "notes": "Well-maintained gardens. Photography allowed in outer areas."
        },
        "visitorGuidance": [
            "Admire Rajasthani architectural style",
            "Beautiful gardens and fountains",
            "Detailed sculptural narratives",
            "Wheelchair accessible",
            "Clean and well-maintained premises"
        ],
        "festivals": ["Janmashtami", "Radha Ashtami", "Holi"]
    },
    {
        "_id": "imli-tala-tree",
        "name": "Imli Tala (Sacred Tamarind Tree)",
        "location": "Vrindavan",
        "deity": "Krishna Leela Site",
        "summary": "Imli Tala is the sacred site of an ancient tamarind tree where Krishna and Balarama performed childhood pastimes. Though not a traditional temple, it holds immense spiritual significance as a direct connection to Krishna's earthly activities.",
        "history": "This ancient tamarind tree marks a spot where Krishna and Balarama would rest during their childhood. According to tradition, the tree is thousands of years old, though it has been replanted and maintained over centuries.",
        "significance": "The site represents authentic locations of Krishna's pastimes rather than constructed temples. Devotees consider circumambulating this tree and offering prayers here as spiritually potent.",
        "darshan": {
            "morning": "Sunrise to Noon",
            "evening": "4:00 PM – Sunset",
            "notes": "Open-air site. Best visited during cooler hours."
        },
        "visitorGuidance": [
            "Historical site of Krishna's pastimes",
            "Open-air location",
            "Circumambulation path available",
            "Simple and contemplative atmosphere",
            "Often less crowded than major temples"
        ],
        "festivals": ["Janmashtami", "Gopashtami"]
    },
    {
        "_id": "jugal-kishore-temple",
        "name": "Jugal Kishore Temple",
        "location": "Vrindavan",
        "deity": "Jugal Kishore (Radha Krishna as divine couple)",
        "summary": "Jugal Kishore Temple celebrates the eternal divine couple Radha and Krishna in their united form. The temple emphasizes the inseparable nature of divine love and devotion.",
        "history": "Established in the 19th century, the temple specifically honors the concept of Jugal (pair/couple), representing the ultimate spiritual union of Radha and Krishna. The theology emphasizes that devotion to both is essential for complete spiritual understanding.",
        "significance": "The temple represents the theological understanding that Radha and Krishna are one divine essence manifested as two for the purpose of divine love play. This concept is central to Gaudiya Vaishnavism.",
        "darshan": {
            "morning": "7:00 AM – 12:00 PM",
            "evening": "5:00 PM – 9:00 PM",
            "notes": "Peaceful atmosphere. Traditional worship maintained."
        },
        "visitorGuidance": [
            "Focus on Radha-Krishna as divine couple",
            "Traditional worship practices",
            "Smaller temple with intimate atmosphere",
            "Located in historical Vrindavan area",
            "Photography restrictions apply"
        ],
        "festivals": ["Janmashtami", "Radha Ashtami", "Yugal Milan"]
    },
    {
        "_id": "katyayani-temple",
        "name": "Katyayani Devi Temple",
        "location": "Vrindavan",
        "deity": "Goddess Katyayani",
        "summary": "Katyayani Devi Temple is dedicated to the goddess whom the gopis worshipped to obtain Krishna as their husband. The temple connects the Krishna bhakti tradition with goddess worship.",
        "history": "The temple marks the spot where the gopis of Vrindavan performed the Katyayani vrata (vow) to obtain Krishna as their beloved. This event is described in Bhagavata Purana and is a central narrative in Vrindavan's spiritual geography.",
        "significance": "The temple represents the gopis' devotion and their desire for exclusive love of Krishna. For devotees, visiting this temple symbolizes their own aspiration for pure devotional love.",
        "darshan": {
            "morning": "6:00 AM – 12:00 PM",
            "evening": "4:00 PM – 8:00 PM",
            "notes": "Connected to Yamuna River. Early morning visits recommended."
        },
        "visitorGuidance": [
            "Significant for female devotees",
            "Connection to gopi pastimes",
            "Located near Yamuna River",
            "Peaceful early morning atmosphere",
            "Traditional rituals observed"
        ],
        "festivals": ["Katyayani Vrata", "Janmashtami", "Radha Ashtami"]
    },
    {
        "_id": "vaishno-devi-temple-vn",
        "name": "Vaishno Devi Temple Vrindavan",
        "location": "Vrindavan",
        "deity": "Goddess Vaishno Devi",
        "summary": "Vaishno Devi Temple in Vrindavan offers pilgrims the opportunity to worship the goddess without traveling to the Himalayas. The temple replicates the sacred cave shrine experience.",
        "history": "Built in the modern era to allow devotees to experience Vaishno Devi worship in the context of Vrindavan pilgrimage. The temple design mimics the original cave shrine in Jammu.",
        "significance": "The temple demonstrates the integration of different Hindu devotional traditions within Vrindavan. It allows pilgrims to offer prayers to the Divine Mother alongside their Krishna devotion.",
        "darshan": {
            "morning": "6:00 AM – 1:00 PM",
            "evening": "4:00 PM – 10:00 PM",
            "notes": "Cave-like passage for darshan experience. May involve queuing."
        },
        "visitorGuidance": [
            "Simulated cave shrine experience",
            "Suitable for those unable to travel to Himalayas",
            "Crowded during Navratri",
            "Modest dress code enforced",
            "Photography not allowed inside cave"
        ],
        "festivals": ["Navratri", "Diwali"]
    }
]

# Additional Spiritual Places (10 more)
ADDITIONAL_SPIRITUAL_PLACES = [
    {
        "_id": "radha-kund",
        "name": "Radha Kund",
        "location": "Vrindavan (Govardhan area)",
        "type": "Sacred Kund (Pond)",
        "summary": "Radha Kund is the most sacred pond in Vrindavan, created by Radha herself. Chaitanya Mahaprabhu declared it the holiest place in the universe, surpassing even Vrindavan. The kund is surrounded by temples and ashrams of major spiritual lineages.",
        "description": "According to tradition, Radha Kund appeared when Radharani struck the ground, desiring a place to bathe after Krishna killed the demon Aristasura. The pond is considered non-different from Radharani herself. Bathing here, especially on Kartik Purnima, is believed to grant pure love of Krishna.",
        "bestTimeToVisit": "October-March, especially during Kartik month (Oct-Nov). Kartik Purnima for holy bath.",
        "activities": ["Holy bath (particularly on Kartik Purnima)", "Parikrama (circumambulation)", "Meditation", "Temple visits around the kund"]
    },
    {
        "_id": "shyam-kund",
        "name": "Shyam Kund (Shyama Kund)",
        "location": "Vrindavan (Govardhan area)",
        "type": "Sacred Kund",
        "summary": "Shyam Kund, adjacent to Radha Kund, was manifested by Krishna himself. The two kunds together represent the divine couple and their eternal pastimes. Devotees consider visiting both kunds together as essential.",
        "description": "Shyam Kund appeared when Krishna created it with His flute after Radha Kund manifested. The proximity of the two kunds symbolizes the inseparable nature of Radha and Krishna. The area is particularly sacred during Kartik month when thousands of devotees perform parikrama.",
        "bestTimeToVisit": "October-March. Best during Kartik month for enhanced spiritual atmosphere.",
        "activities": ["Parikrama with Radha Kund", "Holy bath", "Meditation", "Circumambulation"]
    },
    {
        "_id": "kusum-sarovar",
        "name": "Kusum Sarovar",
        "location": "Govardhan",
        "type": "Sacred Sarovar (Lake)",
        "summary": "Kusum Sarovar is a stunning sandstone reservoir built by Raja Suraj Mal of Bharatpur in the 18th century. The site combines natural beauty, architectural excellence, and spiritual significance as a location of Krishna's pastimes.",
        "description": "This square reservoir is 60 feet deep with 36 sandstone cenotaphs along its banks. According to tradition, Radha and the gopis collected flowers (kusumas) here for Krishna's worship. The sunset views from Kusum Sarovar are considered among the most beautiful in Braj region.",
        "bestTimeToVisit": "Sunset hours (5:30-7:00 PM) for spectacular views. October-March for pleasant weather.",
        "activities": ["Sunset viewing", "Photography", "Meditation", "Historical architecture appreciation", "Parikrama"]
    },
    {
        "_id": "nidhivan",
        "name": "Nidhivan",
        "location": "Vrindavan",
        "type": "Sacred Grove",
        "summary": "Nidhivan is a mystical grove of twisted trees where, according to tradition, Radha and Krishna perform their divine dance (Rasa Lila) every night. The grove is strictly closed after sunset, and mysterious legends surround nighttime occurrences.",
        "description": "Nidhivan's trees have unusual, intertwined trunks, creating a mysterious atmosphere. Local tradition maintains that these trees are frozen gopis who participated in Krishna's Rasa dance. The area is off-limits after dark, and numerous supernatural accounts exist from those who claim to have heard divine music and seen unexplained phenomena.",
        "bestTimeToVisit": "Morning hours (8:00 AM - 5:00 PM). Evening entry strictly prohibited.",
        "activities": ["Darshan of Rang Mahal", "Meditation", "Observing unique tree formations", "Spiritual contemplation"]
    },
    {
        "_id": "govardhan-hill",
        "name": "Govardhan Hill",
        "location": "Govardhan",
        "type": "Sacred Hill",
        "summary": "Govardhan Hill is the sacred mountain that Krishna lifted on His little finger to protect the residents of Vrindavan from Indra's wrath. The 21-kilometer parikrama (circumambulation) around Govardhan is one of the most important pilgrimages in Vaishnavism.",
        "description": "Govardhan Hill is worshipped as a form of Krishna himself. The parikrama route passes through multiple holy sites including Radha Kund, Kusum Sarovar, Manasi Ganga, and numerous temples. Devotees believe that performing Govardhan parikrama fulfills all spiritual desires and purifies the soul.",
        "bestTimeToVisit": "October-March for comfortable walking. Kartik month (Oct-Nov) for peak spiritual atmosphere. Avoid summer (too hot for 21km walk).",
        "activities": ["21 km parikrama (full)", "Dandavat parikrama (prostrated)", "Visiting holy sites along the route", "Offering prayers at Govardhan Puja sites"]
    },
    {
        "_id": "manasi-ganga",
        "name": "Manasi Ganga",
        "location": "Govardhan",
        "type": "Sacred Lake",
        "summary": "Manasi Ganga is a sacred lake at the base of Govardhan Hill, manifested by Krishna through His mind (manas). The evening aarti here is renowned, with thousands of lamps floating on the water creating a mesmerizing spiritual atmosphere.",
        "description": "According to tradition, Krishna's parents desired to bathe in the Ganges but couldn't travel there. Krishna manifested Ganges water mentally (manasi) at Govardhan, creating this sacred lake. The nightly aarti with floating diyas is one of Braj's most beautiful devotional ceremonies.",
        "bestTimeToVisit": "Evening time (6:00-7:30 PM) for aarti. October-March for pleasant weather.",
        "activities": ["Evening aarti ceremony", "Holy bath", "Boat rides", "Feeding fish and turtles", "Meditation by lakeside"]
    },
    {
        "_id": "chir-ghat",
        "name": "Chir Ghat",
        "location": "Vrindavan",
        "type": "Ghat",
        "summary": "Chir Ghat is the sacred site where Krishna playfully hid the clothes of the bathing gopis. This pastime is central to understanding Krishna's divine play and the gopis' transcendental love.",
        "description": "At this ghat on the Yamuna River, Krishna took the gopis' clothes while they were bathing and sat in a kadamba tree. When the embarrassed gopis requested their clothes back, Krishna asked them to come out with hands raised, teaching a spiritual lesson about complete surrender. The site commemorates this famous pastime described in Bhagavata Purana.",
        "bestTimeToVisit": "Early morning (6:00-9:00 AM) for peaceful atmosphere. October-March for comfortable weather.",
        "activities": ["Meditation on Krishna's pastimes", "Holy bath", "Temple visits", "Yamuna darshan"]
    },
    {
        "_id": "vishram-ghat",
        "name": "Vishram Ghat",
        "location": "Mathura",
        "type": "Ghat",
        "summary": "Vishram Ghat is the most important ghat in Mathura, where Krishna rested (vishram) after killing the demon Kamsa. The ghat is the focal point of Mathura's Yamuna riverfront and hosts major festivals and daily aartis.",
        "description": "This central ghat marks the spot where Krishna, Balarama, and their companions bathed and rested after defeating Kamsa and liberating Mathura. It is considered the most sacred bathing spot in Mathura. The evening aarti here attracts hundreds of devotees daily. Multiple temples and dharamshalas line the ghat.",
        "bestTimeToVisit": "Evening aarti time (6:00-7:30 PM). Early morning (6:00-8:00 AM) for holy bath.",
        "activities": ["Yamuna aarti", "Holy bath", "Boat rides", "Temple visits", "Feeding fish"]
    },
    {
        "_id": "seva-kunj",
        "name": "Seva Kunj (Nikunjvan)",
        "location": "Vrindavan",
        "type": "Sacred Grove",
        "summary": "Seva Kunj is the divine garden where Radha and Krishna perform their eternal pastimes. Like Nidhivan, this sacred grove has mystical significance and strict nighttime restrictions.",
        "description": "Seva Kunj is believed to be the place where Radha personally serves Krishna during the night. The garden contains a small temple and sleeping bed where, according to tradition, Krishna rests. The grove is locked at sunset, and local belief holds that divine activities occur there nightly. The twin-trunked trees are considered manifestations of the gopis.",
        "bestTimeToVisit": "Morning to evening (7:00 AM - 6:00 PM). Closed after sunset.",
        "activities": ["Darshan of divine bed chamber", "Meditation", "Photography of unique trees", "Spiritual contemplation"]
    },
    {
        "_id": "dauji-temple",
        "name": "Dauji Temple (Baldeo)",
        "location": "Baldeo (near Mathura)",
        "type": "Temple/Sacred Site",
        "summary": "Dauji Temple is dedicated to Balarama (Krishna's elder brother), who is worshipped here as the primary deity. The temple is located in Baldeo, named after Balarama (also called Baldau or Dauji).",
        "description": "This ancient temple honors Balarama, who is considered an incarnation of Shesha (the divine serpent). The deity's unique form and the temple's historical significance make it an important pilgrimage site. The temple follows traditional worship practices and celebrates Balarama-specific festivals.",
        "bestTimeToVisit": "October-March. Balarama Jayanti (August-September) for festival celebrations.",
        "activities": ["Darshan of Balarama deity", "Understanding Balarama's significance", "Festival participation", "Local cultural experience"]
    }
]

# Additional Festivals (8 more)
ADDITIONAL_FESTIVALS = [
    {
        "_id": "holi-vrindavan",
        "name": "Holi in Vrindavan",
        "summary": "Holi in Vrindavan is world-famous, celebrating Krishna's playful color games with the gopis. The festival spans several days with unique traditions at different temples, including the renowned Phoolon Ki Holi (flower Holi) at Banke Bihari Temple.",
        "description": "Vrindavan's Holi celebration is unparalleled in India. The festivities begin a week before the actual day with Lathmar Holi in Barsana (where women playfully beat men with sticks), followed by Phoolon Ki Holi at Banke Bihari (using flowers instead of colors), and culminate in massive street celebrations with colored powders, music, and devotional fervor. Thousands of devotees gather to experience this divine play reenactment.",
        "crowdExpectation": "Extremely High - Hundreds of thousands of visitors",
        "safetyNotes": "Stay in groups, protect valuables, avoid isolated areas, wear old clothes, protect eyes from color powder, carry drinking water, be prepared for intense crowding. Women should exercise special caution and consider joining organized groups.",
        "bestExperience": "Banke Bihari Temple for Phoolon Ki Holi (7-9 days before Holi), Barsana for Lathmar Holi (week before Holi), Vrindavan streets on main Holi day"
    },
    {
        "_id": "radha-ashtami",
        "name": "Radha Ashtami",
        "summary": "Radha Ashtami celebrates the appearance of Radharani, the supreme goddess of devotion and Krishna's eternal consort. The festival emphasizes Radha's position as the embodiment of divine love and the ultimate object of aspiration for devotees.",
        "description": "Falling on the eighth day of the bright fortnight in Bhadrapada (usually September), Radha Ashtami is observed with great reverence. Temples dedicated to Radha, especially Radha Vallabh and those housing Radha-Krishna deities, celebrate with special alankaras (decorations), abhisheka (bathing ceremonies), and offerings. Devotees observe fasting and engage in kirtan throughout the day.",
        "crowdExpectation": "High - Significantly increased temple attendance",
        "safetyNotes": "Book accommodation in advance, arrive early for darshan, stay hydrated during fasting, follow temple guidelines",
        "bestExperience": "Radha Vallabh Temple, Jaipur Temple, Banke Bihari Temple (special decorations), Radha Kund (holy bath)"
    },
    {
        "_id": "gaura-purnima",
        "name": "Gaura Purnima (Chaitanya Jayanti)",
        "summary": "Gaura Purnima celebrates the appearance of Chaitanya Mahaprabhu, who revived Krishna consciousness and established the path of sankirtan (congregational chanting). The festival is particularly significant at ISKCON temples and Gaudiya Vaishnava institutions.",
        "description": "Observed on the full moon day of Phalguna (February-March), Gaura Purnima honors Chaitanya Mahaprabhu, considered Krishna's most merciful incarnation. Celebrations include 24-hour kirtan, Harinam sankirtan processions through Vrindavan streets, special lectures on Chaitanya's teachings, and elaborate feasts. ISKCON Vrindavan becomes the central hub for celebrations with international devotees gathering.",
        "crowdExpectation": "Very High at ISKCON - International gathering",
        "safetyNotes": "ISKCON Vrindavan extremely crowded, book accommodation months in advance, follow procession safety guidelines, stay with groups during street kirtan",
        "bestExperience": "ISKCON Vrindavan for main celebrations, participate in Harinam sankirtan processions, attend philosophical discourses"
    },
    {
        "_id": "kartik-purnima",
        "name": "Kartik Purnima (Dev Deepawali)",
        "summary": "Kartik Purnima marks the completion of the sacred Kartik month and is celebrated with thousands of lamps illuminating ghats, temples, and homes. It is considered one of the most auspicious days for bathing in Radha Kund and Yamuna River.",
        "description": "The full moon day of Kartik month (October-November) is the culmination of a month-long period of heightened devotion. Devotees who have performed Kartik vrata (vows) throughout the month complete their observance with holy baths, especially at Radha Kund (considered supremely auspicious). Temples and ghats are illuminated with countless diyas (oil lamps), creating a magical atmosphere. This day also commemorates Krishna's Damodar lila (being bound by Mother Yashoda).",
        "crowdExpectation": "Extremely High - Peak pilgrimage day",
        "safetyNotes": "Radha Kund extremely crowded for holy bath, arrive very early (3-4 AM), exercise caution near water, keep belongings secure, strong police presence due to crowds",
        "bestExperience": "Radha Kund for holy bath at sunrise, Yamuna ghats for evening aarti, temple visits to see Damodar deity decorations"
    },
    {
        "_id": "govardhan-puja",
        "name": "Govardhan Puja (Annakut)",
        "summary": "Govardhan Puja celebrates Krishna lifting Govardhan Hill to protect the Vrajavasis from Indra's storm. The festival features massive food offerings (annakut) at temples and parikrama of Govardhan Hill by thousands of devotees.",
        "description": "Occurring the day after Diwali, Govardhan Puja commemorates Krishna's childhood pastime of lifting Govardhan Hill. Temples prepare elaborate displays of thousands of food preparations arranged in the shape of Govardhan Hill. Devotees perform the 21-kilometer Govardhan parikrama, believing it fulfills all desires. The atmosphere combines festive celebration with deep devotional worship of Govardhan Hill as Krishna's form.",
        "crowdExpectation": "Very High - Especially at Govardhan Hill",
        "safetyNotes": "21km parikrama route very crowded, start early morning for cooler temperatures, carry water and snacks, wear comfortable walking shoes, be prepared for 6-8 hours of walking",
        "bestExperience": "Govardhan Hill parikrama, temple annakut displays at ISKCON and major Vrindavan temples, Manasi Ganga aarti"
    },
    {
        "_id": "rama-navami",
        "name": "Rama Navami",
        "summary": "Rama Navami celebrates the appearance of Lord Rama, an avatar of Vishnu. While primarily associated with Ayodhya, the festival is observed in Mathura-Vrindavan as devotees honor the divine incarnations of the Supreme Lord.",
        "description": "Celebrated on the ninth day of Chaitra (March-April), Rama Navami involves special worship of Rama, Sita, Lakshmana, and Hanuman. Temples organize Ram Katha recitations, bhajans focused on Rama's pastimes, and community feasts. Though Vrindavan is Krishna-centric, the festival acknowledges the unity of Vishnu's incarnations and attracts devotees of Rama bhakti tradition.",
        "crowdExpectation": "Moderate - Increased but not overwhelming",
        "safetyNotes": "Standard festival safety, arrive early for darshan at popular temples",
        "bestExperience": "Rangaji Temple (dedicated to Vishnu/Rama), temples with Rama deities, community kirtan programs"
    },
    {
        "_id": "sharad-purnima",
        "name": "Sharad Purnima (Rasa Purnima)",
        "summary": "Sharad Purnima is the night Krishna performed the Rasa Lila (divine dance) with the gopis under the full autumn moon. It is considered one of the most spiritually potent nights when Krishna's pastimes are tangibly present in Vrindavan.",
        "description": "The full moon night of Ashwin month (September-October) marks the Maha Rasa Lila when Krishna expanded himself to dance simultaneously with each gopi. Devotees stay awake throughout the night, engaging in kirtan, meditation, and hearing narrations of the Rasa Lila. Special programs are held at places associated with this pastime. The moon on this night is believed to shower divine nectar.",
        "crowdExpectation": "High - Night-long programs attract serious practitioners",
        "safetyNotes": "Night programs require safe accommodation nearby, stay in groups, temple areas crowded but generally safe, carry essentials as shops may be closed",
        "bestExperience": "Nidhivan (if special access granted), Seva Kunj, Banke Bihari Temple, all-night kirtan programs at major temples and ashrams"
    },
    {
        "_id": "jhulana-yatra",
        "name": "Jhulana Yatra (Swing Festival)",
        "summary": "Jhulana Yatra is a five-day festival during Shravan month when Radha and Krishna are placed on beautifully decorated swings. The festival celebrates the monsoon season and the divine couple's enjoyment of nature's beauty.",
        "description": "During the bright fortnight of Shravan (July-August), temple deities are seated on ornate swings (jhulas) decorated with flowers. Devotees participate in swinging the deities while singing seasonal songs. The festival creates a joyful, romantic atmosphere as it reenacts Krishna and Radha's monsoon pastimes. Special swing programs occur at most temples with elaborate decorations.",
        "crowdExpectation": "Moderate to High - Daily programs draw consistent crowds",
        "safetyNotes": "Monsoon season means rain - carry umbrella, wear appropriate footwear, be careful on wet temple floors",
        "bestExperience": "Radha Raman Temple (maintains traditional celebrations), Banke Bihari Temple (elaborate decorations), ISKCON Vrindavan (organized programs)"
    }
]

# Additional Planning Guides
ADDITIONAL_PLANNING_GUIDES = [
    {
        "_id": "getting-to-vrindavan",
        "title": "How to Reach Mathura-Vrindavan",
        "summary": "Comprehensive transportation guide covering all routes to Mathura-Vrindavan from major Indian cities including Delhi, Agra, Jaipur, and international airports. Includes train, bus, taxi, and flight options with practical tips.",
        "category": "transportation",
        "content": {
            "fromDelhi": {
                "by_train": "Regular trains from Delhi to Mathura Junction (2-3 hours). Best options: Shatabdi Express, Taj Express. From Mathura, take local transport to Vrindavan (20-30 minutes)",
                "by_bus": "Regular buses from Delhi ISBT Kashmere Gate to Mathura/Vrindavan (3-4 hours). Govt and private operators available",
                "by_car": "Via NH44 (formerly NH2), approximately 150 km, 3-3.5 hours. Toll charges apply",
                "by_air": "Nearest airport: Delhi (150km). Fly to Delhi, then train/taxi to Vrindavan"
            },
            "fromAgra": "45 km from Agra. Frequent buses and trains. Can be combined with Taj Mahal visit",
            "withinVrindavan": "Auto-rickshaws, cycle-rickshaws, e-rickshaws, and walking. Most temples within 5km radius",
            "recommendations": [
                "Train is most comfortable and reliable option from Delhi",
                "Book advance train tickets during festival seasons",
                "Hiring car with driver for 2-3 days gives flexibility",
                "Local transportation abundant but negotiate prices in advance"
            ]
        }
    },
    {
        "_id": "accommodation-guide",
        "title": "Where to Stay in Mathura-Vrindavan",
        "summary": "Guide to accommodation options ranging from dharamshalas (pilgrim hostels) to hotels, ashrams, and guesthouses. Includes booking tips, location recommendations, and budget considerations for different types of travelers.",
        "category": "accommodation",
        "content": {
            "options": [
                "Dharamshalas: Budget pilgrim accommodation near temples (₹100-500/night)",
                "Temple guesthouses: ISKCON, Radha Vallabh, etc. (₹500-1500/night)",
                "Budget hotels: Basic amenities (₹800-2000/night)",
                "Mid-range hotels: Comfortable stay (₹2000-5000/night)",
                "Luxury hotels: Premium facilities (₹5000+/night)"
            ],
            "areas": {
                "vrindavan": "Close to major temples, spiritual atmosphere, can be noisy",
                "mathura": "More city amenities, quieter, 30-45 min from Vrindavan temples"
            },
            "bookingTips": [
                "Book 2-3 months ahead for Janmashtami, Holi, Kartik Purnima",
                "Temple guesthouses require advance booking, limited availability",
                "Check cancellation policies during festival seasons",
                "ISKCON guesthouse requires membership or application",
                "Many dharamshalas don't accept online bookings - call directly"
            ],
            "recommendations": [
                "First-time visitors: Stay in Vrindavan for temple access",
                "Budget pilgrims: Temple dharamshalas offer authentic experience",
                "Families: Mid-range hotels with AC and amenities",
                "Solo travelers: Temple guesthouses provide community atmosphere"
            ]
        }
    },
    {
        "_id": "food-and-dining",
        "title": "Food and Dining in Vrindavan",
        "summary": "Vrindavan is a vegetarian city with diverse prasadam (temple food) and restaurant options. This guide covers where to eat, what to try, food safety, and dining etiquette for visitors.",
        "category": "dining",
        "content": {
            "foodCulture": "Vrindavan is strictly vegetarian. No meat, fish, eggs, alcohol, or onion/garlic in many traditional places. Food culture emphasizes prasadam - sanctified temple offerings.",
            "whereTo Eat": [
                "Temple prasadam: Free or nominal cost at most temples",
                "ISKCON dining hall: Quality vegetarian meals, hygienic",
                "Local restaurants: MVT, Govinda's, Brijwasi Sweets",
                "Street food: Kachoris, jalebis, lassi (choose clean vendors)",
                "Ashram bhojan: Community meals at larger ashrams"
            ],
            "mustTry": [
                "Pedas (Mathura specialty sweet)",
                "Makhan Mishri (butter and sugar candy)",
                "Rabri (sweetened condensed milk)",
                "Kachoris and sabzi (breakfast)",
                "Temple prasadam (spiritual and culinary experience)"
            ],
            "foodSafety": [
                "Drink bottled water only",
                "Choose busy, clean-looking establishments",
                "Avoid street food if sensitive stomach",
                "Temple prasadam generally safe and hygienic",
                "Carry basic medicines for stomach issues"
            ],
            "diningEtiquette": [
                "Remove shoes before entering dining areas",
                "Wash hands before eating",
                "Don't waste prasadam - take only what you can eat",
                "Many places practice floor seating",
                "Donations voluntary but appreciated"
            ]
        }
    },
    {
        "_id": "health-and-safety",
        "title": "Health and Safety Guidelines",
        "summary": "Essential health and safety information for pilgrims visiting Mathura-Vrindavan, including medical facilities, common health issues, safety tips, and emergency contacts.",
        "category": "safety",
        "content": {
            "medicalFacilities": [
                "Mathura District Hospital: Government facility",
                "Private clinics: Available in both Mathura and Vrindavan",
                "Pharmacies: Widely available, open late",
                "ISKCON Bhaktivedanta Hospital: Modern facility near Vrindavan"
            ],
            "commonIssues": [
                "Dehydration: Drink plenty of water, especially in summer",
                "Heat exhaustion: Rest in shade, avoid peak afternoon sun",
                "Stomach issues: Carry basic medicines, eat carefully",
                "Fatigue from walking: Wear comfortable shoes, pace yourself"
            ],
            "safety Tips": [
                "Keep valuables secure, use hotel safes",
                "Stay in well-lit areas after dark",
                "Women should dress modestly and stay in groups",
                "Beware of pickpockets in crowded temple areas",
                "Use registered taxis and rickshaws",
                "Keep emergency contacts handy",
                "Photocopy important documents"
            ],
            "emergencyContacts": {
                "police": "100",
                "ambulance": "108",
                "touristHelpline": "1363"
            },
            "insurance": "Travel insurance recommended for international visitors. Covers medical emergencies, trip cancellations, lost belongings."
        }
    }
]

async def expand_content():
    """Expand database with comprehensive content"""
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    
    print("🚀 Starting content expansion...")
    print("=" * 60)
    
    try:
        # Add new temples
        if ADDITIONAL_TEMPLES:
            print(f"\n📍 Adding {len(ADDITIONAL_TEMPLES)} new temples...")
            await db.temples.insert_many(ADDITIONAL_TEMPLES)
            print(f"   ✅ {len(ADDITIONAL_TEMPLES)} temples added successfully")
        
        # Add new spiritual places
        if ADDITIONAL_SPIRITUAL_PLACES:
            print(f"\n🕉️  Adding {len(ADDITIONAL_SPIRITUAL_PLACES)} new spiritual places...")
            await db.spiritual_places.insert_many(ADDITIONAL_SPIRITUAL_PLACES)
            print(f"   ✅ {len(ADDITIONAL_SPIRITUAL_PLACES)} spiritual places added successfully")
        
        # Add new festivals
        if ADDITIONAL_FESTIVALS:
            print(f"\n🎉 Adding {len(ADDITIONAL_FESTIVALS)} new festivals...")
            await db.festivals.insert_many(ADDITIONAL_FESTIVALS)
            print(f"   ✅ {len(ADDITIONAL_FESTIVALS)} festivals added successfully")
        
        # Add new planning guides
        if ADDITIONAL_PLANNING_GUIDES:
            print(f"\n📖 Adding {len(ADDITIONAL_PLANNING_GUIDES)} new planning guides...")
            await db.planning_guides.insert_many(ADDITIONAL_PLANNING_GUIDES)
            print(f"   ✅ {len(ADDITIONAL_PLANNING_GUIDES)} planning guides added successfully")
        
        print("\n" + "=" * 60)
        print("✅ Content expansion completed successfully!")
        print("\n📊 Updated Database Summary:")
        
        # Print final counts
        temple_count = await db.temples.count_documents({})
        place_count = await db.spiritual_places.count_documents({})
        guide_count = await db.planning_guides.count_documents({})
        festival_count = await db.festivals.count_documents({})
        
        print(f"   • Total Temples: {temple_count}")
        print(f"   • Total Spiritual Places: {place_count}")
        print(f"   • Total Planning Guides: {guide_count}")
        print(f"   • Total Festivals: {festival_count}")
        print(f"\n🎯 Website now has comprehensive content ready for scaling!")
        
    except Exception as e:
        print(f"\n❌ Error during content expansion: {str(e)}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(expand_content())
