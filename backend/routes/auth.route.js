import express from 'express';
import { login, regist } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/register", regist )
router.post("/login", login)


export default router