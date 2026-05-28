import mongoose, { Schema } from "mongoose";
import { string } from "zod";

const blogSchema = new Schema({
    title : {
        type : String,
        required : true,
        trim : true,
    },
    slug : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    content : {
        type : String,
        required : true,
    },
    tags : [
        {
            type: String,
            trim: true,
        }
    ],
    seoData : {
        metatitle : {
            type : String, 
            trim : true,
        },
        metaDescription: {
        type: String,
        trim: true,
      },

      keywords: [
            {
            type: String,
            trim: true,
            },
        ]
    },
},
{
    timestamps : true,
}
)

export const BlogModel = mongoose.model("Blogs", blogSchema);