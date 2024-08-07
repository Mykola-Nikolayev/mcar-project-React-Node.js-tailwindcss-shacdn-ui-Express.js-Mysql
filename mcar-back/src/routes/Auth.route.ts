

import express from 'express';
import { authController } from '../controllers';

const authRouter = express.Router();

authRouter
    .post('/login', authController.login)
    .post('/signup', authController.register)


export default authRouter;
