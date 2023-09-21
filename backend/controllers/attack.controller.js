import { Attack, Pokemon } from "../models/user.model.js";


//get attack
export const getAttack = async (req, res, next) => {
    const {name} = req.query;
    
    try {
        const attack = await Attack.findOne({name})
        if (attack){
            return res.status(200).json({ attack})
        }else{
            return res.status(404).json({ message: 'false'})
        }
    } catch(error){
        next(error)
    }
} 


export const postAttack = async (req, res, next) => {
    const { name, type, reload, speed, dmg, sideEf, energyCost } = req.body;
    const newAttack = new Attack({ name, type, reload, speed, dmg, sideEf, energyCost })
    try {
        await newAttack.save()
        res.status(201).json({message: "attack was successfully created"})
    } catch(error){
        next(error)
    }
}


//add an attack to a specific pokemon

export const attackToPokemon = async (req, res, next) => {
    const attackName = req.body.attack;
    const pokemonId = req.body.pokemon;

    try {
        const pokemon = await Pokemon.findById(pokemonId)
        const attack = await Attack.findOne({name: attackName})

        if (!pokemon){
            console.log('pokemon not found: ', pokemon);
            return res.status(404).json({message: "ups, pokemon"})
        }

        if (!attack){
            console.log('there is no such attack');
            return res.status(404).json({message: "ups, attack"})
        }

        if (pokemon.attacks.some(attackId => attackId.equals(attack._id)) || pokemon.attacks.length >= 4){
            return res.status(400).json({message: "too many attacks or your pokemon already can this attack"})
        }

        pokemon.attacks.push(attack)
        await pokemon.save()
        res.status(200).json({message: "Pokemon has learned a new attack! :)"})
    } catch(error){
        next(error)
    }

}
