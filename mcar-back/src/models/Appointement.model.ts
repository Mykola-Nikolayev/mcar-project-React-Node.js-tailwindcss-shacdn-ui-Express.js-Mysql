
import {db} from "../../config/db";


interface AppointementDto {

    email: string ;
    firstName: string;
    lastName: string ;
    contact: string;
    address1: string;
    address2?: string;
    city: string;
    postalCode: string;
    province: string;
    interest: string;
    receiveNotificationState: string;
    selectedTimer : string;
    specifiedTimer: string;
    dateFrom: Date;
    dateTo: Date;
}



export class AppointementModel {


    static async findById(id: number |string) {
        const  [appointement]: any = await db.promise().query(
            `select * from appointments where id= ?`, [id]
        )
        return appointement[0];
    }

    static async create( dto: AppointementDto ) {
        const {
            email , firstName , lastName , contact , address1, address2,city,postalCode,province,
            interest,receiveNotificationState ,selectedTimer,specifiedTimer,dateFrom,dateTo
         } = dto 
         const [insertResult] : any = await db.promise().query(
            `INSERT INTO  appointments  (email , firstName, lastName , contact , address1 , address2,city , postalCode,province, interest,receiveNotificationState,selectedTimer,specifiedTimer, dateFrom, dateTo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)` , 
            [email, firstName, lastName, contact, address1, address2, city,postalCode,province,interest,receiveNotificationState,selectedTimer,specifiedTimer,dateFrom,dateTo]
         )
         const newAppointementId  = insertResult?.insertId || 1 ;
         return AppointementModel.findById(newAppointementId);
    }

    static async findByIdAndUpdate(id: number | string ,updatesValue : Partial<AppointementDto>) {
        const [updatedResult]: any = await db.promise().query(
            `update appointments set ? where id = ?` , 
            [updatesValue,id]
        )
        if(!updatedResult.affectedRows) {
            return null ;
        }
        return AppointementModel.findById(id);
    }

    static async delete(id: number | string ){
        const [deletedResult]:any = await db.promise().query(
            ` delete from appointments where id = ?`,
            [id]
        )
        if(!deletedResult.affectedRows) {
            return false;
        }
        return true
    }

    static async findAll() {
        const [appointements] : any = await db.promise().query(
            `select * from appointments`
        )
        return appointements;
    }

}






