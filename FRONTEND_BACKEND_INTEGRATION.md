# Frontend-Backend Integration Guide

Setup your frontend to communicate with the backend API using Axios.

## 1. Install Axios

```bash
cd client
npm install axios
```

## 2. Axios Client is Ready

File: `client/src/lib/axiosClient.ts`

Features:
- Auto-attaches JWT token from localStorage
- Handles 401 errors (auto-logout)
- Extracts data from response automatically
- Base URL configured from `.env.local`

## 3. API Services Ready

File: `client/src/services/api.ts`

Available modules:
- `authAPI` - Sign up, sign in, profile, logout
- `propertyAPI` - Property CRUD and uploads
- `leadAPI` - Lead management
- `blogAPI` - Blog management

## 4. Usage Examples

### Sign Up

```typescript
import { authAPI } from '@/services/api';

const handleSignup = async (formData) => {
  try {
    const response = await authAPI.signup({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'SecurePass123!@',
    });

    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
  } catch (error) {
    console.error('Signup failed:', error.message);
  }
};
```

### Sign In

```typescript
import { authAPI } from '@/services/api';

const handleSignin = async (email, password) => {
  try {
    const response = await authAPI.signin({ email, password });

    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    
    // Redirect to dashboard
    router.push('/admin/dashboard');
  } catch (error) {
    console.error('Login failed:', error.message);
  }
};
```

### Get Profile (Protected)

```typescript
import { authAPI } from '@/services/api';

const getProfile = async () => {
  try {
    const response = await authAPI.getProfile();
    console.log('User profile:', response.data);
  } catch (error) {
    console.error('Failed to fetch profile:', error.message);
  }
};
```

### Get All Properties

```typescript
import { propertyAPI } from '@/services/api';

const loadProperties = async () => {
  try {
    const response = await propertyAPI.getAll(
      1, // page
      10, // limit
      { city: 'Mumbai', category: 'apartment' } // filters
    );

    console.log('Properties:', response.data.properties);
    console.log('Total:', response.data.total);
  } catch (error) {
    console.error('Failed to load properties:', error);
  }
};
```

### Create Property

```typescript
import { propertyAPI } from '@/services/api';

const createProperty = async (propertyData) => {
  try {
    const response = await propertyAPI.create({
      title: 'Beautiful Apartment',
      description: 'New apartment in city center',
      category: 'apartment',
      location: {
        city: 'Mumbai',
        locality: 'Bandra',
        coordinates: [19.0596, 72.8295],
      },
      pricing: {
        rent: 50000,
        deposit: 100000,
        rentUnit: 'monthly',
      },
      // ... other fields
    });

    console.log('Property created:', response.data);
  } catch (error) {
    console.error('Failed to create property:', error);
  }
};
```

### Upload Property Image

```typescript
import { propertyAPI } from '@/services/api';

const uploadImage = async (propertyId, file) => {
  try {
    const response = await propertyAPI.uploadImage(propertyId, file);

    console.log('Image uploaded:', response.data);
    // response contains: { url, publicId, size, format }
  } catch (error) {
    console.error('Upload failed:', error);
  }
};
```

### Create Lead

```typescript
import { leadAPI } from '@/services/api';

const createLead = async (propertyId, leadData) => {
  try {
    const response = await leadAPI.create({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+919876543210',
      property: propertyId,
      source: 'website',
      budget: { min: 30000, max: 60000, currency: 'INR' },
      requiredArea: 500,
      timeline: '3_months',
    });

    console.log('Lead created:', response.data);
  } catch (error) {
    console.error('Failed to create lead:', error);
  }
};
```

### Get Blog by Slug

```typescript
import { blogAPI } from '@/services/api';

const getBlog = async (slug) => {
  try {
    const response = await blogAPI.getBySlug(slug);

    console.log('Blog:', response.data);
  } catch (error) {
    console.error('Failed to fetch blog:', error);
  }
};
```

## 5. Update Frontend Components

### Replace Hardcoded Data with API Calls

**Before:**
```typescript
const PropertyCards = () => {
  const properties = [
    { id: 1, title: 'Property 1', price: 50000 },
    { id: 2, title: 'Property 2', price: 60000 },
  ];

  return (
    <div>
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
};
```

**After:**
```typescript
'use client';

import { useEffect, useState } from 'react';
import { propertyAPI } from '@/services/api';
import PropertyCard from '@/components/cards/property-cards';

const PropertyCards = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        const response = await propertyAPI.getAll(1, 10);
        setProperties(response.data.properties);
      } catch (err) {
        setError(err.message || 'Failed to load properties');
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {properties.map((property) => (
        <PropertyCard key={property._id} {...property} />
      ))}
    </div>
  );
};

export default PropertyCards;
```

## 6. Error Handling Pattern

```typescript
import { authAPI } from '@/services/api';

const handleLogin = async (credentials) => {
  try {
    const response = await authAPI.signin(credentials);
    // Success
    console.log('Logged in:', response.data.user);
  } catch (error) {
    // Error response from API
    if (error.message === 'Invalid credentials') {
      console.error('Wrong email or password');
    } else if (error.message === 'User does not exist') {
      console.error('User not found');
    } else {
      console.error('Login failed:', error.message);
    }
  }
};
```

## 7. Token Management

### Store Token on Login

```typescript
const response = await authAPI.signin(credentials);
localStorage.setItem('token', response.data.token);
```

### Token Auto-Attached to Requests

The axiosClient automatically includes the token:

```typescript
// Token is automatically sent in Authorization header
const profile = await authAPI.getProfile();
```

### Handle Token Expiry

If token expires (401 error), user is auto-logged out:

```typescript
// In axiosClient.ts (already implemented)
if (error.response?.status === 401) {
  localStorage.removeItem('token');
  window.location.href = '/sign-in';
}
```

## 8. Loading and Error States

```typescript
'use client';

import { useState } from 'react';
import { authAPI } from '@/services/api';

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authAPI.signin({
        email: e.target.email.value,
        password: e.target.password.value,
      });

      localStorage.setItem('token', response.data.token);
      // Redirect or update state
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button disabled={loading}>{loading ? 'Loading...' : 'Sign In'}</button>
    </form>
  );
};

export default SignInForm;
```

## 9. Environment Configuration

File: `client/.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```

For production:
```env
NEXT_PUBLIC_API_URL=https://yourdomain.com/api/v1
```

## 10. Common Issues & Solutions

### Issue: "CORS error" or "Network Error"

**Solution:** Ensure backend is running:
```bash
cd server
npm run dev
```

Check that `FRONTEND_URL` in backend `.env` includes your frontend URL:
```env
FRONTEND_URL=http://localhost:3000
```

### Issue: "Token not sent in requests"

**Solution:** Token must be in localStorage:
```typescript
localStorage.setItem('token', response.data.token);
```

The axiosClient automatically picks it up on next requests.

### Issue: "401 Unauthorized on protected routes"

**Solution:** Make sure token is valid and not expired:
```typescript
// Check if token exists
const token = localStorage.getItem('token');
console.log('Token:', token);

// Re-login if needed
if (!token) {
  router.push('/sign-in');
}
```

## 11. Full Example: Properties Page

```typescript
'use client';

import { useEffect, useState } from 'react';
import { propertyAPI } from '@/services/api';
import PropertyCard from '@/components/cards/property-cards';

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadProperties();
  }, [page]);

  const loadProperties = async () => {
    try {
      setLoading(true);
      const response = await propertyAPI.getAll(page, 10);
      setProperties(response.data.properties);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Properties</h1>

      {error && <div className="alert alert-error">{error}</div>}

      {loading ? (
        <div>Loading properties...</div>
      ) : (
        <>
          <div className="grid">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>

          <div className="pagination">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
              Previous
            </button>
            <span>Page {page}</span>
            <button onClick={() => setPage(page + 1)} disabled={properties.length < 10}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
```

---

**Summary:** Your frontend and backend are now connected. Use the API services to replace all hardcoded data. 🚀
