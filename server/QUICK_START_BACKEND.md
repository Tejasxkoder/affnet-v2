# 🚀 START HERE - Backend Setup Quick Start

## 📌 You Have ~35 Minutes to Get Backend Running

Follow these steps **in order**:

---

## ✅ Step 1: Install Dependencies (5 minutes)

```bash
cd server
npm install
```

Wait for it to complete. You should see ~100+ packages installed.

---

## ✅ Step 2: Get Cloudinary Credentials (10 minutes)

**What is Cloudinary?** Cloud storage for images. Free tier = 25GB storage.

1. Go to: https://cloudinary.com/users/register/free
2. Sign up (email or Google)
3. Verify email
4. Go to Dashboard: https://cloudinary.com/console
5. **Copy these 3 values:**
   - `Cloud Name` dtvx3ej0j
   - `API Key` 717888962665126
   - `API Secret` Dhsq0ynB_Q79LiCj_H5YJpb9Mys

**Keep these handy. You'll paste them next.**

---

## ✅ Step 3: Create .env File (5 minutes)

In the `server` folder, create a new file named `.env` (yes, just `.env`)

**Copy this and fill in YOUR VALUES:**

```env
NODE_ENV=development
PORT=5000

# Choose ONE database option:
# Option A: Local MongoDB (easiest for testing)
DB_URL=mongodb://localhost:27017/affnet

# Option B: MongoDB Atlas (cloud - skip if using local)
# DB_URL=mongodb+srv://username:password@cluster0.xxxx.mongodb.net/affnet?retryWrites=true&w=majority

# JWT Secret - Make it long and random
JWT_ADMIN_PASSWORD=my-super-secret-key-at-least-32-characters-long-123456789

# Cloudinary (from Step 2)
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=123456789
CLOUDINARY_API_SECRET=your_secret_here

FRONTEND_URL=http://localhost:3000
```

**Replace the Cloudinary values with what you copied!**

---

## ✅ Step 4: Setup MongoDB (10 minutes)

### Option A: Local MongoDB (Recommended for Testing)

**Windows:**
- Download MongoDB from mongodb.com
- Install (next → next → finish)
- MongoDB starts automatically

**macOS:**
```bash
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

### Option B: MongoDB Atlas (Cloud - No Install)

1. Go to: https://www.mongodb.com/cloud/atlas
2. Create account
3. Create free cluster (M0)
4. Click "Connect"
5. Copy connection string
6. In `.env`, replace `DB_URL` with this string
7. Add username/password to the string

---

## ✅ Step 5: Start Backend Server (5 minutes)

```bash
npm run dev
```

**You should see:**

```
╔════════════════════════════════════════╗
║     🚀 Server Running Successfully     ║
╠════════════════════════════════════════╣
║ Port: 5000
║ Environment: development
║ Database: MongoDB connected
╚════════════════════════════════════════╝
```

**If you see errors:**
- Cloudinary error? Check your credentials in .env
- MongoDB error? Make sure MongoDB is running
- Port error? Change PORT to 5001 in .env

---

## ✅ Step 6: Test API (5 minutes)

Open **Postman** or use your terminal.

### Test 1: Health Check
```bash
curl http://localhost:5000/api/v1/health
```

Response:
```json
{ "message": "Server is running" }
```

### Test 2: Sign Up
```bash
curl -X POST http://localhost:5000/api/v1/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "SecurePass123!@"
  }'
```

Response:
```json
{
  "success": true,
  "message": "Signup successful",
  "data": { "user data here" }
}
```

### Test 3: Sign In
```bash
curl -X POST http://localhost:5000/api/v1/auth/signin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "SecurePass123!@"
  }'
```

Response:
```json
{
  "success": true,
  "message": "Signin successful",
  "data": {
    "token": "eyJhbGc...",
    "user": { "id": "xxx", "email": "john@example.com" }
  }
}
```

---

## ✅ Congratulations! 🎉

Your backend is ready!

---

## 📚 What's Next?

### Right Now (Next 30 minutes)
Read: `server/README_API.md` - Understand all endpoints

### Within 1 Hour
- Make sure all 3 tests above pass
- Save your Postman collection

### Tomorrow
- Create controllers for properties, leads, blogs
- See `server/BACKEND_SETUP_GUIDE.md` for code examples

### This Week
- Connect frontend to backend
- Test complete authentication flow

---

## 🆘 Troubleshooting

### "Cannot connect to database"
```
✓ Is MongoDB running? (check Task Manager / Activity Monitor)
✓ Is DB_URL correct in .env?
✓ Is it mongodb:// (local) or mongodb+srv:// (cloud)?
```

### "Cloudinary authentication failed"
```
✓ Copy exact values from cloudinary.com/console
✓ No extra spaces or quotes
✓ Check each value character by character
```

### "Port 5000 already in use"
```
✓ Change PORT=5001 in .env
✓ Or kill process using port 5000
```

### "Signup/Signin not working"
```
✓ Password must have 8+ chars, uppercase, number, special char
✓ Email must be valid format
✓ Check error message in response
```

---

## 💡 Quick Tips

- Backend URL: `http://localhost:5000`
- API version: `v1` (used in all endpoints)
- Token expires in 7 days
- Free Cloudinary tier: 25GB storage
- MongoDB free tier: plenty for development

---

## 📖 More Help

1. **Setup Issues?** → Read `server/BACKEND_SETUP_GUIDE.md`
2. **API Questions?** → Read `server/README_API.md`
3. **Quick Reference?** → Read `server/SETUP_CHECKLIST.md`
4. **Full Overview?** → Read `BACKEND_COMPLETE_SUMMARY.md`

---

## ⏱️ Timeline

| Step | Time | Status |
|------|------|--------|
| 1. Install deps | 5 min | ⏳ |
| 2. Cloudinary | 10 min | ⏳ |
| 3. Create .env | 5 min | ⏳ |
| 4. MongoDB | 10 min | ⏳ |
| 5. Start server | 5 min | ⏳ |
| **Total** | **35 min** | **Let's go!** |

---

**Questions? All documentation is in the `server` folder.**

**Ready? Start with Step 1! 🚀**
