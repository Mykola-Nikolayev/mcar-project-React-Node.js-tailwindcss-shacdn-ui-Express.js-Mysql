import { type Request, type Response} from "express";
import { AppointementModel } from "../models/Appointement.model";



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



export class AppointementController {
    async findAll(req: Request, res: Response) {
        try {
            const appointements = await AppointementModel.findAll();

            res.status(201).send(appointements)
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }




    async findById(req: Request, res: Response) {
        try {
            const { appointementId } = req.params;
            if(!appointementId) {
                res.status(500).json({message : "you should add an id to get on item"})
            }

            const appointement = await AppointementModel.findById(appointementId);

            if(!appointement) {
                res.status(404).json({message : "there is no appointment with this id !"})
                return;
            }

            res.status(201).send(appointement);
        } catch (error: any) {  
            console.error(error);
            res.status(500).send({error: error.message})
        }
    }

    async create(req: Request, res: Response) {
        try {
            const {email, firstName, lastName, contact, address1, address2, city, postalCode, province, interest, receiveNotificationState, selectedTimer, specifiedTimer, dateFrom, dateTo} : AppointementDto = req.body;

            const appointement = await AppointementModel.create({email, firstName, lastName, contact, address1, address2, city, postalCode, province, interest, receiveNotificationState, selectedTimer, specifiedTimer, dateFrom, dateTo});

            res.status(201).send(appointement)
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message})
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { appointementId } = req.params;
            const { email, firstName, lastName, contact, address1, address2, city, postalCode, province, interest, receiveNotificationState, selectedTimer, specifiedTimer, dateFrom, dateTo } = req.body;

            if(!email || !firstName || !lastName || !contact || !address1 || !address2 || !city || !postalCode || !province || !interest || !receiveNotificationState || !selectedTimer || !specifiedTimer || !dateFrom || !dateTo) {
                res.status(400).send({
                    message: "missing data"
                })
            }

            const updateAppointment = await AppointementModel.findByIdAndUpdate(appointementId, {
                email, 
                firstName, 
                lastName, 
                contact, 
                address1, 
                address2, 
                city, 
                postalCode, 
                province, 
                interest, 
                receiveNotificationState, 
                selectedTimer, 
                specifiedTimer, 
                dateFrom, 
                dateTo
            })

            if(!updateAppointment) {
                res.status(404).send('appointment not found');
                return;
            }

            res.status(201).send(updateAppointment)
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }

    async delete(req: Request, res:Response) {
        try {
            const { appointementId } = req.params;

            const deleteResult = await AppointementModel.delete(appointementId);

            if(!deleteResult) {
                res.status(404).send('appointement not found')
                return;
            }

            res.status(200).send({
                message: 'appointment deleted'
            })
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }
}