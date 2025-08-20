import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import SendEmailRouter from './routes/SendEmailRoutes.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors({
  origin: '*'
}));

app.get('/', function(req, res) {
    res.send('Bem Vindo a API Send Email');
  });
app.use(SendEmailRouter);
app.listen(process.env.PORT,()=>{
   console.log('SERVIDOR EXECUTANDO NA PORTA ' + process.env.PORT);
});