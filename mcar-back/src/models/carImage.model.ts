import { db } from "../../config/db";

interface ICarImage {
    url: string;
    carId: number;
}

export class CarImageModel {
    static async findById(id: number | string) {
        const [car_image]: any = await db.promise().query( 
            `SELECT * FROM car_images WHERE id = ?`, 
            [id] 
        )

        return car_image[0];
    }

    static async findByCarId(carId: number | string) {
        const [car_images]: any = await db.promise().query( 
            `SELECT * FROM car_images WHERE carId = ?`, 
            [carId] 
        )

        return car_images;
    }

    static async create(dto: ICarImage) { 
        const { url, carId } = dto; 

        const [insertResult]: any = await db.promise().query( 
            `INSERT INTO car_images (url, carId) VALUES (?, ?)`, 
            [url, carId] 
        ) 
        
        const newCarId = insertResult?.insertId || 1; 
        
        return CarImageModel.findById(newCarId)
    } 

    static async findByIdAndUpdate(id: number | string, updatedValues: Partial<ICarImage>) {
        const [updatedResult]: any = await db.promise().query(
            `UPDATE car_images SET ? WHERE id = ?`,
            [updatedValues, id]
        )

        if(!updatedResult.affectedRows) {
            return null;
        }

        return CarImageModel.findById(id)
    }

    static async delete(id: number | string) {
        const [deletedResult]: any = await db.promise().query(
            `DELETE FROM car_images WHERE id = ?`,
            [id]
        )

        if(!deletedResult.affectedRows) {
            return false;
        }

        return true;
    }
}