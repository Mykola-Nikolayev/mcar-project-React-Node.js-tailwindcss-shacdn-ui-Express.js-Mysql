import {type Request, type Response} from 'express'
import { CarModel } from '../models/car.model'

export class CarController {
    async findAll(_req: Request, res: Response) {
        try {
            const cars = await CarModel.findAll();
    
            res.status(201).send(cars);
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const { carId } = req.params;

            const car = await CarModel.findById(carId);

            if(!car) {
                res.status(404).send('Car not found');
                return;
            }

            res.status(201).send(car);
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { name, description, price } = req.body;

            const car = await CarModel.create({ name, description, price });
    
            res.status(201).send(car);
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { carId } = req.params;
            const { name, description, price } = req.body;

            if(!name || !description || !price) {
                res.status(400).send({
                    message: "missing data"
                })
            }

            const updatedCar = await CarModel.findByIdAndUpdate(carId, {
                name,
                description,
                price,
            })

            if(!updatedCar) {
                res.status(404).send('Car not found');
                return;
            }

            res.status(201).send(updatedCar);
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { carId } = req.params;

            const deleteResult = await CarModel.delete(carId);

            if(!deleteResult) {
                res.status(404).send('Car not found');
                return;
            }

            res.status(200).send({
                message: 'car deleted'
            });
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }
}
