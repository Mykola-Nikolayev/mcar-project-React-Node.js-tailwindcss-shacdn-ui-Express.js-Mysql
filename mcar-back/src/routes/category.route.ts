import express from "express";
import { categoryController } from "../controllers";

const categoryRouter = express.Router();

categoryRouter
    .get('/:categoryId', categoryController.findById)
    .post('/', categoryController.create)
    .put('/:categoryId', categoryController.update)
    .delete('/:categoryId', categoryController.delete)

export default categoryRouter;