import mongoose, { Schema } from "mongoose"

    const userSchema = new Schema({

        firstName : {
            type : String,
            required : true,
            trim : true,
        },

        lastName : {
            type : String,
            required : true,
            trim : true,
        },

        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true,
        },

        password : {
            type : String,
            required : true,
        },

        role : {
            type : String,
            required : true,
            enum : ["admin", "sales"],
            default : "sales",
        },

        isActive : {
            type : Boolean,
            default : true,
        }

    },

    {
        timestamps : true,
    }

);

export const UserModel = mongoose.model("User", userSchema);