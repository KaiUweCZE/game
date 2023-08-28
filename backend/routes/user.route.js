import express from 'express';
import { test_message } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/1", test_message)

export default router