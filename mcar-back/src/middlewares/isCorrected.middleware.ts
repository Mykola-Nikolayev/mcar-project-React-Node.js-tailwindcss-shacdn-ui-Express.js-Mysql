import { type Response } from "express";
import jwt from 'jsonwebtoken'

export const IsConnectedMiddleware = (req: any, res: Response, next: any) => {

        try {
            const authToken = req.headers.authorization?.split(' ')[1]
            console.log(authToken);
            if(!authToken) {
                res.status(401).send({
                    error: "No token"
                })
                return;
            }

            const jwtSecret = process.env.JWT_SECRET

            if(!jwtSecret) {
                res.status(500).json({
                    message : "the token is being expired !! "
                })
                return;
            }

            req.user = jwt.verify(authToken, jwtSecret)

            next();
        } catch (error: any) {
            console.error(error)
            res.status(401).send({error: error.message})
        }
}