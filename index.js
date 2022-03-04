const nodemailer = require('nodemailer');
require('dotenv').config()
async function mail(){


const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, 
  service:'gmail',
  auth: {
    user: process.env.SENDER_EMAIL, 
    pass: process.env.SENDER_PASS, 
  },
  tls : {
      rejectUnauthorized:false
  }
});

const info = await transporter.sendMail({
    from: "mail.Netflix", // sender address
    to: process.env.RECEIVE_MAIL.split(','), // list of receivers
    cc:process.env.SENDER_EMAIL,
    bcc:process.env.SENDER_EMAIL,
    subject: "Netflix-originals", 
    text: "team conatus", 
    html: "<i>https://geez.art.blog/2021/10/18/okay-but-what/</i><br><b>here is the link to upcoming Netflix-originals script . . . . THE PEN</b> <p>written by Manu Shukla </p>", // html body
  });
}
mail()
.catch(console.error)