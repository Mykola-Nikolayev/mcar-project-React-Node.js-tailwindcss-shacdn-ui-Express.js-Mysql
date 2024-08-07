import express from "express";
import { carImageController } from "../controllers";

const carImageRouter = express.Router();

// http://localhost:5050/carImages/cars/3
carImageRouter
    .get('/cars/:carId', carImageController.findByCarId)
    .post('/', carImageController.create)
    .put('/:carImageId', carImageController.update)
    .delete('/:carImageId', carImageController.delete)

export default carImageRouter;