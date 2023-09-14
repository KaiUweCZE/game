import express from 'express';
import { attackToPokemon, postAttack } from '../controllers/attack.controller.js'

const router = express.Router()

router.post('/createAttack', postAttack)
router.post('/addAttack', attackToPokemon)

export default router