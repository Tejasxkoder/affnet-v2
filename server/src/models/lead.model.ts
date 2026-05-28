import mongoose, { Schema } from "mongoose"
// import { lowercase } from "zod"
// import { required } from "zod/mini"

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
        unique : true,
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
        enum : ["new", "contacted", "qualified", "closed"],
        default : "new",
    },
    assigned_to : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Admin",
    },
    notes : [
        {
            message : String,
            createdAt : Date,
        },
    ],
},
{
    timestamps : true,
}
)

export const LeadModel = mongoose.model("Leads", leadSchema);