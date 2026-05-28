import mongoose, { Schema } from "mongoose";
// import { lowercase } from "zod";
// import { required } from "zod/mini";

const propertySchema = new Schema({
    title : {
        type : String,
        required : true,
        trim : true,
    },
    slug : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
    },
    description : {
        type : String,
        required : true,
        trim : true,
    },
    category : {
        type : String,
        required : true,
        enum : ["apartment", "villa", "plot", "office", "shop"],
    },
    city : {
        type : String,
        required : true,
        trim : true,
    },
    locality : {
        type : String,
        required : true,
        trim : true,
    },
    pricing : {
        type : Number,
        required : true,
        min : 0,
    },
    area : {
        type : Number,
        required : true,
        min : 0,
    },
    amenities : [
        {
        type : String,
        trim : true,
        },
    ],
    images : [
        {
            type : String,
        }
    ],
    status : {
        type : String,
        required : true,
        enum : ["available", "sold", "rented"],
        default : "available",
    },

},
    {
        timestamps : true,
    }
)

export const PropertyModel = mongoose.model("Property", propertySchema);