import { db } from "../../config/db";

interface IMessage {
    email: string;
    lastname: string;
    firstname: string;
    phone: number;
    address: string;
    carId: number;
    //messageId: number; est ce qu on en a besoin
}

export class MessageModel {
    static async findById(id: number | string) {
        const [message]: any = await db.promise().query( 
            `SELECT * FROM messages WHERE id = ?`, 
            [id] 
        )

        return message[0];
    }

    static async create(dto: IMessage) {
        const { email, lastname, firstname, phone, address, carId } = dto;

        const [insertResult]: any = await db.promise().query(
            `INSERT INTO messages (email, lastname, firstname, phone, address, carId) VALUES (?, ?, ?, ?, ?, ?)`,
            [email, lastname, firstname, phone, address, carId]
        );

        const newMessageId = insertResult?.insertId || 1;

        return MessageModel.findById(newMessageId)
    }

    static async findByIdAndUpdate(id: number | string, updatedValues: Partial<IMessage>) {
        const [updatedResult]: any = await db.promise().query(
            `UPDATE messages SET ? WHERE id = ?`,
            [updatedValues, id]
        )

        if(!updatedResult.affectedRows) {
            return null;
        }

        return MessageModel.findById(id)
    }

    static async delete(id: number | string) {
        const [deletedResult]: any = await db.promise().query(
            `DELETE FROM messages WHERE id = ?`,
            [id]
        )

        if(!deletedResult.affectedRows) {
            return false;
        }

        return true;
    }
}