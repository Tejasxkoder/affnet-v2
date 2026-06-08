/**
 * @file README.md
 * @description Backend API documentation and setup guide
 * @tags documentation, api, guide
 */

# AffNet Backend API Documentation

> Premium Commercial Real Estate Platform - Backend Server

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- MongoDB >= 5.0
- npm or yarn package manager

### Installation

```bash
# Clone repository
git clone https://github.com/Tejasxkoder/affnet-v2.git
cd affnet-v2/server

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your configuration
```

### Configuration

Update `.env` file with your settings:

```env
NODE_ENV=development
PORT=5000
DB_URL=mongodb://localhost:27017/affnet
JWT_ADMIN_PASSWORD=your-strong-secret-key
FRONTEND_URL=http://localhost:3000
```

### Running the Server

```bash
# Development (with hot reload)
npm run dev

# Production build
npm run build
npm start
```

## 📚 API Endpoints

### Authentication Routes

#### Sign Up (Public)
- **POST** `/api/v1/auth/signup`
- Register a new user account
- **Body:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "SecurePass123!@"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "role": "admin"
    }
  }
  ```

#### Sign In (Public)
- **POST** `/api/v1/auth/signin`
- Authenticate user and receive JWT token
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "SecurePass123!@"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Authentication successful",
    "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "id": "user_id",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com",
        "role": "admin"
      }
    }
  }
  ```

#### Get Profile (Protected)
- **GET** `/api/v1/admin/profile`
- Retrieve authenticated user's profile
- **Headers:** `Authorization: Bearer <token>`
- **Response:**
  ```json
  {
    "success": true,
    "message": "Profile retrieved successfully",
    "data": {
      "_id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "role": "admin",
      "isActive": true,
      "phone": "+919876543210",
      "createdAt": "2026-06-07T10:30:00Z",
      "updatedAt": "2026-06-07T10:30:00Z"
    }
  }
  ```

#### Logout (Protected)
- **POST** `/api/v1/admin/logout`
- Logout user and clear authentication
- **Headers:** `Authorization: Bearer <token>`
- **Response:**
  ```json
  {
    "success": true,
    "message": "Logged out successfully"
  }
  ```

### Health Check

- **GET** `/api/v1/health`
- Check server status
- **Response:**
  ```json
  {
    "success": true,
    "message": "Server is running",
    "timestamp": "2026-06-07T10:30:00Z"
  }
  ```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. **Sign in** to receive a token
2. **Include token** in Authorization header: `Authorization: Bearer <token>`
3. Token expires in **7 days**
4. Token contains user ID, email, role, and name

### Example Request with Token

```bash
curl -X GET http://localhost:5000/api/v1/admin/profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

## 📋 Project Structure

```
server/
├── src/
│   ├── app.ts                 # Express app configuration
│   ├── server.ts              # Server startup
│   ├── config/
│   │   ├── db.ts              # Database connection
│   │   └── env.ts             # Environment variables
│   ├── controllers/
│   │   └── admin.controller.ts # Authentication controllers
│   ├── models/
│   │   ├── user.model.ts      # User schema
│   │   ├── lead.model.ts      # Lead schema
│   │   └── properties.model.ts # Property schema
│   ├── services/
│   │   └── admin.service.ts   # Authentication logic
│   ├── routes/
│   │   └── admin.route.ts     # Authentication routes
│   └── shared/
│       ├── middlewares/
│       │   └── auth.middleware.ts # JWT verification
│       ├── errors/
│       │   └── error-handler.ts   # Error classes
│       ├── types/
│       │   └── types.ts           # TypeScript interfaces
│       └── utils/
│           └── utils.ts           # Helper functions
├── dist/                      # Compiled JavaScript
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
└── .env.example              # Environment template
```

## 🎯 Features

- ✅ User Authentication (Sign up, Sign in, Logout)
- ✅ JWT Token Based Authorization
- ✅ Password Hashing with Bcrypt
- ✅ Input Validation with Zod
- ✅ CORS Support
- ✅ Error Handling
- ✅ TypeScript Support
- ✅ MongoDB Integration
- ✅ Role-Based Access Control (Admin, Sales)

## 🛡️ Security Features

- **Password Hashing:** Bcrypt with 10 salt rounds
- **JWT Expiration:** 7 days
- **Input Validation:** Zod schema validation
- **Email Validation:** RFC-compliant regex
- **Password Requirements:**
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one number
  - At least one special character (@$!%*?&)
- **HTTP-only Cookies:** For token storage
- **CORS:** Configurable origin validation

## 📝 Password Requirements

When signing up, passwords must contain:
- ✓ Minimum 8 characters
- ✓ At least one uppercase letter (A-Z)
- ✓ At least one digit (0-9)
- ✓ At least one special character (@$!%*?&)

**Example Valid Password:** `SecurePass123!@`

## 🚨 Error Handling

All errors follow a standard format:

```json
{
  "success": false,
  "message": "Error description",
  "error": {
    "type": "ValidationError",
    "statusCode": 400
  },
  "timestamp": "2026-06-07T10:30:00Z"
}
```

### Common Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request / Validation Error
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `409` - Conflict (User already exists)
- `500` - Internal Server Error

## 🧪 Testing

### Test Sign Up
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

### Test Sign In
```bash
curl -X POST http://localhost:5000/api/v1/auth/signin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "SecurePass123!@"
  }'
```

## 📖 API Response Format

All responses follow this standard format:

```typescript
interface APIResponse<T> {
  success: boolean;        // Operation success status
  message: string;         // Human-readable message
  data?: T;               // Response payload (if applicable)
  error?: any;            // Error details (if applicable)
  timestamp?: string;     // ISO timestamp of response
}
```

## 🔄 Development Workflow

1. Install dependencies: `npm install`
2. Set up `.env` file
3. Run in dev mode: `npm run dev`
4. Server starts at http://localhost:5000
5. Make API requests and test endpoints

## 📦 Dependencies

- **Express:** Web framework
- **Mongoose:** MongoDB ODM
- **Bcrypt:** Password hashing
- **JWT:** Token-based authentication
- **Zod:** Schema validation
- **CORS:** Cross-origin resource sharing
- **Dotenv:** Environment variables

## 🤝 Contributing

1. Follow the code structure
2. Add JSDoc comments to functions
3. Use TypeScript for type safety
4. Keep functions focused and modular
5. Test before committing

## 📄 License

ISC

## 📞 Support

For issues and support:
- GitHub Issues: [affnet-v2/issues](https://github.com/Tejasxkoder/affnet-v2/issues)
- Email: support@affnet.com

---

**Last Updated:** June 7, 2026
