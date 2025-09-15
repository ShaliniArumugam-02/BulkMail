// const express = require("express");
// const { signup,signin, google } = require("../controller/auth.controllers");
// const router = express.Router();
import express from "express"
import { signup,signin, google } from '../controller/auth.controllers.js';

const router = express.Router();


router.post('/signup',signup)
router.post('/signin',signin)
router.post('/google',google)


// module.exports=router;
export default router;
