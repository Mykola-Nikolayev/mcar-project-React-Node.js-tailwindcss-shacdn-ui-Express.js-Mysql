import express from "express";
import appRouter from './src/routes'
import dotenv from 'dotenv';

dotenv.config();

import "./config/db";

const PORT = 5050;

const app = express();

app.use(express.json())

app.use('', appRouter)


app.listen(PORT, () => {
    console.log(`server listen on http://localhost:${PORT}`)
})