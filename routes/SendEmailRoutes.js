import { Router } from 'express';
import { sendMessage } from '../controllers/SendMessageController.js';


const SendEmailRouter = Router();


SendEmailRouter.post("/send",sendMessage);



export default SendEmailRouter;