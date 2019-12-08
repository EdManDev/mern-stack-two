"use strict";
const nodemailer = require("nodemailer");
require('dotenv').config();

// async..await is not allowed in global scope, must use a wrapper
async function main() {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Seth Spivey" <seth@fourcolumns.net>', // sender address
    to: "sethgspivey@gmail.com", // list of receivers
    subject: "Hello from NODE.JS", // Subject line
    text: "Hello world?", // plain text body
    html: "<h1>Hello Header</h1><b>HELLO HERE</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);