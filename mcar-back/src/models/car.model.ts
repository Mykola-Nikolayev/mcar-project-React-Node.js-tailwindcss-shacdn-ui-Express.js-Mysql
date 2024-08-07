import { db } from "../../config/db"; 

interface ICar {
    name: string; 
    description: string; 
    price: number;
}

export class CarModel { 
    static async findAll() {
        const [cars]: any = await db.promise().query( 
            `SELECT * FROM cars`
        ) 

        return cars;
    }

    static async findById(id: number | string) { 
        const [car]: any = await db.promise().query( 
            `SELECT * FROM cars WHERE id = ?`, 
            [id] 
        ) 

        return car[0];
    } 

    static async create(dto: ICar) { 
        const { name, description, price } = dto; 

        const [insertResult]: any = await db.promise().query( 
            `INSERT INTO cars (name, description, price) VALUES (?, ?, ?)`, 
            [name, description, price] 
        ) 
        
        const newCarId = insertResult?.insertId || 1; 
        
        return CarModel.findById(newCarId)
    } 

    static async findByIdAndUpdate(id: number | string, updatedValues: Partial<ICar>) {
        const [updatedResult]: any = await db.promise().query(
            `UPDATE cars SET ? WHERE id = ?`,
            [updatedValues, id]
        )

        if(!updatedResult.affectedRows) {
            return null;
        }

        return CarModel.findById(id)
    }

    static async delete(id: number | string) {
        const [deletedResult]: any = await db.promise().query(
            `DELETE FROM cars WHERE id = ?`,
            [id]
        )

        if(!deletedResult.affectedRows) {
            return false;
        }

        return true;
    }
}