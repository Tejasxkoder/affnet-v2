/**
 * @file types.ts
 * @description Common TypeScript types and interfaces for the backend
 * @tags types, interfaces
 */

/**
 * @interface User
 * @description User/Admin database model
 * @tags types, user
 */
export interface User {
  /** @tag: MongoDB object ID */
  _id: string;
  /** @tag: User's first name */
  firstName: string;
  /** @tag: User's last name */
  lastName: string;
  /** @tag: User's email address */
  email: string;
  /** @tag: User's hashed password */
  password: string;
  /** @tag: User role (admin, sales, etc.) */
  role: "admin" | "sales" | "manager";
  /** @tag: Account active status */
  isActive: boolean;
  /** @tag: Account creation timestamp */
  createdAt: Date;
  /** @tag: Account last update timestamp */
  updatedAt: Date;
}

/**
 * @interface JWTPayload
 * @description JWT token payload structure
 * @tags types, jwt
 */
export interface JWTPayload {
  /** @tag: User ID */
  id: string;
  /** @tag: User's email */
  email: string;
  /** @tag: User's role */
  role: string;
  /** @tag: User's first name */
  firstName: string;
  /** @tag: User's last name */
  lastName: string;
  /** @tag: Token issue time */
  iat?: number;
  /** @tag: Token expiration time */
  exp?: number;
}

/**
 * @interface Property
 * @description Real estate property listing
 * @tags types, property
 */
export interface Property {
  /** @tag: MongoDB object ID */
  _id: string;
  /** @tag: Property title */
  title: string;
  /** @tag: Property description */
  description: string;
  /** @tag: Property type (residential, commercial, etc.) */
  type: "residential" | "commercial" | "industrial";
  /** @tag: Property location */
  location: string;
  /** @tag: Property address */
  address: string;
  /** @tag: City name */
  city: string;
  /** @tag: State/Province */
  state: string;
  /** @tag: Postal code */
  zipCode: string;
  /** @tag: Property area in square feet/meters */
  area: number;
  /** @tag: Price in rupees */
  price: number;
  /** @tag: Property images URLs */
  images: string[];
  /** @tag: Amenities list */
  amenities: string[];
  /** @tag: Availability status */
  isAvailable: boolean;
  /** @tag: Listed by user ID */
  listedBy: string;
  /** @tag: Property listing date */
  createdAt: Date;
  /** @tag: Last update date */
  updatedAt: Date;
}

/**
 * @interface Lead
 * @description Customer inquiry/lead information
 * @tags types, lead
 */
export interface Lead {
  /** @tag: MongoDB object ID */
  _id: string;
  /** @tag: Lead's first name */
  firstName: string;
  /** @tag: Lead's last name */
  lastName: string;
  /** @tag: Lead's email */
  email: string;
  /** @tag: Lead's phone number */
  phone: string;
  /** @tag: Property interest ID */
  propertyId: string;
  /** @tag: Lead inquiry message */
  message: string;
  /** @tag: Lead status (new, contacted, converted, etc.) */
  status: "new" | "contacted" | "interested" | "converted" | "rejected";
  /** @tag: Lead source (website, phone, social, etc.) */
  source: string;
  /** @tag: Assigned to user ID */
  assignedTo?: string;
  /** @tag: Lead creation date */
  createdAt: Date;
  /** @tag: Last update date */
  updatedAt: Date;
}

/**
 * @interface Transaction
 * @description Business transaction record
 * @tags types, transaction
 */
export interface Transaction {
  /** @tag: MongoDB object ID */
  _id: string;
  /** @tag: Transaction type (sale, lease, inquiry, etc.) */
  type: "sale" | "lease" | "inquiry" | "other";
  /** @tag: Property ID involved in transaction */
  propertyId: string;
  /** @tag: Buyer/Tenant ID */
  buyerId: string;
  /** @tag: Transaction amount in rupees */
  amount: number;
  /** @tag: Transaction status */
  status: "pending" | "completed" | "cancelled";
  /** @tag: Transaction date */
  transactionDate: Date;
  /** @tag: Additional notes */
  notes: string;
  /** @tag: Created by user ID */
  createdBy: string;
  /** @tag: Creation date */
  createdAt: Date;
  /** @tag: Last update date */
  updatedAt: Date;
}

/**
 * @interface Pagination
 * @description Pagination query parameters
 * @tags types, pagination
 */
export interface Pagination {
  /** @tag: Page number (starts at 1) */
  page: number;
  /** @tag: Items per page */
  limit: number;
  /** @tag: Sort field */
  sortBy?: string;
  /** @tag: Sort order (asc or desc) */
  sortOrder?: "asc" | "desc";
  /** @tag: Search query */
  search?: string;
}

/**
 * @interface PaginatedResponse
 * @description Paginated API response structure
 * @tags types, pagination
 */
export interface PaginatedResponse<T> {
  /** @tag: Array of items */
  items: T[];
  /** @tag: Total items count */
  total: number;
  /** @tag: Current page */
  page: number;
  /** @tag: Total pages */
  totalPages: number;
  /** @tag: Items per page */
  limit: number;
  /** @tag: Has next page */
  hasNextPage: boolean;
  /** @tag: Has previous page */
  hasPreviousPage: boolean;
}
