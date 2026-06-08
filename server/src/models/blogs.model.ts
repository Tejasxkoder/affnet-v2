import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 200,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    content: {
      type: String,
      required: true,
      minlength: 50,
    },

    excerpt: {
      type: String,
      maxlength: 500,
    },

    featuredImage: String,
    featuredImagePublicId: String,

    category: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "market_insights",
        "investment_tips",
        "property_guide",
        "case_study",
        "news",
        "other",
      ],
    },

    tags: [
      {
        type: String,
        trim: true,
      },
    ],

    seoData: {
      metaTitle: {
        type: String,
        trim: true,
        maxlength: 60,
      },
      metaDescription: {
        type: String,
        trim: true,
        maxlength: 160,
      },
      keywords: [
        {
          type: String,
          trim: true,
        },
      ],
    },

    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },

    publishedAt: Date,
    isFeatured: { type: Boolean, default: false },

    views: { type: Number, default: 0 },
    commentCount: { type: Number, default: 0 },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    relatedProperties: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  {
    timestamps: true,
  }
);

blogSchema.index({ slug: 1 });
blogSchema.index({ author: 1 });
blogSchema.index({ status: 1 });
blogSchema.index({ category: 1 });
blogSchema.index({ publishedAt: -1 });
blogSchema.index({ isFeatured: 1 });
blogSchema.index({ createdAt: -1 });

export const BlogModel = mongoose.model("Blog", blogSchema);