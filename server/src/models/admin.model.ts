import mongoose, {Schema} from "mongoose"

const adminSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
    },

    password : {
        type : String,
        required : true,
    },

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

},
    {
        timestamps : true,
    }
);

export const AdminModel = mongoose.model("Admin", adminSchema)

