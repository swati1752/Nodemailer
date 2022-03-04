const nodemailer = require('nodemailer');
require('dotenv').config()
async function mail(){
let testAccount = await nodemailer.createTestAccount();

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  service:'gmail',
  auth: {
    user: process.env.SENDER_EMAIL, // generated ethereal user
    pass: process.env.SENDER_PASS, // generated ethereal password
  },
  tls : {
      rejectUnauthorized:false
  }
});

let info = await transporter.sendMail({
    from: "mail.Netflix", // sender address
    to: process.env.RECEIVE_MAIL.split(','), // list of receivers
    subject: "Netflix-originals", // Subject line
    text: "team conatus", // plain text body
    html: "<i>https://geez.art.blog/2021/10/18/okay-but-what/</i><br><b>here is the link to upcoming Netflix-originals script . . . . THE PEN</b> <p>written by Manu Shukla </p>", // html body
  });
}
mail()
.catch(console.error)