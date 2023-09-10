import express from 'express';
import { test_message, addPokemon, campaignProgress, checkCampaign, getYourPokemons, addImageProfile, getUser, addToSix, getSix, removeFromSix} from '../controllers/user.controller.js';

const router = express.Router();

//test
router.get("/1", test_message)

//used in the game
//post methods
router.post("/imageProfile", addImageProfile)
router.post("/addPokemon", addPokemon)
router.post("/nextCampaign", campaignProgress)
router.post("/addToSix", addToSix)
//get methods
router.get("/checkCampaign", checkCampaign)
router.get("/user", getUser)
router.get("/myPokemons", getYourPokemons)
router.get("/mySix", getSix)
//remove
router.delete("/removeFromSix", removeFromSix)
export default router