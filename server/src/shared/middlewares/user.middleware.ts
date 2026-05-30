import jwt from "jsonwebtoken"
import type { Request, Response, NextFunction } from "express"
import { JWT_USER_PASSWORD } from "../../config/jwt.config.js"

//In typescript req.userId doesn't come by default so we have to extend the type Request
interface customRequest extends Request {
    userId ? : string;
}

export const userMiddleware = (
    req : customRequest,
    res : Response,
    next : NextFunction
) => {
        const authHeader = req.headers.authorization;

        if(!authHeader){
            res.status(401).json({
                message : "Token missing"
            })
            return;
        }
            const token = authHeader.split(" ")[1] as string;
            
        try {
            const decoded = jwt.verify(token, JWT_USER_PASSWORD) as {id : string};
            req.userId = decoded.id ;
            next();

        }catch(e){
            res.status(401).json({
            message: "Invalid token"
        })
    }
        
}