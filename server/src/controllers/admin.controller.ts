/**
 * @file admin.controller.ts
 * @description Controller for handling admin authentication requests
 * @tags controller, auth, admin
 */

import type { Request, Response } from "express";
import {
  signinAdmin,
  signupAdmin,
  getUserById,
} from "../services/admin.service.js";

/**
 * @interface AuthenticatedRequest
 * @description Request object with authentication data
 * @tags types, interfaces
 */
interface AuthenticatedRequest extends Request {
  userId?: string;
}

/**
 * @controller signupController
 * @description Handles admin user registration
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {void}
 * @tags authentication, controller
 */
export const signupController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // @tag: Validate required fields
    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
      return;
    }

    // @tag: Call signup service
    const user = await signupAdmin({
      firstName,
      lastName,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Signup failed, please try again",
    });
  }
};

/**
 * @controller signinController
 * @description Handles admin user authentication
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {void}
 * @tags authentication, controller
 */
export const signinController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    // @tag: Validate required fields
    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
      return;
    }

    // @tag: Call signin service
    const result = await signinAdmin({
      email,
      password,
    });

    // @tag: Set secure cookie with token (optional)
    res.cookie("authToken", result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      success: true,
      message: "Authentication successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Authentication failed, please try again",
    });
  }
};

/**
 * @controller getProfileController
 * @description Retrieves authenticated user's profile
 * @param {AuthenticatedRequest} req - Express request with user data
 * @param {Response} res - Express response object
 * @returns {void}
 * @tags user, profile, controller
 */
export const getProfileController = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.userId) {
      res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
      return;
    }

    // @tag: Fetch user profile from database
    const user = await getUserById(req.userId);

    res.status(200).json({
      success: true,
      message: "Profile retrieved successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to retrieve profile",
    });
  }
};

/**
 * @controller logoutController
 * @description Handles user logout
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {void}
 * @tags authentication, controller
 */
export const logoutController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // @tag: Clear authentication cookie
    res.clearCookie("authToken");

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Logout failed, please try again",
    });
  }
};
