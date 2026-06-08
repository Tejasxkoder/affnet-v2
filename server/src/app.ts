/**
 * @file app.ts
 * @description Express application configuration and middleware setup
 * @tags app, server, express
 */

import express from "express"
import type { Express, Request, Response, NextFunction } from "express"
import cors from "cors";

// @tag: Import routes and middleware
import adminRouter from "./routes/admin.route.js";
import { authMiddleware } from "./shared/middlewares/auth.middleware.js";
import propertyRouter from "./routes/property.route.js"
import leadRouter from "./routes/lead.route.js"

/**
 * @constant app
 * @description Express application instance
 * @tags app, express
 */
const app: Express = express();

/**
 * @section Middleware Configuration
 * @tags middleware, configuration
 */

// @tag: CORS configuration for cross-origin requests
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.FRONTEND_URL || "http://localhost:3000"
        : ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// @tag: JSON body parser middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// @tag: Request logging middleware (development)
if (process.env.NODE_ENV !== "production") {
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
  });
}

/**
 * @section Health Check Route
 * @tags health-check, status
 */
app.get("/api/v1/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

/**
 * @section API Route Registrations
 * @tags routes, public, protected
 */

// @tag: Authentication routes (signup, signin, logout)
app.use("/api/v1/auth", adminRouter);

// @tag: Property routes
app.use("/api/v1/properties", propertyRouter);

// @tag: Lead routes
app.use("/api/v1/leads", leadRouter);

// @tag: Admin routes (requires authentication)
app.use("/api/v1/admin", authMiddleware, adminRouter);

/**
 * @section Error Handling Middleware
 * @tags error-handling, middleware
 */

// @tag: 404 Not Found handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  });
});

// @tag: Global error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV !== "production" && { error: err.stack }),
  });
});

export default app;
