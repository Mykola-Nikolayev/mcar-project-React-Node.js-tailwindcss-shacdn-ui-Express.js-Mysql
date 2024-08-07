import express from 'express';
import { carController } from '../controllers';

const carRouter = express.Router();

carRouter
    .get('/', carController.findAll)
    .get('/:carId', carController.findById)
    .post('/', carController.create)
    .put('/:carId', carController.update)
    .delete('/:carId', carController.delete)

export default carRouter;
