// const express = require("express")
// const cors = require("cors")
// const connectDB = require("./config/db")
// const authRouter = require("./routes/auth.route")
// const mailRouter = require("./routes/mail.route")
// require("dotenv").config()
import express from "express"
import cors from "cors"
import connectDB from "./src/config/db.js"
import authRouter from "./src/routes/auth.route.js"
import mailRouter from "./src/routes/mail.route.js"
import dotenv from "dotenv";
import path from "path";
import cookiesParser from "cookie-parser";
dotenv.config({ path: path.resolve("D:/Sha/FullStack Projects/BULK_MAIL/server/.env") });

// console.log("MONGO_URI:", process.env.MONGO_URI);



const app = express() 
const PORT = process.env.PORT || 5000

// middleware

    app.use(cors({
        origin:"http://localhost:5178",
        credentials:true
    }))
const __dirname = path.resolve();

app.use(express.json())
app.use(cookiesParser());

// server
connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("server running in port:", PORT)
})
})

// routes

app.use('/api/auth',authRouter)
app.use('/api/sendmail',mailRouter)

app.use(express.static(path.join(__dirname, 'client/dist')));
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'client','dist', 'index.html'));
});


// middleware
app.use((err,req,res,next)=>{
const statusCode = err.statusCode || 500;
const message = err.message || 'Internal server error'
return res.status(statusCode).json( {
    sucess:false,
    statusCode,
    message,
})
})