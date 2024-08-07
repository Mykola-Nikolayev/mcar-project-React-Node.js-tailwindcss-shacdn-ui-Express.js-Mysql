import express from "express";
import {appointementController} from "../controllers"

const appointementRouter = express.Router();

appointementRouter
    .get('/', appointementController.findAll)
    .get('/:appointementId', appointementController.findById)
    .post('/', appointementController.create)
    .put('/:appointementId', appointementController.update)
    .delete('/:appointementId', appointementController.delete)

export default appointementRouter