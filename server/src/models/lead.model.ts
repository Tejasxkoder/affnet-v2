import mongoose, { Schema } from "mongoose";

const leadSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    source: {
      type: String,
      enum: ["website", "facebook", "instagram", "google", "referral", "call", "email"],
      default: "website",
    },

    status: {
      type: String,
      enum: [
        "new",
        "contacted",
        "site_visit_scheduled",
        "interested",
        "negotiation",
        "closed",
        "lost",
      ],
      default: "new",
    },

    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    notes: [
      {
        message: {
          type: String,
          required: true,
          trim: true,
        },
        createdBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    lastContacted: Date,
    nextFollowUp: Date,

    budget: {
      min: Number,
      max: Number,
      currency: { type: String, default: "INR" },
    },

    requiredArea: Number,
    timeline: {
      type: String,
      enum: ["immediate", "1_month", "3_months", "6_months", "flexible"],
    },
    requirements: String,
    qualityScore: { type: Number, min: 0, max: 100, default: 0 },
  },
  {
    timestamps: true,
  }
);

leadSchema.index({ property: 1 });
leadSchema.index({ assignedTo: 1 });
leadSchema.index({ status: 1 });
leadSchema.index({ email: 1 });
leadSchema.index({ phone: 1 });
leadSchema.index({ createdAt: -1 });

export const LeadModel = mongoose.model("Leads", leadSchema);