import express from 'express';
import { login, regist, logout} from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/register", regist )
router.post("/login", login)
router.get("/logout", logout)


export default router