// const mongoose = require("mongoose")
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
console.log("MONGO_URI from env:", process.env.MONGO_URI);

const connectDB =  async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb conneced")
    } catch (error) {
        console.log("error in connecting mongodb", error)
    }
}

// module.exports = connectDB
export default connectDB;