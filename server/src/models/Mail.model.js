// const mongoose = require('mongoose');
import e from "express";
import mongoose from "mongoose"

// create schema
const mailSchema = new mongoose.Schema ( 
    {
        subject: {
            type:String,
            required:true
        },
     body:{
            type:String,
            required:true
        },
    
    },{timestamps:true})  

    // create model

   const modelMail= mongoose.model('modelMail',mailSchema);

//    module.exports= modelMail;
export default modelMail;