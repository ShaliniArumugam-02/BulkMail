// const nodemailer = require("nodemailer");
// require("dotenv").config();
// const modelMail = require('../models/Mail.model');
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import path from "path";
dotenv.config({ path: path.resolve("D:/Sha/FullStack Projects/BULK_MAIL/server/.env") });

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendmail = async (req, res) => {
  const { subject, body, emailList } = req.body;

  try {
    for (let i = 0; i < emailList.length; i++) {
   const info = await   transporter.sendMail(
        {
          from: process.env.EMAIL_USER,
          to: emailList[i],
          subject: subject,
          text: body,
          
        })
         console.log('sent:', info.response)
    }
       res.status(201).json({ message: "All emails sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in sending emails", error });
  }
};
// module.exports = sendmail;
export {sendmail};
