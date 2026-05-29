import mongoose, { Schema } from "mongoose"

const leadSchema = new Schema({

    name : {
        type : String,
        required : true,
        trim : true,
    },

    phone : {
        type : String,  
        required : true,
        trim : true,
    },

    email : { //since same person can show his/her interest in different properties
        type : String,
        trim : true,
        lowercase : true,
    },

    source : {
        type : String,
        enum : ["website", "facebook", "instagram", "google", "referral"],
        default : "website",
    },

    status : {
        type : String,
        enum : ["new", "contacted", "site_visit_scheduled", "interested", "negotiation", "closed", "lost"],
        default : "new",
    },

    property : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Property",
        required : true,
    },

    assignedTo : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },

    notes: [
        {
            message: {
                type: String,
                required: true,
                trim: true,
            },

            createdAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],

},

{
    timestamps : true,
}

)

export const LeadModel = mongoose.model("Leads", leadSchema);