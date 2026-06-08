# 📋 Backend & Cloudinary Setup Checklist

## Phase 1: Initial Setup ✅ (What I Did)

- [x] Created Cloudinary configuration file
- [x] Created upload middleware (multer)
- [x] Enhanced all database models (Property, Lead, Blog, User)
- [x] Updated environment configuration
- [x] Added authentication middleware
- [x] Created error handling utilities
- [x] Created type definitions
- [x] Created helper utilities
- [x] Updated .env.example with Cloudinary config
- [x] Created comprehensive documentation

---

## Phase 2: What YOU Need to Do NOW

### 🔧 Step 1: Install Dependencies (5 minutes)

```bash
cd server
npm install
```

**What gets installed:**
- Express.js (web framework)
- MongoDB/Mongoose (database)
- Bcrypt (password hashing)
- JWT (authentication)
- Cloudinary (image hosting)
- Multer (file uploads)
- Zod (validation)
- CORS (cross-origin)
- Dotenv (environment variables)

### 🌐 Step 2: Create Cloudinary Account (10 minutes)

1. Go to **[cloudinary.com/users/register/free](https://cloudinary.com/users/register/free)**
2. Sign up with email/Google
3. Verify email
4. Go to **Dashboard** (https://cloudinary.com/console)
5. **Copy these 3 things:**
   - Cloud Name
   - API Key
   - API Secret

**Why Cloudinary?**
- 25GB free storage (very generous)
- Automatic image optimization
- Image transformations
- CDN delivery (fast images)
- Easy integration

### 📝 Step 3: Create .env File (5 minutes)

**In `server` folder, create file named `.env`:**

```env
NODE_ENV=development
PORT=5000

# MongoDB - Choose ONE option:
# Option A: Local MongoDB
DB_URL=mongodb://localhost:27017/affnet

# Option B: MongoDB Atlas (Cloud) - Recommended
# DB_URL=mongodb+srv://username:password@cluster0.xxxx.mongodb.net/affnet?retryWrites=true&w=majority

JWT_ADMIN_PASSWORD=your-super-secret-key-at-least-32-characters-long

# Cloudinary (from Step 2)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

FRONTEND_URL=http://localhost:3000
```

### 💾 Step 4: Setup MongoDB (5-10 minutes)

**Option A: Local MongoDB**
```bash
# Windows
# Download from mongodb.com and install
# MongoDB starts automatically

# macOS
brew install mongodb-community
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

**Option B: MongoDB Atlas (Recommended)**
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create a cluster (M0 free tier)
4. Get connection string
5. Replace `DB_URL` in `.env`

### ✅ Step 5: Test Backend (5 minutes)

```bash
# From server directory
npm run dev
```

**You should see:**
```
✓ Database connected successfully
🚀 Server Running Successfully
Port: 5000
Environment: development
```

### 🧪 Step 6: Test API Endpoints (10 minutes)

**Use Postman or curl:**

**1. Health Check**
```bash
curl http://localhost:5000/api/v1/health
```

**2. Sign Up**
```bash
curl -X POST http://localhost:5000/api/v1/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@test.com",
    "password": "SecurePass123!@"
  }'
```

**3. Sign In**
```bash
curl -X POST http://localhost:5000/api/v1/auth/signin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@test.com",
    "password": "SecurePass123!@"
  }'
```

You'll get back a **JWT token**. This token is used to access protected routes.

---

## Phase 3: After Backend is Running

### 📦 Install Additional Packages (Optional)

```bash
npm install sharp nodemailer express-rate-limit compression
```

### 🎯 Create Controllers & Routes

You need to create controllers and routes for:

1. **Properties** - CRUD operations for listings
2. **Leads** - Customer inquiries management
3. **Blogs** - Content management

See `BACKEND_SETUP_GUIDE.md` for code examples.

### 🔗 Connect Frontend to Backend

In frontend, change API calls from hardcoded to:

```typescript
const API_BASE_URL = "http://localhost:5000/api/v1";

// Sign up
const signup = async (data) => {
  const response = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

// Sign in
const signin = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  localStorage.setItem("token", data.data.token);
  return data;
};

// Protected endpoint
const getProfile = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_BASE_URL}/admin/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};
```

---

## 📊 Time Estimates

| Task | Time | Difficulty |
|------|------|------------|
| Install dependencies | 5 min | Easy |
| Cloudinary setup | 10 min | Easy |
| Create .env file | 5 min | Easy |
| Setup MongoDB | 10 min | Easy |
| Test backend | 5 min | Easy |
| **Total** | **35 min** | **Very Easy** |

---

## 🚨 Common Issues & Solutions

### Issue: "Cannot find module 'cloudinary'"
**Solution:** `npm install cloudinary`

### Issue: "MongoError: connect ECONNREFUSED"
**Solution:** 
- Ensure MongoDB is running
- Check DB_URL in .env
- Verify connection string

### Issue: "Invalid Cloudinary credentials"
**Solution:**
- Copy exact values from cloudinary.com/console
- Check no extra spaces
- Regenerate API key if needed

### Issue: "Port 5000 already in use"
**Solution:** Change PORT in .env to 5001 or 5002

### Issue: "JWT signature invalid"
**Solution:** Ensure JWT_ADMIN_PASSWORD is at least 32 characters

---

## 📁 Files Already Created for You

✅ `server/src/config/cloudinary.config.ts` - Cloudinary setup
✅ `server/src/shared/middlewares/upload.middleware.ts` - File upload handling
✅ `server/src/models/properties.model.ts` - Enhanced with full fields
✅ `server/src/models/lead.model.ts` - Enhanced with full fields
✅ `server/src/models/blogs.model.ts` - Enhanced with full fields
✅ `server/src/models/user.model.ts` - Enhanced with full fields
✅ `server/src/config/env.ts` - Full environment config
✅ `server/.env.example` - Complete template
✅ `server/BACKEND_SETUP_GUIDE.md` - Detailed guide

---

## 🎯 Next Steps After Setup

1. **Create Property Controller & Routes**
   - CRUD for properties
   - Search and filter
   - Image upload with Cloudinary

2. **Create Lead Controller & Routes**
   - Lead creation
   - Status management
   - Assignment logic

3. **Create Blog Controller & Routes**
   - Blog creation/editing
   - Publishing
   - SEO metadata

4. **Connect Frontend to Backend**
   - Replace API calls
   - Add token management
   - Handle errors

5. **Deploy**
   - Backend: Render, Heroku, AWS, DigitalOcean
   - Frontend: Vercel, Netlify
   - Database: MongoDB Atlas

---

## ✅ Final Checklist

- [ ] Dependencies installed
- [ ] Cloudinary account created
- [ ] .env file created with all values
- [ ] MongoDB setup and running
- [ ] Backend server starts successfully
- [ ] Health check endpoint works
- [ ] Sign up endpoint works
- [ ] Sign in endpoint works
- [ ] JWT token generated on signin

---

## 📞 Support

**Documentation Files:**
- `server/README_API.md` - API endpoints documentation
- `server/BACKEND_SETUP_GUIDE.md` - Detailed setup guide
- `client/DESIGN_SYSTEM.md` - Frontend color system
- `QUICK_START.md` - Quick reference

---

**Total Setup Time: ~35 minutes**

**You got this! 🚀**
