import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

export const sendEmailFromBrazDriverSupport = async(body) => {

  const resend = new Resend(process.env.RESEND_API_KEY);

  

  

   

    resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'jccintr@gmail.com',
  subject:  "Suporte Braz Driver",
  html: body
});
return true
}
