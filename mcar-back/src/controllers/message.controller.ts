import {type Request, type Response} from 'express';
import { MessageModel } from '../models/message.model';

export class MessageController {
    async findById(req: Request, res: Response) {
        try {
            const { messageId } = req.params;

            const message = await MessageModel.findById(messageId);

            if(!message) {
                res.status(404).send('Message not found');
                return;
            }

            res.status(200).send(message);
        } catch(error:any) {
            console.log(error);
            res.status(500).send({error: error.message});
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { email, lastname, firstname, phone, address, carId } = req.body;

            const message = await MessageModel.create({ email, lastname, firstname, phone, address, carId });

            res.status(201).send(message);
        } catch(error:any) {
            console.log(error);
            res.status(500).send({error: error.message});
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { messageId } = req.params;
            const { email, lastname, firstname, phone, address, carId } = req.body;

            if(!email || !lastname || !firstname || !phone || !address || !carId) {
                res.status(400).send({
                    message: "missing data"
                })
            }

            const updatedMessage = await MessageModel.findByIdAndUpdate(messageId, {
                email, 
                lastname, 
                firstname, 
                phone, 
                address, 
                carId,
            })

            if(!updatedMessage) {
                res.status(404).send('Message not found');
                return;
            }

            res.status(201).send(updatedMessage);
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { messageId } = req.params;

            const deleteResult = await MessageModel.delete(messageId);

            if(!deleteResult) {
                res.status(404).send('Message not found');
                return;
            }

            res.status(200).send({
                message: 'message deleted'
            });
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }
}