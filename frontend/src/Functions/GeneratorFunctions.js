import { pokemonStats } from '../data/pokemonStats';
import UserApi from '../services/api'


// helper function to generate a random number within a range
const generateRandomInRange = (min,max) => Math.random() * (max - min) + min;

// Generate a random level between min and max
export const generateRandomLevel = (min, max) => {
    return Math.floor(generateRandomInRange(min, max))
}

// Generate random stat modifiers
export const generateRandomStatsModifiers = () => {
    return{
        attackCon: generateRandomInRange(0.5,1.5),
        hpCon: generateRandomInRange(0.5, 1.5),
        speedCon: generateRandomInRange(0.5, 1.5),
        energyCon: generateRandomInRange(0.5, 1.5),
    };
}

// Calculate stats for a Pokemon based on its level
export const calculateStats = (pokemon, level) =>{
    const { attackCon, hpCon, speedCon, energyCon } = generateRandomStatsModifiers();
    return{
        dmg: Math.floor(pokemon.damage * attackCon * (1 + level * 0.05)),
        hp: Math.floor(pokemon.hp * hpCon * (1 + level * 0.05)),
        speed: Math.floor(pokemon.speed * speedCon * (1 + level * 0.05)),
        energy: Math.floor(pokemon.energy * energyCon + (level * 2)),
        abilitiesIndex: Math.floor(Math.random() * 2),  // To be updated
    };
}

//Generate skills for a Pokemon based on its name and level
export const generateSkills = (pokemonName, pokemonLevel) => {
    const pokemon = pokemonStats.find(e => e.name.toLocaleLowerCase() === pokemonName.toLocaleLowerCase())
    const currentStats = calculateStats(pokemon, pokemonLevel)

    return{
        name:pokemonName,
        level: pokemonLevel,
        hp: currentStats.hp,
        damage: currentStats.dmg,
        speed: currentStats.speed,
        energy: currentStats.energy,
        abilities: "none",  // To be updated
    }
}

export const learnNewAttack = async (attacks, pokemonId) => {

    for (let attack of attacks){
        const attackData = {
            pokemon: pokemonId,
            attack
        };
        try {
            await UserApi.learnAttack(attackData)
        } catch (error) {
            console.error('Error while adding attack to Pokemon', error);
        }
    }
}

export const catchPokemon = async (pokemon, username, mySix) => { 
        var data= {
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
            trainer: username
        };
    try {       
        const response = await UserApi.obtainPokemon(data);
        const lastAddedPokemon = response.data.newPokemonId;
        await learnNewAttack(pokemon.attacks, lastAddedPokemon)

        if (mySix.length < 6){
            const nextData = {
                pokemon: lastAddedPokemon,
                username,
            };
            await UserApi.addToSix(nextData)
            console.log('Pokemon successfully added');
        } else {
            console.log('You already have 6 Pokemons, so this one will be sent to the box');
        }
    } catch (error) {
        console.error('Error while catching Pokemon:', error);
    }  
}
