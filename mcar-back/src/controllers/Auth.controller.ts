import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthModel, AuthInterface } from "../models/Auth.model";

export class AuthController {
   static getToken(user: AuthInterface): string {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        throw new Error("JWT secret is not defined");
    }
    
    return jwt.sign(
        {
            email: user.email,
        },
        jwtSecret,
        {
            expiresIn: "1d",
        }
    ); 
   }

   static checkToken(req: any, res: Response) {
    try {
        res.status(200).send(req.user);
    } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: "Internal server error" });
    }
   }

    async login(req: Request, res: Response): Promise<void> {
    try {
        const { email, password }  :  {email : string ; password : string} = req.body;
        if (!email || !password) {
            res.status(401).send({
                error: "Email or password are incorrect",
            });
            return;
        }
        const user = await AuthModel.findEmailAndPassword(email, password);
        if (!user) {
            res.status(401).send({
                error: "Email or password are incorrect",
            });
            return;
        }
        const authToken = AuthController.getToken(user);
        user.password = "";
        res.status(200).send({
            authToken,
            user,
        });
    } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: "Internal server error" });
    }
   }

    async register(req: Request, res: Response): Promise<void> {
    try {
        const { email, password, username } = req.body;

        if (!email || !password || !username) {
            res.status(400).send({
                error: "Email, username, and password are required"
            });
            return;
        }

        const user: AuthInterface = {
            email,
            username,
            password
        };

        const newUser = await AuthModel.create(user);
        const authToken = AuthController.getToken(newUser);

        newUser.password = "";

        res.status(200).send({
            authToken,
            user: newUser
        });
    } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error?.message });
    }
   }
}