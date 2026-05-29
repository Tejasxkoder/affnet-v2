import {z} from "zod";
import jwt from "jsonwebtoken"
import  bcrypt  from "bcrypt";
import { UserModel } from "../models/user.model.js";
import { JWT_USER_PASSWORD } from "../config/jwt.config.js"
import { userMiddleware } from "../shared/middlewares/user.middleware.js";

interface signupData {
    name : string;
    email : string;
    password : string;
}

export const signupUser = async (
    data : signupData
) => {
        // validation
        const requireBody = z.object({
            name : z.string().min(3).max(100),
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
        const { name, email, password } = data;

        //check if the user already exists
        const existingUser = await UserModel.findOne({ email });
        if(existingUser){
            throw new Error("User already exists");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10) //with 10 salt rounds

        const user = await UserModel.create({
            name : name,
            email : email,
            password : hashedPassword
        })

        return {
            id : user._id,
            name : user.name,
            email : user.email
        }
        
    }

    interface signinData {
        email : string;
        password : string;
    }

export const signinUser = async (
    data : signinData
) => {
    
        const { email, password } = data;
      
        const response = await UserModel.findOne({
            email : email
        });
        if(!response){
            throw new Error("User does not exist")
        }
        
        const passwordMatch = await bcrypt.compare(password, response.password);

        //generating a token which will be used for different REST apis
        if(passwordMatch){
            const token = jwt.sign({
                id : response._id.toString()  // _id is the mongodb id(objectId) of the user
            }, JWT_USER_PASSWORD);

            return {
                token
            };
        }else{
            throw new Error("Invalid credentials");
        }

    }