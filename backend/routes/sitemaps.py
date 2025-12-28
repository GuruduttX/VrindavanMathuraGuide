from fastapi import APIRouter, Response, Depends
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
import os

router = APIRouter(prefix="/sitemap", tags=["sitemaps"])

def get_database():
    """Dependency to get database connection"""
    mongo_url = os.environ["MONGO_URL"]
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ["DB_NAME"]]
    return db

BASE_URL = "https://vrindavanmathuraguide.com"  # Will be configured via env

@router.get(".xml", response_class=Response)
async def sitemap_index():
    """Generate sitemap index"""
    current_date = datetime.utcnow().strftime("%Y-%m-%d")
    
    xml_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>{BASE_URL}/api/sitemap/temples.xml</loc>
    <lastmod>{current_date}</lastmod>
  </sitemap>
  <sitemap>
    <loc>{BASE_URL}/api/sitemap/spiritual-places.xml</loc>
    <lastmod>{current_date}</lastmod>
  </sitemap>
  <sitemap>
    <loc>{BASE_URL}/api/sitemap/pilgrimage-planning.xml</loc>
    <lastmod>{current_date}</lastmod>
  </sitemap>
  <sitemap>
    <loc>{BASE_URL}/api/sitemap/festivals-rituals.xml</loc>
    <lastmod>{current_date}</lastmod>
  </sitemap>
  <sitemap>
    <loc>{BASE_URL}/api/sitemap/core-pages.xml</loc>
    <lastmod>{current_date}</lastmod>
  </sitemap>
</sitemapindex>"""
    
    return Response(content=xml_content, media_type="application/xml")

@router.get("/temples.xml", response_class=Response)
async def temples_sitemap(db = Depends(get_database)):
    """Generate temples sitemap"""
    temples = await db.temples.find().to_list(100)
    current_date = datetime.utcnow().strftime("%Y-%m-%d")
    
    urls = []
    for temple in temples:
        url = f"""  <url>
    <loc>{BASE_URL}/temples/{temple['_id']}</loc>
    <lastmod>{current_date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>"""
        urls.append(url)
    
    xml_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>"""
    
    return Response(content=xml_content, media_type="application/xml")

@router.get("/spiritual-places.xml", response_class=Response)
async def spiritual_places_sitemap(db = Depends(get_database)):
    """Generate spiritual places sitemap"""
    places = await db.spiritual_places.find().to_list(100)
    current_date = datetime.utcnow().strftime("%Y-%m-%d")
    
    urls = []
    for place in places:
        url = f"""  <url>
    <loc>{BASE_URL}/spiritual-places/{place['_id']}</loc>
    <lastmod>{current_date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>"""
        urls.append(url)
    
    xml_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>"""
    
    return Response(content=xml_content, media_type="application/xml")

@router.get("/pilgrimage-planning.xml", response_class=Response)
async def planning_sitemap(db = Depends(get_database)):
    """Generate planning guides sitemap"""
    guides = await db.planning_guides.find().to_list(100)
    current_date = datetime.utcnow().strftime("%Y-%m-%d")
    
    urls = []
    for guide in guides:
        url = f"""  <url>
    <loc>{BASE_URL}/plan-your-visit/{guide['_id']}</loc>
    <lastmod>{current_date}</lastmod>
    <changefreq>quarterly</changefreq>
    <priority>0.7</priority>
  </url>"""
        urls.append(url)
    
    xml_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>"""
    
    return Response(content=xml_content, media_type="application/xml")

@router.get("/festivals-rituals.xml", response_class=Response)
async def festivals_sitemap(db = Depends(get_database)):
    """Generate festivals sitemap"""
    festivals = await db.festivals.find().to_list(100)
    current_date = datetime.utcnow().strftime("%Y-%m-%d")
    
    urls = []
    for festival in festivals:
        url = f"""  <url>
    <loc>{BASE_URL}/festivals/{festival['_id']}</loc>
    <lastmod>{current_date}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>"""
        urls.append(url)
    
    xml_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>"""
    
    return Response(content=xml_content, media_type="application/xml")

@router.get("/core-pages.xml", response_class=Response)
async def core_pages_sitemap():
    """Generate core pages sitemap"""
    current_date = datetime.utcnow().strftime("%Y-%m-%d")
    
    core_pages = [
        ("", "1.0", "daily"),  # Homepage
        ("/temples", "0.9", "weekly"),
        ("/spiritual-places", "0.8", "weekly"),
        ("/plan-your-visit", "0.8", "monthly"),
        ("/festivals", "0.7", "monthly"),
        ("/about", "0.5", "yearly"),
        ("/contact", "0.5", "yearly"),
        ("/disclaimer", "0.4", "yearly"),
    ]
    
    urls = []
    for page, priority, changefreq in core_pages:
        url = f"""  <url>
    <loc>{BASE_URL}{page}</loc>
    <lastmod>{current_date}</lastmod>
    <changefreq>{changefreq}</changefreq>
    <priority>{priority}</priority>
  </url>"""
        urls.append(url)
    
    xml_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>"""
    
    return Response(content=xml_content, media_type="application/xml")
