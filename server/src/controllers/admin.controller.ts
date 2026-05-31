import type { Request, Response } from "express";
import { signinAdmin, signupAdmin } from "../services/admin.service.js";

export const signupController = async (
    req : Request,
    res : Response
    ): Promise<void> => {
        try {
            const user = await signupAdmin(req.body);

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
        const user = await signinAdmin(req.body);

        res.status(200).json({
            success : true,
            message : "You are logged in",
            user : user
        })
    }catch(e){
        res.status(400).json({
            success : false,
            message :
            e instanceof Error ? e.message : "Something went wrong",
        })
    }
}