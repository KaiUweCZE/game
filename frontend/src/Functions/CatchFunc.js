import { useDispatch } from 'react-redux';
import UserApi from '../services/api'
import { learnNewAttack } from './GeneratorFunctions'
import { useState } from 'react';
import { updateMySix } from '../redux/user/userSlice';


//Pokemon will be add to six
export const addPokemonToSix = (username) => (pokemon) => {
    /*if (mySix.length > 6) {
        console.log('You already have 6 pokemons');
        return;
    }*/
    let data = {
        username: username,
        pokemon: pokemon
    }
    UserApi.addToSix(data)
    .then((res) => console.log(res.data))
    .catch((err) => console.error("You already have 6 pokemon", err))    
}

export const catchPokemon = async (pokemon, user) => { 
    let data= {
        pokemon: {
            name: pokemon.name,
            skills: {
                level: pokemon.level,
                abilities: pokemon.abilities,
                hp: pokemon.hp,
                damage: pokemon.damage,
                speed: pokemon.speed,
                energy: pokemon.energy

            }
        },
        trainer: user.username
    };
    
try {       
    const response = await UserApi.obtainPokemon(data);
    const lastAddedPokemon = response.data.newPokemonId;
    await learnNewAttack(pokemon.attacks, lastAddedPokemon)
    /*if (user.mySix && user.mySix.length < 6){
        addPokemonToSix(user.username)(lastAddedPokemon)
        console.log('Pokemon successfully added');
    } else {
        console.log('You already have 6 Pokemons, so this one will be sent to the box');
    }*/
} catch (error) {
    console.error('Error while catching Pokemon:', error);
}  
}
