import {z} from "zod";
import jwt from "jsonwebtoken"
import  bcrypt  from "bcrypt";
import { AdminModel } from "../models/admin.model.js";
import { JWT_ADMIN_PASSWORD } from "../config/jwt.config.js"
import { adminMiddleware } from "../shared/middlewares/admin.middleware.js";

interface signupData {
    firstName : string;
    lastName : string;
    email : string;
    password : string;
}

//signup
export const signupAdmin = async (
    data : signupData
) => {
        // validation
        const requireBody = z.object({
            firstName : z.string().min(3).max(100),
            lastName : z.string().min(3).max(100),
            email : z.string().min(3).max(100).email(),
            password : z.string()
                    .min(8, { message : "Password must contain at least 8 characters"})
                    .max(100)
                    .regex(/[A-Z]/, {message : "Password must contain at least one uppercase letter"})
                    .regex(/[0-9]/, {message :"Password must contain at least one number"})
                    .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character" })
        });

        const parseDataWithSuccess = requireBody.safeParse(data);
        if(!parseDataWithSuccess.success){
            throw new Error("Invalid format");
        }

        // extracted the payload
        const { firstName, lastName, email, password } = data;

        //check if the admin already exists
        const existingadmin = await AdminModel.findOne({ email });
        if(existingadmin){
            throw new Error("admin already exists");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10) //with 10 salt rounds

        const admin = await AdminModel.create({
            firstName,
            lastName,
            email,
            password : hashedPassword
        })

        return {
            id : admin._id,
            firstName : admin.firstName,
            lastName : admin.lastName,
            email : admin.email
        }
        
    }

    interface signinData {
        email : string;
        password : string;
    }

    //signin
export const signinadmin = async (
    data : signinData
) => {
    
        const { email, password } = data;
      
        const response = await AdminModel.findOne({
            email : email
        });
        if(!response){
            throw new Error("admin does not exist")
        }
        
        const passwordMatch = await bcrypt.compare(password, response.password);

        //generating a token which will be used for different REST apis
        if(passwordMatch){
            const token = jwt.sign({
                id : response._id.toString()  // _id is the mongodb id(objectId) of the admin
            }, JWT_ADMIN_PASSWORD)

            return {
                token
            };
        }else{
            throw new Error("Invalid credentials");
        }

    }

    // addProperties
    export const addproperties = () => {
        
    }
