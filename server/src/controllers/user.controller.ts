import type { Request, Response } from "express";
import { signinUser, signupUser } from "../services/user.service.js";

export const signupController = async (
    req : Request,
    res : Response
    ): Promise<void> => {
        try {
            const user = await signupUser(req.body);

            res.status(201).json({
                success : true,
                message : "User registered successfully",
                data : user,
            });
        }catch(e){
            res.status(400).json({
                success : false,
                message : 
                e instanceof Error
                ? e.message
                : "Something went wrong",
            })
        }
    }

export const signinController = async (
    req : Request,
    res : Response
) : Promise<void> => {
    try {
        const user = await signinUser(req.body);

        res.status(200).json({
            success : true,
            message : "You are logged in"
            
        })
    }catch(e){
        res.status(400).json({
            success : false,
            message :
            e instanceof Error ? e.message : "Something went wrong",
        })
    }
}