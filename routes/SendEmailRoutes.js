import { Router } from 'express';
import { sendMessage } from '../controllers/SendMessageController.js';
import { sendMessageFromSuporteBrazDriver } from '../controllers/SendMessageController.js';


const SendEmailRouter = Router();


SendEmailRouter.post("/send",sendMessage);
SendEmailRouter.post("/send/brazdriver",sendMessageFromSuporteBrazDriver);



export default SendEmailRouter;