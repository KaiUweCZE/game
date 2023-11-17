import { pokemonsData } from '../data/pokemons';
import UserApi from '../services/api'

// battleground, pokemon
export const choosePokemon = (pokemon, setActivePokemon, setStartBattle) => {
    console.log("choosePokemon called with:", pokemon);
    const pokemonData = pokemonsData.find(e => e.name === pokemon.name);
    console.log("Found pokemon data:", pokemonData);
    const pokemonImg = pokemonData.img;
    const onePokemon = { pokemon, pokemonImg };
    console.log("Setting active pokemon:", onePokemon);
    setActivePokemon(onePokemon);
    console.log("Starting battle");
    setStartBattle(true);
}


export const updateHp = (hp, dmg, id) => {
    const newHp = hp - dmg;
    const updatedHp = newHp > 0 ? newHp : 0
    let data = {
        currentHp: updatedHp,
    }

    return UserApi.updateStatus(id, data)
            .then(res => {
                if(res.status === 200){
                    console.log("New Hp: ", updatedHp);
                    return updatedHp;
                } else{
                    throw new Error("failed to update status");
                }
            })
            .catch(err => {
                console.error("status update error", err);
                throw err
            })
}

export const updateExp = (currentExp, newExp, id) => {
    const exp = currentExp + newExp
    
    let data = {
        currentExp: exp,
    }

    return UserApi.updateStatus(id, data)
            .then(res => {
                if(res.status === 200){
                    console.log("New Exp", exp);
                    return exp;
                } else {
                    throw new Error("failed to update status")
                }
            })
            .catch(err => {
                console.error("exp update error: ", err);
            })
}

export const updateEnergy = (currentEnergy, energyCost, id) => {
    const energy = currentEnergy - energyCost
    const updatedEnergy = energy > 0 ? energy : 0

    let data = {
        currentEnergy: energy,
    }

    return UserApi.updateStatus(id, data)
            .then(res => {
                if(res.status === 200){
                    console.log("Stálo to toliko energie: ", energyCost);
                    console.log("New energy is: ", updatedEnergy)
                    return updatedEnergy
                } else {
                    throw new Error("failed to update energy")
                }
            })
            .catch(err => {
                console.error("energy update error", err);
            })
}

export const avoidAttack = () => {

}