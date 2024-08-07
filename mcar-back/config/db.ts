import mysql from 'mysql2';
import dotenv from "dotenv";
import { carsTableQuery, carImagesTableQuery } from '../sql'
import {AppointementTableQuery} from "../sql/Appointement.sql"

dotenv.config();

export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

const createTable = (query: string, name: string) => {
    db.query(query, (err, result) => {
        if(err) {
            console.log("Erreur lors de la création de la table :", err);
            return;
        }

        console.log(`Table "${name}" créée ou déjà existante`);
    })
}

db.connect((err) => {
    if(err) {
        console.log("Erreur de connexion à la base de données :", err);
        return;
    }

    console.log(`Conneté à la base de données ${process.env.DB_NAME}`)

    createTable(carsTableQuery, 'cars')
    createTable(carImagesTableQuery, 'car_images')
    createTable(AppointementTableQuery , 'appointments')
})