import { sendEmail } from "../util/sendEmail.js";

 export const sendMessage =  async (req,res) => {

    const {name,email,phone,message} = req.body;
    const body = `Nome: ${name}\n\nEmail: ${email}\n\nTelefone: ${phone}\n\n\n${message}`;
    if (sendEmail(body)) {
        return res.status(200).json({message: 'Mensagem enviada com sucesso.'});
    } else {
  return res.status(400).json({message: 'Falha ao enviar mensagem.'});
    }
   
 }