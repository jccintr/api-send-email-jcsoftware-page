import { sendEmail } from "../util/sendEmail.js";
import { sendEmailFromBrazDriverSupport } from "../util/sendEmailFromBrazDriverSupport.js";
import { sendEmailBrazTaxi } from "../util/sendEmailBrazTaxi.js";

 export const sendMessage =  async (req,res) => {

    const {name,email,phone,message} = req.body;

    if(!name || !message || !phone){
      return res.status(422).json({message: 'Campos requeridos não informados.'});
    }
    

    const body = `Nome: ${name}\n\nEmail: ${email?email:'Não informado'}\n\nTelefone: ${phone}\n\n\n${message}`;

    if (sendEmail(body)) {
        return res.status(200).json({message: 'Mensagem enviada com sucesso.'});
    } else {
        return res.status(400).json({message: 'Falha ao enviar mensagem.'});
    }

   
 }

  export const sendMessageFromSuporteBrazDriver =  async (req,res) => {

    const {name,email,phone,message} = req.body;

    if(!name || !message || !phone){
      return res.status(422).json({message: 'Campos requeridos não informados.'});
    }

    const body = `<p><strong>Nome:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email?email:'Não informado'}
                  </p><p><strong>Telefone:</strong> ${phone}</p>
                  <p><strong>Mensagem:</strong></p>
                  <p>${message}</p>`;

    if (sendEmailFromBrazDriverSupport(body)) {

        return res.status(200).json({message: 'Mensagem enviada com sucesso.'});

    } else {

        return res.status(400).json({message: 'Falha ao enviar mensagem.'});
        
    }
    
  }

   export const sendMessageFromBrazTaxi =  async (req,res) => {

    const {name,email,phone,message, subject} = req.body;

    if(!name || !message || !phone || !subject){
      return res.status(422).json({message: 'Campos requeridos não informados.'});
    }

    const body = `<p><strong>Assunto:</strong> ${subject}</p>
                  <p><strong>Nome:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email?email:'Não informado'}
                  </p><p><strong>Telefone:</strong> ${phone}</p>
                  <p><strong>Mensagem:</strong></p>
                  <p>${message}</p>`;

    if (sendEmailBrazTaxi(body)) {

        return res.status(200).json({message: 'Mensagem enviada com sucesso.'});

    } else {

        return res.status(400).json({message: 'Falha ao enviar mensagem.'});
        
    }
    
  }