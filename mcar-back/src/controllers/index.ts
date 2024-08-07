import { CarController } from './car.controller'
import { CarImageController } from './carImage.controller';
import { MessageController } from './message.controller';
import { CategoryComtroller } from './category.controller';
import { AppointementController } from './appointement.controller';
import {AuthController} from "./Auth.controller";


const carController = new CarController();
const carImageController = new CarImageController();
const messageController = new MessageController();
const categoryController = new CategoryComtroller();
const authControllerv = new  AuthController();
const appointementController = new AppointementController();
const authController = new AuthController();

export {
    carController,
    carImageController,
    messageController,
    categoryController,
    authControllerv,
    appointementController,
    authController
}