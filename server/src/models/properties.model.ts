import mongoose, { Schema } from "mongoose";

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
        enum: [
                "office_space",
                "coworking_space",
                "managed_office",
                "retail_shop",
                "warehouse",
                "investment_property",
            ],
    },

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

    media: {
            images: [
                {
                    type: String,
                    trim: true,
                },
            ],

            videoUrl: {
                type: String,
                trim: true,
            },

            virtualTourUrl: {
                type: String,
                trim: true,
            },

            brochureUrl: {
                type: String,
                trim: true,
            },

            floorPlanUrl: {
                type: String,
                trim: true,
            },
    },

    status : {
        type : String,
        enum : ["available", "sold", "rented"],
        default : "available",
    },

    views: {
        type: Number,
        default: 0,
    },

    isFeatured: {
        type: Boolean,
        default: false,
    },

    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    }, 

},

    {
        timestamps : true,
    }

)

export const PropertyModel = mongoose.model("Property", propertySchema);