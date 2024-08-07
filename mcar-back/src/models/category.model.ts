import { db } from "../../config/db";

interface ICategory {
    name: string;
    description: string;
    image?: string;
}

export class CategoryModel {
    static async findById(id: number | string) {
        const [category]: any = await db.promise().query(
            `SELECT * FROM category WHERE id = ?`,
            [id]
        )

        return category[0];
    }

    static async create(dto: ICategory) {
        const { name, description, image } = dto;

        const [insertResult]: any = await db.promise().query(
            `INSERT INTO category (name, description, image) VALUES (?, ?, ?)`,
            [name, description, image]
        );

        const newCategoryId = insertResult?.insertId || 1;
        
        return CategoryModel.findById(newCategoryId)
    }

    static async findByIdAndUpdate(id: number | string, updatedValues: Partial<ICategory>) {
        const [updatedResult]: any = await db.promise().query(
            `UPDATE category SET ? WHERE id = ?`,
            [updatedValues, id]
        )

        if(!updatedResult.affectedRows) {
            return null
        }

        return CategoryModel.findById(id)
    }

    static async delete(id: number | string) {
        const [deletedResult]: any = await db.promise().query(
            `DELETE FROM categorys WHERE id = ?`,
            [id]
        )

        if(!deletedResult.affectedRows) {
            return false;
        }

        return true;
    }
}