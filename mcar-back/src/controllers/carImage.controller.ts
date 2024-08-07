import {type Request, type Response} from 'express'
import { CarImageModel } from '../models/carImage.model'

export class CarImageController {
    async findByCarId(req: Request, res: Response) {
        try {
            const { carId } = req.params;

            const carImages = await CarImageModel.findByCarId(carId)

            res.status(200).send(carImages);
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { url, carId } = req.body;

            const carImage = await CarImageModel.create({ url, carId })

            res.status(201).send(carImage);
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { carImageId } = req.params;
            const { url } = req.body;

            if(!url) {
                res.status(400).send({
                    message: "missing data"
                })
            }

            const updateCarImage = await CarImageModel.findByIdAndUpdate(carImageId, {
                url
            })
            
            if(!updateCarImage) {
                res.status(404).send('Car image not found');
                return;
            }

            res.status(201).send(updateCarImage);
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { carImageId } = req.params;

            const deleteResult = await CarImageModel.delete(carImageId);

            if(!deleteResult) {
                res.status(404).send('Car image not found');
                return;
            }

            res.status(200).send({
                message: 'car image deleted'
            });
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }
}