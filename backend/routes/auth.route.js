import express from 'express';
import { regist } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/register", regist )


export default router