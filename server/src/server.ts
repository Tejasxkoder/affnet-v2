/**
 * @file server.ts
 * @description Express server initialization and startup
 * @tags server, main
 */

import { PORT } from "./config/env.js";
import app from "./app.js";
import { connectDB } from "./config/db.js";

/**
 * @function startServer
 * @description Initializes database connection and starts the Express server
 * @returns {Promise<void>}
 * @tags server, initialization
 */
const startServer = async () => {
  try {
    // @tag: Connect to MongoDB
    await connectDB();
    console.log("✓ Database connected successfully");

    // @tag: Start Express server
    const server = app.listen(PORT || 5000, () => {
      const runningPort = PORT || 5000;
      console.log(`
╔════════════════════════════════════════╗
║     🚀 Server Running Successfully     ║
╠════════════════════════════════════════╣
║ Port: ${runningPort}
║ Environment: ${process.env.NODE_ENV || "development"}
║ Database: ${process.env.DB_URL || "Local MongoDB"}
╚════════════════════════════════════════╝
      `);
    });

    // @tag: Handle server errors
    server.on("error", (error: any) => {
      console.error("Server error:", error);
      process.exit(1);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

/**
 * @tag: Handle unhandled promise rejections
 */
process.on("unhandledRejection", (reason: any) => {
  console.error("Unhandled Rejection:", reason);
  process.exit(1);
});

// @tag: Initialize server
startServer();
