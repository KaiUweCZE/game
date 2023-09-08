import express from 'express';
import { test_message, addPokemon, campaignProgress, checkCampaign, getYourPokemons, addImageProfile} from '../controllers/user.controller.js';

const router = express.Router();

//test
router.get("/1", test_message)

//used in the game
router.post("/imageProfile", addImageProfile)
router.post("/addPokemon", addPokemon)
router.post("/nextCampaign", campaignProgress)
router.get("/checkCampaign", checkCampaign)
router.get("/myPokemons", getYourPokemons)
export default router