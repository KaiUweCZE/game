import express from 'express';
import { postAttack } from '../controllers/attack.controller.js'

const router = express.Router()

router.post('/addAttack', postAttack)

export default router