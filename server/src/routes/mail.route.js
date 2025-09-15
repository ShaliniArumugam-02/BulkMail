// const express= require('express');
// const sendmail = require('../controller/mail.controller');
import express from "express"
import { sendmail } from '../controller/mail.controller.js';

const router = express.Router();

router.post('/',sendmail)

// module.exports= router;
export default router;