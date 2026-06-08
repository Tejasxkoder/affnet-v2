/**
 * @file admin.route.ts
 * @description Admin authentication and user routes
 * @tags routes, admin, auth
 */

import { Router } from "express";
import {
  signinController,
  signupController,
  getProfileController,
  logoutController,
} from "../controllers/admin.controller.js";
import { authMiddleware } from "../shared/middlewares/auth.middleware.js";

/**
 * @constant adminRouter
 * @description Express router for admin routes
 * @tags router, express
 */
const adminRouter = Router();

/**
 * @section Public Authentication Routes
 * @tags public, authentication
 */

// @tag: User signup endpoint
adminRouter.post("/signup", signupController);

// @tag: User signin endpoint
adminRouter.post("/signin", signinController);

/**
 * @section Protected User Routes
 * @tags protected, authenticated
 */

// @tag: Get user profile (requires authentication)
adminRouter.get("/profile", authMiddleware, getProfileController);

// @tag: User logout endpoint
adminRouter.post("/logout", authMiddleware, logoutController);

export default adminRouter;

