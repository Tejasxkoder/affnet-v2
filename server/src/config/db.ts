import mongoose from "mongoose";
import { DB_URL } from "./env.js";
export const connectDB = async () => {
    await mongoose.connect(DB_URL as string)   
}


