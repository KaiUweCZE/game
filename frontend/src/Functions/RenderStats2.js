import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../redux/user/userSlice';
import UserApi from "../services/api"
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { pokemonsData } from '../data/pokemons';
import { pokemonStats } from '../data/pokemonStats';


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
        level: pokemonLevel,
        hp: currentStats.hp,
        damage: currentStats.dmg,
        speed: currentStats.speed,
        energy: currentStats.energy,
        abilities: "none",  // To be updated
    }
}