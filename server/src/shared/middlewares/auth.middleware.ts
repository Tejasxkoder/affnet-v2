/**
 * @file auth.middleware.ts
 * @description Authentication and authorization middleware for protected routes
 * @tags middleware, auth, jwt
 */

import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_ADMIN_PASSWORD || "default-secret-key";

/**
 * @interface AuthRequest
 * @description Extended Request object with user authentication data
 * @tags types, interfaces
 */
export interface AuthRequest extends Request {
  /** @tag: Authenticated user ID */
  userId?: string;
  /** @tag: User role for authorization */
  userRole?: string;
  /** @tag: JWT token from request */
  token?: string;
}

/**
 * @middleware authMiddleware
 * @description Validates JWT token and attaches user data to request
 * @param {AuthRequest} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 * @tags authentication, middleware
 */
export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  try {
    // @tag: Extract token from Authorization header
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({
        success: false,
        message: "No authentication token provided",
      });
      return;
    }

    // @tag: Verify JWT token
    const decoded: any = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    req.userRole = decoded.role;
    req.token = token;

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Invalid authentication token",
    });
  }
};

/**
 * @middleware roleMiddleware
 * @description Checks if user has required role for access
 * @param {string[]} allowedRoles - Array of roles that can access the route
 * @returns {Function} Middleware function
 * @tags authorization, middleware
 * @example
 * app.get("/admin", roleMiddleware(["admin"]), handler)
 */
export const roleMiddleware = (allowedRoles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.userRole || !allowedRoles.includes(req.userRole)) {
      res.status(403).json({
        success: false,
        message: "Insufficient permissions for this action",
      });
      return;
    }
    next();
  };
};

/**
 * @function generateToken
 * @description Generates a JWT token for authentication
 * @param {object} payload - Data to encode in token
 * @param {string} payload.id - User ID
 * @param {string} payload.email - User email
 * @param {string} payload.role - User role
 * @returns {string} JWT token
 * @tags utility, jwt
 */
export const generateToken = (payload: {
  id: string;
  email: string;
  role: string;
}): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
};

/**
 * @function verifyToken
 * @description Verifies and decodes a JWT token
 * @param {string} token - JWT token to verify
 * @returns {object} Decoded token payload
 * @tags utility, jwt
 */
export const verifyToken = (token: string): any => {
  return jwt.verify(token, JWT_SECRET);
};
