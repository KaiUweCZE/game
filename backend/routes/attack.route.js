import express from 'express';
import { attackToPokemon, getAttack, postAttack } from '../controllers/attack.controller.js'

const router = express.Router()


router.get('/aboutAttack', getAttack)
router.post('/createAttack', postAttack)
router.post('/addAttack', attackToPokemon)

export default router