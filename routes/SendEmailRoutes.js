import { Router } from 'express';
import { sendMessage } from '../controllers/SendMessageController.js';
import { sendMessageFromSuporteBrazDriver,sendMessageFromBrazTaxi } from '../controllers/SendMessageController.js';


const SendEmailRouter = Router();


SendEmailRouter.post("/send",sendMessage);
SendEmailRouter.post("/send/brazdriver/suporte",sendMessageFromSuporteBrazDriver);
SendEmailRouter.post("/send/braztaxi/sap",sendMessageFromBrazTaxi);



export default SendEmailRouter;