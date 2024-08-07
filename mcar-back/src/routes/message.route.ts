import express from "express";
import { messageController } from "../controllers";

const messageRouter = express.Router();

messageRouter
    .get('/cars/:messageId', messageController.findById)
    .post('/', messageController.create)
    .put('/:messageId', messageController.update)
    .delete('/:messageId', messageController.delete)


export default messageRouter;