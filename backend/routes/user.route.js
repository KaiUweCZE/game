import express from 'express';
import { test_message, addPokemon, campaignProgress, checkCampaign, getYourPokemons, addImageProfile, getUser, addToSix, getSix, removeFromSix, pokemonsInBox, setLocation, addItem, useItem, getItems, getContacts, addContact} from '../controllers/user.controller.js';
import { addBadge } from '../controllers/item.controller.js';

const router = express.Router();

//test
router.get("/1", test_message)

//used in the game
//post methods
router.post("/imageProfile", addImageProfile)
router.post("/addPokemon", addPokemon)
router.post("/nextCampaign", campaignProgress)
router.post("/addToSix", addToSix)
router.post("/addBadge", addBadge)
router.post("/setLocation", setLocation)
router.post("/addItem", addItem)
router.post("/addContact", addContact)
//get methods
router.get("/checkCampaign", checkCampaign)
router.get("/user", getUser)
router.get("/myPokemons", getYourPokemons)
router.get("/mySix", getSix)
router.get("/pokemonsInBox", pokemonsInBox)
router.get("/items", getItems)
router.get("/contacts", getContacts)
//remove
router.delete("/removeFromSix", removeFromSix)
//patch methods
router.patch("/useItem", useItem)
export default router