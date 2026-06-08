/**
 * @file properties.model.ts
 * @description MongoDB Property/Real Estate listing schema
 * @tags model, database, property
 */

import mongoose, { Schema } from "mongoose";

/**
 * @constant propertySchema
 * @description Property listing schema with complete fields
 * @tags schema, database
 */
const propertySchema = new Schema(
  {
    // @tag: Basic Information
    /**
     * @tag: Property title/name
     * @type {String}
     */
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 200,
    },

    /**
     * @tag: URL-friendly slug
     * @type {String}
     */
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    /**
     * @tag: Detailed description
     * @type {String}
     */
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 20,
    },

    /**
     * @tag: Property category
     * @type {String}
     */
    category: {
      type: String,
      required: true,
      enum: [
        "office_space",
        "coworking_space",
        "managed_office",
        "retail_shop",
        "warehouse",
        "investment_property",
      ],
    },

    // @tag: Location Information
    /**
     * @tag: Location details object
     * @type {Object}
     */
    location: {
      city: {
        type: String,
        required: true,
        trim: true,
      },
      locality: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        trim: true,
      },
      zipCode: {
        type: String,
        trim: true,
      },
      latitude: {
        type: Number,
        min: -90,
        max: 90,
      },
      longitude: {
        type: Number,
        min: -180,
        max: 180,
      },
    },

    // @tag: Pricing Information
    /**
     * @tag: Pricing details object
     * @type {Object}
     */
    pricing: {
      rent: {
        type: Number,
        required: true,
        min: 0,
      },
      securityDeposit: {
        type: Number,
        default: 0,
        min: 0,
      },
      maintenanceCharges: {
        type: Number,
        default: 0,
        min: 0,
      },
      rentUnit: {
        type: String,
        enum: ["monthly", "yearly"],
        default: "monthly",
      },
      pricePerUnit: Number,
    },

    // @tag: Property Specifications
    /**
     * @tag: Property area in sqft
     * @type {Number}
     */
    area: {
      type: Number,
      required: true,
      min: 0,
    },

    /**
     * @tag: Area unit (sqft, sqm)
     * @type {String}
     */
    areaUnit: {
      type: String,
      enum: ["sqft", "sqm"],
      default: "sqft",
    },

    /**
     * @tag: Number of floors/stories
     * @type {Number}
     */
    floors: Number,

    /**
     * @tag: Parking available
     * @type {Boolean}
     */
    parking: {
      type: Boolean,
      default: true,
    },

    /**
     * @tag: Parking spaces count
     * @type {Number}
     */
    parkingSpaces: Number,

    /**
     * @tag: HVAC system available
     * @type {Boolean}
     */
    hvac: {
      type: Boolean,
      default: true,
    },

    /**
     * @tag: Lift/Elevator available
     * @type {Boolean}
     */
    lift: {
      type: Boolean,
      default: true,
    },

    /**
     * @tag: Furnished status
     * @type {String}
     */
    furnishType: {
      type: String,
      enum: ["unfurnished", "semi_furnished", "fully_furnished"],
      default: "unfurnished",
    },

    // @tag: Amenities & Features
    /**
     * @tag: List of amenities
     * @type {Array}
     */
    amenities: [
      {
        type: String,
        trim: true,
      },
    ],

    // @tag: Media & Images
    /**
     * @tag: Media files object
     * @type {Object}
     */
    media: {
      images: [
        {
          url: String,
          publicId: String, // Cloudinary public ID
          caption: String,
        },
      ],
      videoUrl: String,
      virtualTourUrl: String,
      brochureUrl: String,
      floorPlanUrl: String,
    },

    /**
     * @tag: Thumbnail image URL
     * @type {String}
     */
    thumbnail: String,

    // @tag: Availability & Lease
    /**
     * @tag: Property status
     * @type {String}
     */
    status: {
      type: String,
      enum: ["available", "sold", "rented", "draft", "archived"],
      default: "available",
    },

    /**
     * @tag: Lease type
     * @type {String}
     */
    leaseType: {
      type: String,
      enum: ["sale", "lease", "both"],
      default: "lease",
    },

    /**
     * @tag: Available from date
     * @type {Date}
     */
    availableFrom: Date,

    /**
     * @tag: Possession status
     * @type {String}
     */
    possessionStatus: {
      type: String,
      enum: ["ready", "under_construction", "vacant"],
      default: "ready",
    },

    // @tag: Analytics & Featured
    /**
     * @tag: View count
     * @type {Number}
     */
    views: {
      type: Number,
      default: 0,
    },

    /**
     * @tag: Featured property
     * @type {Boolean}
     */
    isFeatured: {
      type: Boolean,
      default: false,
    },

    /**
     * @tag: Featured until date
     * @type {Date}
     */
    featuredUntil: Date,

    /**
     * @tag: User ratings/reviews
     * @type {Array}
     */
    reviews: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        rating: {
          type: Number,
          min: 1,
          max: 5,
        },
        comment: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    /**
     * @tag: Average rating
     * @type {Number}
     */
    averageRating: {
      type: Number,
      default: 0,
    },

    // @tag: Relations & Metadata
    /**
     * @tag: Listed by user ID
     * @type {ObjectId}
     */
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    /**
     * @tag: Property broker (optional)
     * @type {ObjectId}
     */
    broker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    /**
     * @tag: Contact person details
     * @type {Object}
     */
    contactPerson: {
      name: String,
      phone: String,
      email: String,
    },

    /**
     * @tag: Additional notes
     * @type {String}
     */
    notes: String,

    /**
     * @tag: SEO metadata
     * @type {Object}
     */
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
    },
  },
  {
    timestamps: true,
  }
);

// @tag: Indexes for performance
propertySchema.index({ slug: 1 });
propertySchema.index({ category: 1 });
propertySchema.index({ "location.city": 1 });
propertySchema.index({ "pricing.rent": 1 });
propertySchema.index({ createdBy: 1 });
propertySchema.index({ createdAt: -1 });
propertySchema.index({ isFeatured: 1 });
propertySchema.index({ status: 1 });

/**
 * @constant PropertyModel
 * @description Property model for MongoDB operations
 * @tags model, mongoose
 */
export const PropertyModel = mongoose.model("Property", propertySchema);