import express from 'express';
import carRouter from './car.route'
import carImageRouter from './carImage.route'
import messageRouter from './message.route';
import categoryRouter from './category.route';
import appointementRouter from './Appointement.route';
import authRouter from "./Auth.route"

const appRouter = express.Router();

appRouter.use('/cars', carRouter)
appRouter.use('/carImages', carImageRouter)
appRouter.use('/messages', messageRouter)
appRouter.use('/categorys', categoryRouter)
appRouter.use('/appointements', appointementRouter)
appRouter.use("/auth",authRouter);

export default appRouter;
