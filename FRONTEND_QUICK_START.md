# 🚀 Frontend Integration Quick Start

Your frontend and backend are now fully integrated. Here's how to start using it.

## 1. Install Dependencies (if not done)

```bash
cd client
npm install axios
```

## 2. API Services Are Ready to Use

### In Any Component:

```typescript
import { authAPI, propertyAPI, leadAPI, blogAPI } from '@/services/api';
```

## 3. Quick Examples

### Sign In
```typescript
import { authAPI } from '@/services/api';

const handleLogin = async (email: string, password: string) => {
  try {
    const response = await authAPI.signin({ email, password });
    localStorage.setItem('token', response.data.token);
    console.log('Logged in as:', response.data.user.firstName);
  } catch (error) {
    console.error('Login failed:', error.message);
  }
};
```

### Load Properties
```typescript
import { propertyAPI } from '@/services/api';

const loadProperties = async () => {
  try {
    const response = await propertyAPI.getAll(1, 10);
    console.log('Properties:', response.data.properties);
    console.log('Total:', response.data.total);
  } catch (error) {
    console.error('Error:', error.message);
  }
};
```

### Get Single Property
```typescript
const property = await propertyAPI.getById('property-id-here');
console.log(property.data);
```

### Upload Image
```typescript
const file = event.target.files[0];
const result = await propertyAPI.uploadImage('property-id', file);
console.log('Image URL:', result.data.url);
```

### Create Lead
```typescript
const lead = await leadAPI.create({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+919876543210',
  property: 'property-id',
  source: 'website',
  budget: { min: 30000, max: 60000 },
});
console.log('Lead created:', lead.data);
```

### Get Blog
```typescript
const blog = await blogAPI.getBySlug('my-blog-post');
console.log(blog.data.content);
```

## 4. Token Management

### Automatic
The token is automatically:
- Attached to every request
- Stored in localStorage
- Sent in `Authorization: Bearer <token>` header

### Manual Storage
```typescript
// After login
localStorage.setItem('token', response.data.token);

// Later retrieve if needed
const token = localStorage.getItem('token');

// On logout
localStorage.removeItem('token');
```

## 5. Error Handling

```typescript
try {
  const response = await authAPI.signin({ email, password });
} catch (error) {
  if (error.message === 'Invalid credentials') {
    console.error('Wrong password');
  } else if (error.message === 'User does not exist') {
    console.error('User not found');
  } else {
    console.error('Error:', error.message);
  }
}
```

## 6. Loading & Error States

```typescript
'use client';

import { useState } from 'react';
import { propertyAPI } from '@/services/api';

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        setError('');
        const response = await propertyAPI.getAll(1, 10);
        setProperties(response.data.properties);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {properties.map((p) => (
        <div key={p._id}>{p.title}</div>
      ))}
    </div>
  );
}
```

## 7. Common Patterns

### Pagination
```typescript
const [page, setPage] = useState(1);

const response = await propertyAPI.getAll(page, 10);
const { properties, total, pages } = response.data;

// Next page
if (page < pages) setPage(page + 1);
```

### Filtering
```typescript
const response = await propertyAPI.getAll(1, 10, {
  city: 'Mumbai',
  category: 'apartment',
  'pricing.rent': { $lte: 100000 },
});
```

### Mutations (Create/Update/Delete)
```typescript
// Create
const created = await propertyAPI.create({ title: 'New Property' });

// Update
const updated = await propertyAPI.update('id', { title: 'Updated' });

// Delete
await propertyAPI.delete('id');
```

## 8. Protected Routes

Use this pattern for routes that require login:

```typescript
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authAPI } from '@/services/api';

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/sign-in');
          return;
        }

        const response = await authAPI.getProfile();
        setUser(response.data);
      } catch (error) {
        localStorage.removeItem('token');
        router.push('/sign-in');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {user?.firstName}</h1>
      {/* Dashboard content */}
    </div>
  );
}
```

## 9. Form Submission Example

```typescript
'use client';

import { useState } from 'react';
import { propertyAPI } from '@/services/api';

export default function AddPropertyForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await propertyAPI.create({
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        'location.city': formData.get('city'),
        'pricing.rent': Number(formData.get('rent')),
      });

      console.log('Property created:', response.data._id);
      e.currentTarget.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <input name="title" required />
      <textarea name="description" required />
      <select name="category" required>
        <option>apartment</option>
        <option>villa</option>
        <option>office</option>
      </select>
      <input name="city" required />
      <input name="rent" type="number" required />
      <button disabled={loading}>{loading ? 'Creating...' : 'Create'}</button>
    </form>
  );
}
```

## 10. API Reference

### authAPI
- `signup(data)` - Register new user
- `signin(data)` - Login user
- `getProfile()` - Get logged-in user profile
- `logout()` - Logout user

### propertyAPI
- `getAll(page, limit, filters)` - Get paginated properties
- `getById(id)` - Get single property
- `create(data)` - Create new property
- `update(id, data)` - Update property
- `delete(id)` - Delete property
- `uploadImage(id, file)` - Upload property image to Cloudinary

### leadAPI
- `getAll(page, limit)` - Get paginated leads
- `getById(id)` - Get single lead
- `create(data)` - Create new lead
- `update(id, data)` - Update lead
- `updateStatus(id, status)` - Update lead status
- `delete(id)` - Delete lead

### blogAPI
- `getAll(page, limit)` - Get paginated blogs
- `getBySlug(slug)` - Get blog by slug
- `create(data)` - Create new blog
- `update(id, data)` - Update blog
- `delete(id)` - Delete blog

---

## Environment Setup

Make sure `.env.local` has:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```

For production, update to your deployed backend URL:
```env
NEXT_PUBLIC_API_URL=https://your-api.com/api/v1
```

---

## Testing with Postman

1. Open Postman
2. Import the API calls from `server/README_API.md`
3. Test endpoints before using in frontend
4. Copy responses to understand data structure

---

## Debugging Tips

### Check Console
```typescript
const response = await propertyAPI.getAll(1, 10);
console.log('Response:', response);
console.log('Data:', response.data);
```

### Check Network Tab
- DevTools → Network tab
- Look for API requests
- Check request headers (Authorization)
- Check response status & body

### Check localStorage
```javascript
// In browser console
localStorage.getItem('token');
localStorage.getItem('user');
```

---

## Next Steps

1. ✅ Update all hardcoded data with API calls
2. ✅ Add loading states to components
3. ✅ Add error handling
4. ✅ Test all API endpoints
5. ✅ Deploy backend and frontend

---

**Everything is ready! Start integrating your frontend with the backend now! 🎉**

Read `FRONTEND_BACKEND_INTEGRATION.md` for more detailed examples.
