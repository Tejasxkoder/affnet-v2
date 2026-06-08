/**
 * @file user.model.ts
 * @description MongoDB User/Admin model schema
 * @tags model, database, mongodb
 */

import mongoose, { Schema } from "mongoose";

/**
 * @constant userSchema
 * @description User document schema definition
 * @tags schema, database
 */
const userSchema = new Schema(
  {
    /**
     * @tag: User's first name
     * @type {String}
     */
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    /**
     * @tag: User's last name
     * @type {String}
     */
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    /**
     * @tag: User's email address (unique)
     * @type {String}
     */
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    /**
     * @tag: User's hashed password
     * @type {String}
     */
    password: {
      type: String,
      required: true,
      minlength: 8,
    },

    /**
     * @tag: User role (admin or sales)
     * @type {String}
     */
    role: {
      type: String,
      required: true,
      enum: ["admin", "sales", "manager"],
      default: "sales",
    },

    /**
     * @tag: Whether user account is active
     * @type {Boolean}
     */
    isActive: {
      type: Boolean,
      default: true,
    },

    /**
     * @tag: User's phone number (optional)
     * @type {String}
     */
    phone: {
      type: String,
      trim: true,
      default: null,
    },

    /**
     * @tag: User's profile picture URL (optional)
     * @type {String}
     */
    profilePicture: {
      type: String,
      default: null,
    },

    /**
     * @tag: User's department (optional)
     * @type {String}
     */
    department: {
      type: String,
      default: null,
    },

    /**
     * @tag: Last login timestamp
     * @type {Date}
     */
    lastLogin: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// @tag: Index for email lookups
userSchema.index({ email: 1 });
// @tag: Index for created date queries
userSchema.index({ createdAt: -1 });

/**
 * @constant UserModel
 * @description User model for MongoDB operations
 * @tags model, mongoose
 */
export const UserModel = mongoose.model("User", userSchema);
