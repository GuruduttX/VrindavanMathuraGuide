# Vrindavan Mathura Guide - Manual Deployment Guide

## 📦 Package Contents

Your deployment package (`vrindavan-mathura-guide-deployment.tar.gz`) contains:
- `/frontend` - React application (complete with all components)
- `/backend` - FastAPI application (complete with all routes and models)

## 🚀 Deployment Instructions

### Prerequisites

**Server Requirements:**
- Ubuntu 20.04+ or similar Linux distribution
- Node.js 18+ (for frontend)
- Python 3.9+ (for backend)
- MongoDB 4.4+ (database)
- Nginx (reverse proxy)
- SSL Certificate (Let's Encrypt recommended)

### Step 1: Extract Files

```bash
# Upload the tar.gz file to your server
scp vrindavan-mathura-guide-deployment.tar.gz user@your-server:/opt/

# SSH into your server
ssh user@your-server

# Extract files
cd /opt
tar -xzf vrindavan-mathura-guide-deployment.tar.gz
```

### Step 2: MongoDB Setup

```bash
# Install MongoDB (Ubuntu)
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Create database and user
mongo
> use vrindavan_guide
> db.createUser({
    user: "vrindavan_admin",
    pwd: "YOUR_SECURE_PASSWORD",
    roles: [{role: "readWrite", db: "vrindavan_guide"}]
  })
> exit
```

### Step 3: Backend Setup

```bash
# Navigate to backend directory
cd /opt/backend

# Install Python dependencies
sudo apt-get install python3-pip python3-venv
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Create .env file
cat > .env << 'EOF'
MONGO_URL=mongodb://vrindavan_admin:YOUR_SECURE_PASSWORD@localhost:27017/vrindavan_guide?authSource=vrindavan_guide
DB_NAME=vrindavan_guide
PORT=8001
EOF

# Seed the database with initial content
python expand_content.py
python add_coordinates.py

# Test backend
uvicorn server:app --host 0.0.0.0 --port 8001
# Press Ctrl+C after verifying it works
```

### Step 4: Frontend Setup

```bash
# Navigate to frontend directory
cd /opt/frontend

# Install Node.js (if not already installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Yarn
npm install -g yarn

# Install dependencies
yarn install

# Create production .env file
cat > .env << 'EOF'
REACT_APP_BACKEND_URL=https://your-domain.com
EOF

# Build for production
yarn build

# The build files will be in /opt/frontend/build/
```

### Step 5: Nginx Configuration

```bash
# Install Nginx
sudo apt-get install nginx

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/vrindavan-guide

# Paste the following configuration:
```

```nginx
# Frontend - Main site
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    root /opt/frontend/build;
    index index.html;
    
    # Frontend routes
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Backend API proxy
    location /api {
        proxy_pass http://127.0.0.1:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $http_remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;
}
```

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/vrindavan-guide /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 6: SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Certbot will automatically update your Nginx configuration for HTTPS
```

### Step 7: Process Management (Systemd)

Create a systemd service for the backend:

```bash
sudo nano /etc/systemd/system/vrindavan-backend.service
```

```ini
[Unit]
Description=Vrindavan Mathura Guide Backend
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/opt/backend
Environment="PATH=/opt/backend/venv/bin"
ExecStart=/opt/backend/venv/bin/uvicorn server:app --host 0.0.0.0 --port 8001
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

```bash
# Enable and start the service
sudo systemctl daemon-reload
sudo systemctl enable vrindavan-backend
sudo systemctl start vrindavan-backend
sudo systemctl status vrindavan-backend
```

### Step 8: Verify Deployment

```bash
# Check backend
curl http://localhost:8001/api/
# Should return: {"message": "Vrindavan Mathura Guide API", ...}

# Check frontend
curl http://localhost/
# Should return HTML content

# Check database
mongo vrindavan_guide -u vrindavan_admin -p
> db.temples.count()
# Should return: 15

# Check public access
curl https://your-domain.com/api/temples
# Should return temple data
```

## 📁 File Structure

```
/opt/
├── backend/
│   ├── server.py              # Main FastAPI application
│   ├── requirements.txt       # Python dependencies
│   ├── .env                   # Environment variables (create this)
│   ├── models/                # Pydantic models
│   │   ├── temple.py
│   │   ├── spiritual_place.py
│   │   ├── festival.py
│   │   ├── planning_guide.py
│   │   └── user_content.py
│   ├── routes/                # API route handlers
│   │   ├── temples.py
│   │   ├── spiritual_places.py
│   │   ├── festivals.py
│   │   ├── planning_guides.py
│   │   ├── search.py
│   │   ├── testimonials.py
│   │   ├── newsletter.py
│   │   ├── sitemaps.py
│   │   └── schema_markup.py
│   ├── seed_data.py           # Initial data seeding script
│   ├── expand_content.py      # Content expansion script
│   └── add_coordinates.py     # Geographic coordinates script
│
└── frontend/
    ├── build/                 # Production build (after yarn build)
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── ui/            # Shadcn UI components
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   ├── SearchBar.jsx
    │   │   └── MapComponent.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── TemplesList.jsx
    │   │   ├── TempleDetail.jsx
    │   │   ├── SpiritualPlaces.jsx
    │   │   ├── PlanYourVisit.jsx
    │   │   ├── Festivals.jsx
    │   │   ├── About.jsx
    │   │   ├── Contact.jsx
    │   │   └── Disclaimer.jsx
    │   ├── services/
    │   │   └── api.js         # API service layer
    │   ├── data/
    │   │   └── mockTemples.js # Mock data (not used in production)
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── .env                   # Environment variables (create this)
```

## 🔧 Configuration Files to Create

### Backend .env
```env
MONGO_URL=mongodb://vrindavan_admin:YOUR_PASSWORD@localhost:27017/vrindavan_guide?authSource=vrindavan_guide
DB_NAME=vrindavan_guide
PORT=8001
```

### Frontend .env
```env
REACT_APP_BACKEND_URL=https://your-domain.com
```

## 📊 Database Collections

After seeding, your MongoDB will have:
- `temples` (15 documents)
- `spiritual_places` (11 documents)
- `festivals` (9 documents)
- `planning_guides` (6 documents)
- `testimonials` (initially empty, populated by users)
- `newsletter` (initially empty, populated by subscribers)

## 🔐 Security Checklist

- [ ] Change MongoDB password from default
- [ ] Set up firewall (ufw) to allow only ports 80, 443, 22
- [ ] Enable fail2ban for SSH protection
- [ ] Keep systems updated: `sudo apt-get update && sudo apt-get upgrade`
- [ ] Set up automated backups for MongoDB
- [ ] Configure log rotation
- [ ] Set proper file permissions: `sudo chown -R www-data:www-data /opt/backend /opt/frontend`

## 🌐 DNS Configuration

Point your domain to your server:
```
A Record: @ → YOUR_SERVER_IP
A Record: www → YOUR_SERVER_IP
```

## 📈 Monitoring & Maintenance

### Check Backend Logs
```bash
sudo journalctl -u vrindavan-backend -f
```

### Check Nginx Logs
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### MongoDB Backup
```bash
# Create backup
mongodump --db vrindavan_guide --out /backups/$(date +%Y%m%d)

# Restore backup
mongorestore --db vrindavan_guide /backups/20250128/vrindavan_guide
```

### Update Application
```bash
# Backend updates
cd /opt/backend
source venv/bin/activate
git pull  # if using git
pip install -r requirements.txt
sudo systemctl restart vrindavan-backend

# Frontend updates
cd /opt/frontend
yarn install
yarn build
# No restart needed - Nginx serves static files
```

## 🆘 Troubleshooting

### Backend not starting
```bash
# Check logs
sudo journalctl -u vrindavan-backend -n 50

# Test manually
cd /opt/backend
source venv/bin/activate
uvicorn server:app --host 0.0.0.0 --port 8001
```

### Frontend not loading
```bash
# Check Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Check if build directory exists
ls -la /opt/frontend/build/
```

### Database connection issues
```bash
# Check MongoDB status
sudo systemctl status mongod

# Test connection
mongo vrindavan_guide -u vrindavan_admin -p
```

## 📞 Support

For deployment issues:
- Check logs first
- Verify environment variables
- Ensure all services are running
- Check firewall rules

## 🎉 Post-Deployment

After successful deployment:
1. Test all pages: Home, Temples, Spiritual Places, Festivals, etc.
2. Test search functionality
3. Test map display
4. Submit test testimonial
5. Subscribe test email to newsletter
6. Check sitemaps: https://your-domain.com/api/sitemap.xml
7. Verify schema markup with Google's Rich Results Test
8. Submit sitemap to Google Search Console

## 📋 Deployment Package Location

Your complete deployment package is located at:
```
/app/vrindavan-mathura-guide-deployment.tar.gz (276 KB)
```

This package contains all frontend and backend code, ready for deployment.

---

**Version:** 1.0.0  
**Last Updated:** December 2025  
**Tech Stack:** React 19 + FastAPI + MongoDB + Nginx
