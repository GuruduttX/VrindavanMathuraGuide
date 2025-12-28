# API Contracts & Integration Guide
## Vrindavan Mathura Guide - Backend Implementation

### Overview
This document defines the API contracts, data models, and integration protocols for seamlessly connecting the frontend with the backend.

---

## 1. MongoDB Collections

### 1.1 Temples Collection
**Collection Name:** `temples`

**Schema Fields:**
```
{
  id: String (unique, indexed)
  name: String
  location: String
  deity: String
  summary: String
  history: String
  significance: String
  darshan: {
    morning: String
    evening: String
    notes: String
  }
  visitorGuidance: [String] (optional)
  festivals: [String] (optional)
  faqs: [{
    question: String
    answer: String
  }] (optional)
  createdAt: Date
  updatedAt: Date
}
```

### 1.2 Spiritual Places Collection
**Collection Name:** `spiritual_places`

**Schema Fields:**
```
{
  id: String (unique, indexed)
  name: String
  location: String
  type: String (e.g., "Ghat", "Kund", "Ashram", "Forest")
  summary: String
  description: String
  bestTimeToVisit: String
  activities: [String]
  createdAt: Date
  updatedAt: Date
}
```

### 1.3 Planning Guides Collection
**Collection Name:** `planning_guides`

**Schema Fields:**
```
{
  id: String (unique, indexed)
  title: String
  summary: String
  content: Object (flexible structure based on guide type)
  category: String (e.g., "timing", "dress-code", "safety")
  createdAt: Date
  updatedAt: Date
}
```

### 1.4 Festivals Collection
**Collection Name:** `festivals`

**Schema Fields:**
```
{
  id: String (unique, indexed)
  name: String
  summary: String
  description: String
  crowdExpectation: String
  safetyNotes: String
  bestExperience: String
  createdAt: Date
  updatedAt: Date
}
```

---

## 2. REST API Endpoints

### Base URL
All endpoints prefixed with `/api` for Kubernetes ingress routing.

### 2.1 Temple Endpoints

#### GET /api/temples
**Purpose:** Fetch all temples
**Response:**
```json
{
  "success": true,
  "data": [/* array of temple objects */],
  "count": 5
}
```

#### GET /api/temples/:id
**Purpose:** Fetch single temple by ID
**Response:**
```json
{
  "success": true,
  "data": {/* temple object */}
}
```

#### POST /api/temples (Admin Only - Future)
**Purpose:** Create new temple entry
**Request Body:** Temple object
**Response:**
```json
{
  "success": true,
  "data": {/* created temple object */},
  "message": "Temple created successfully"
}
```

### 2.2 Spiritual Places Endpoints

#### GET /api/spiritual-places
**Purpose:** Fetch all spiritual places
**Response:**
```json
{
  "success": true,
  "data": [/* array of spiritual place objects */],
  "count": 1
}
```

#### GET /api/spiritual-places/:id
**Purpose:** Fetch single spiritual place by ID
**Response:**
```json
{
  "success": true,
  "data": {/* spiritual place object */}
}
```

### 2.3 Planning Guides Endpoints

#### GET /api/planning-guides
**Purpose:** Fetch all planning guides
**Response:**
```json
{
  "success": true,
  "data": [/* array of guide objects */],
  "count": 2
}
```

#### GET /api/planning-guides/:id
**Purpose:** Fetch single guide by ID
**Response:**
```json
{
  "success": true,
  "data": {/* guide object */}
}
```

### 2.4 Festivals Endpoints

#### GET /api/festivals
**Purpose:** Fetch all festivals
**Response:**
```json
{
  "success": true,
  "data": [/* array of festival objects */],
  "count": 1
}
```

#### GET /api/festivals/:id
**Purpose:** Fetch single festival by ID
**Response:**
```json
{
  "success": true,
  "data": {/* festival object */}
}
```

---

## 3. Sitemap Generation

### 3.1 Sitemap Index Endpoint

#### GET /api/sitemap.xml
**Purpose:** Generate sitemap index
**Response:** XML format
```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://vrindavanmathuraguide.com/sitemap-temples.xml</loc>
    <lastmod>2025-01-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://vrindavanmathuraguide.com/sitemap-spiritual-places.xml</loc>
    <lastmod>2025-01-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://vrindavanmathuraguide.com/sitemap-pilgrimage-planning.xml</loc>
    <lastmod>2025-01-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://vrindavanmathuraguide.com/sitemap-festivals-rituals.xml</loc>
    <lastmod>2025-01-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://vrindavanmathuraguide.com/sitemap-core-pages.xml</loc>
    <lastmod>2025-01-15</lastmod>
  </sitemap>
</sitemapindex>
```

### 3.2 Individual Sitemap Endpoints

#### GET /api/sitemap-temples.xml
#### GET /api/sitemap-spiritual-places.xml
#### GET /api/sitemap-pilgrimage-planning.xml
#### GET /api/sitemap-festivals-rituals.xml
#### GET /api/sitemap-core-pages.xml

---

## 4. Schema Markup (SEO)

### 4.1 Temple Schema Endpoint

#### GET /api/schema/temple/:id
**Purpose:** Generate structured data for temple page
**Response:** JSON-LD format
```json
{
  "@context": "https://schema.org",
  "@type": ["Place", "TouristAttraction", "PlaceOfWorship"],
  "name": "Banke Bihari Temple",
  "description": "...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vrindavan",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:30",
      "closes": "12:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "17:30",
      "closes": "21:30"
    }
  ]
}
```

---

## 5. Frontend Integration Steps

### 5.1 Remove Mock Data
- Delete or comment out imports from `mockTemples.js`
- Replace with API calls

### 5.2 API Service Creation
Create `/app/frontend/src/services/api.js`:
```javascript
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL + "/api";

export const templeAPI = {
  getAll: () => axios.get(`${API_BASE_URL}/temples`),
  getById: (id) => axios.get(`${API_BASE_URL}/temples/${id}`)
};

export const spiritualPlacesAPI = {
  getAll: () => axios.get(`${API_BASE_URL}/spiritual-places`),
  getById: (id) => axios.get(`${API_BASE_URL}/spiritual-places/${id}`)
};

export const planningGuidesAPI = {
  getAll: () => axios.get(`${API_BASE_URL}/planning-guides`),
  getById: (id) => axios.get(`${API_BASE_URL}/planning-guides/${id}`)
};

export const festivalsAPI = {
  getAll: () => axios.get(`${API_BASE_URL}/festivals`),
  getById: (id) => axios.get(`${API_BASE_URL}/festivals/${id}`)
};
```

### 5.3 Update Components
- Replace `import { temples } from '../data/mockTemples'` with API calls
- Use `useState` and `useEffect` for data fetching
- Add loading states and error handling

---

## 6. Database Seeding

### 6.1 Seed Script
Create `/app/backend/seed_data.py` to populate initial data from mockTemples.js equivalent.

---

## 7. Testing Checklist

- [ ] All API endpoints return correct data
- [ ] Frontend displays data from backend APIs
- [ ] Sitemap generation works correctly
- [ ] Schema markup validates on Google's Structured Data Testing Tool
- [ ] Error handling works (404s, 500s)
- [ ] Database queries are optimized with indexes

---

## 8. Notes

- **Always use double quotes** for content strings in code
- All routes MUST have `/api` prefix for K8s ingress
- No commercial schema types (Product, Offer, Review)
- Keep responses lightweight and fast
- Add pagination if temple count exceeds 50
