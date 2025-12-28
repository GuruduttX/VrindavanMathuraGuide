# Complete File Manifest - Vrindavan Mathura Guide

## 📦 Deployment Package Contents

**Package File:** `/app/vrindavan-mathura-guide-deployment.tar.gz` (276 KB)

## 📂 Directory Structure

### Backend Files (/backend/)

#### Core Application
- `server.py` - Main FastAPI application with API router configuration
- `requirements.txt` - Python dependencies (FastAPI, Motor, Pydantic, etc.)
- `.env` - Environment variables (NEEDS TO BE CREATED on server)

#### Models (/backend/models/)
- `__init__.py` - Package initializer
- `temple.py` - Temple data model with Pydantic validation
- `spiritual_place.py` - Spiritual place model
- `festival.py` - Festival model
- `planning_guide.py` - Planning guide model
- `user_content.py` - Testimonial & Newsletter subscriber models

#### Routes (/backend/routes/)
- `__init__.py` - Package initializer
- `temples.py` - Temple CRUD + filter/sort endpoints
- `spiritual_places.py` - Spiritual places CRUD endpoints
- `festivals.py` - Festival CRUD endpoints
- `planning_guides.py` - Planning guide CRUD endpoints
- `search.py` - Universal search endpoint
- `testimonials.py` - Testimonial submission & retrieval
- `newsletter.py` - Newsletter subscription endpoints
- `sitemaps.py` - XML sitemap generation (5 sitemaps)
- `schema_markup.py` - JSON-LD schema generation for SEO

#### Data Scripts
- `seed_data.py` - Initial database seeding (5 temples, 1 place, 2 guides, 1 festival)
- `expand_content.py` - Content expansion (adds 10 temples, 10 places, 8 festivals, 4 guides)
- `add_coordinates.py` - Adds geographic coordinates to all temples/places

### Frontend Files (/frontend/)

#### Root Configuration
- `package.json` - NPM dependencies (React 19, React Router, Leaflet, Shadcn UI, etc.)
- `.env` - Environment variables (NEEDS TO BE CREATED on server)
- `craco.config.js` - CRACO configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

#### Source Files (/frontend/src/)

**Main Application:**
- `index.js` - Application entry point
- `App.js` - Main app component with routing
- `App.css` - Global styles
- `index.css` - Tailwind imports and global CSS

**Components (/frontend/src/components/):**
- `Header.jsx` - Navigation header with mobile menu
- `Footer.jsx` - Footer with links and info
- `SearchBar.jsx` - Real-time search component ✨
- `MapComponent.jsx` - Interactive Leaflet map ✨

**UI Components (/frontend/src/components/ui/):**
- `accordion.jsx` - Collapsible sections
- `alert.jsx` - Alert messages
- `alert-dialog.jsx` - Modal dialogs
- `aspect-ratio.jsx` - Aspect ratio container
- `avatar.jsx` - User avatars
- `badge.jsx` - Status badges
- `breadcrumb.jsx` - Breadcrumb navigation
- `button.jsx` - Button component
- `card.jsx` - Card container
- `carousel.jsx` - Image carousel
- `checkbox.jsx` - Checkbox input
- `collapsible.jsx` - Collapsible content
- `command.jsx` - Command palette
- `context-menu.jsx` - Context menu
- `dialog.jsx` - Dialog modals
- `drawer.jsx` - Side drawer
- `dropdown-menu.jsx` - Dropdown menus
- `form.jsx` - Form components
- `hover-card.jsx` - Hover cards
- `input.jsx` - Text input
- `input-otp.jsx` - OTP input
- `label.jsx` - Form labels
- `menubar.jsx` - Menu bar
- `navigation-menu.jsx` - Navigation menu
- `pagination.jsx` - Pagination
- `popover.jsx` - Popover component
- `progress.jsx` - Progress bar
- `radio-group.jsx` - Radio buttons
- `resizable.jsx` - Resizable panels
- `scroll-area.jsx` - Scroll container
- `select.jsx` - Select dropdown
- `separator.jsx` - Visual separator
- `sheet.jsx` - Sheet/drawer
- `skeleton.jsx` - Loading skeleton
- `slider.jsx` - Range slider
- `sonner.jsx` - Toast notifications
- `switch.jsx` - Toggle switch
- `table.jsx` - Data table
- `tabs.jsx` - Tab navigation
- `textarea.jsx` - Text area input
- `toast.jsx` - Toast component
- `toaster.jsx` - Toast container
- `toggle.jsx` - Toggle button
- `toggle-group.jsx` - Toggle group
- `tooltip.jsx` - Tooltip component

**Pages (/frontend/src/pages/):**
- `Home.jsx` - Homepage with hero and categories
- `TemplesList.jsx` - Temple listing with API integration
- `TempleDetail.jsx` - Individual temple details
- `SpiritualPlaces.jsx` - Spiritual places listing
- `PlanYourVisit.jsx` - Planning guides display
- `Festivals.jsx` - Festivals listing
- `About.jsx` - About page
- `Contact.jsx` - Contact form
- `Disclaimer.jsx` - Disclaimer page

**Services (/frontend/src/services/):**
- `api.js` - API service layer (axios wrappers for all endpoints)

**Data (/frontend/src/data/):**
- `mockTemples.js` - Mock data (not used in production, only for reference)

**Hooks (/frontend/src/hooks/):**
- `use-toast.js` - Toast notification hook

## 🗄️ Database Collections (MongoDB)

After running seed scripts, database contains:

### temples (15 documents)
Each with: `_id`, `name`, `location`, `deity`, `summary`, `history`, `significance`, `darshan`, `coordinates`, `visitorGuidance`, `festivals`, `faqs`

### spiritual_places (11 documents)
Each with: `_id`, `name`, `location`, `type`, `summary`, `description`, `bestTimeToVisit`, `activities`, `coordinates`

### festivals (9 documents)
Each with: `_id`, `name`, `summary`, `description`, `crowdExpectation`, `safetyNotes`, `bestExperience`

### planning_guides (6 documents)
Each with: `_id`, `title`, `summary`, `content`, `category`

### testimonials (empty initially)
Schema: `_id`, `name`, `location`, `rating`, `comment`, `visitDate`, `approved`, `createdAt`

### newsletter (empty initially)
Schema: `_id` (email), `subscribedAt`, `active`

## 🔑 API Endpoints

### Content Endpoints
- `GET /api/temples` - List all temples (supports filtering: ?location=Vrindavan&deity=Krishna)
- `GET /api/temples/{id}` - Get single temple
- `GET /api/spiritual-places` - List all spiritual places
- `GET /api/spiritual-places/{id}` - Get single place
- `GET /api/festivals` - List all festivals
- `GET /api/festivals/{id}` - Get single festival
- `GET /api/planning-guides` - List all guides
- `GET /api/planning-guides/{id}` - Get single guide

### Search & Discovery
- `GET /api/search?q={query}` - Universal search
- `GET /api/sitemap.xml` - Sitemap index
- `GET /api/sitemap/temples.xml` - Temple sitemap
- `GET /api/sitemap/spiritual-places.xml` - Places sitemap
- `GET /api/sitemap/pilgrimage-planning.xml` - Planning sitemap
- `GET /api/sitemap/festivals-rituals.xml` - Festivals sitemap
- `GET /api/sitemap/core-pages.xml` - Core pages sitemap

### Schema Markup
- `GET /api/schema/temple/{id}` - Temple schema
- `GET /api/schema/spiritual-place/{id}` - Place schema
- `GET /api/schema/festival/{id}` - Festival schema
- `GET /api/schema/breadcrumb/{type}/{id}` - Breadcrumb schema

### User Content
- `GET /api/testimonials` - Get approved testimonials
- `POST /api/testimonials` - Submit testimonial
- `GET /api/testimonials/stats` - Testimonial statistics
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe
- `GET /api/newsletter/count` - Subscriber count

## 📋 Environment Variables

### Backend (.env)
```
MONGO_URL=mongodb://user:pass@localhost:27017/vrindavan_guide?authSource=vrindavan_guide
DB_NAME=vrindavan_guide
PORT=8001
```

### Frontend (.env)
```
REACT_APP_BACKEND_URL=https://your-domain.com
```

## 🎨 Design System

### Colors
- Primary: Amber (amber-600, amber-700)
- Secondary: Gray scale
- Accent: Blue, Green, Purple for different sections
- Background: White/Gray-50

### Typography
- Headings: Bold, various sizes (text-4xl to text-sm)
- Body: Base size, gray-700
- System font stack

### Components
- Shadcn UI (44 components)
- Tailwind CSS for styling
- Lucide React for icons
- Clean, minimal, modern aesthetic

## 📦 Key Dependencies

### Backend
- fastapi==0.110.1
- uvicorn==0.25.0
- motor==3.3.1 (async MongoDB)
- pydantic>=2.6.4
- python-dotenv>=1.0.1

### Frontend
- react: 19.2.3
- react-router-dom: 7.11.0
- axios: 1.13.2
- leaflet: 1.9.4
- react-leaflet: 5.0.0
- @radix-ui/* (Shadcn UI base)
- tailwindcss: 3.4.19
- lucide-react: 0.507.0

## 🚀 Quick Deploy Commands

```bash
# Extract package
tar -xzf vrindavan-mathura-guide-deployment.tar.gz

# Backend setup
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python expand_content.py
python add_coordinates.py

# Frontend setup
cd ../frontend
yarn install
yarn build

# Start services (with systemd as per deployment guide)
```

## 📊 Total File Count
- Backend Python files: ~20
- Frontend JS/JSX files: ~65
- UI Components: 44
- API Routes: 9
- Database Scripts: 3
- Configuration files: ~10

**Total Package Size:** 276 KB (compressed, excluding node_modules)
**Uncompressed Size:** ~1.5 MB (code only, without dependencies)

## 📍 Download Location

Your deployment package is ready at:
```
/app/vrindavan-mathura-guide-deployment.tar.gz
```

To download via SCP:
```bash
scp user@emergent-server:/app/vrindavan-mathura-guide-deployment.tar.gz ./
```

Or use the Emergent platform's file download feature to get this file.

---

**All files included and ready for production deployment!**
