import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../redux/user/userSlice';
import UserApi from "../services/api"
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { pokemonsData } from '../data/pokemons';
import { pokemonStats } from '../data/pokemonStats';


export const renderLevel = (min, max) => {
    const level = Math.floor(Math.random() * (max-min) + min)
    return level
}

export const renderRandomConstant = () => {
    const attackCon = Math.random() * (1.5 - 0.5) + 0.5
    const hpCon = Math.random() * (1.5 - 0.5) + 0.5
    const speedCon = Math.random() * (1.5 - 0.5) + 0.5
    const energyCon = Math.random() * (1.5 - 0.5) + 0.5
    return { attackCon, hpCon, speedCon, energyCon}
}

export const randomStats = (pokemon, level) =>{
    const attackCon = Math.random() * (1.5 - 0.5) + 0.5
    const hpCon = Math.random() * (1.5 - 0.5) + 0.5
    const speedCon = Math.random() * (1.5 - 0.5) + 0.5
    const energyCon = Math.random() * (1.5 - 0.5) + 0.5
    const dmg = Math.floor(pokemon.damage * attackCon * (1 + level * 0.05))
    const hp = Math.floor(pokemon.hp * hpCon * (1 + level * 0.05))
    const speed = Math.floor(pokemon.speed * speedCon * (1 + level * 0.05))
    const energy = Math.floor(pokemon.energy * energyCon + (level * 2))
    //random for abilities, will be changed
    const i = Math.floor(Math.random() * 2)
    return {level, dmg, hp, speed, energy, i}
}

export const renderSkills = (pokemonName, pokemonLevel) => {
    const pokemon = pokemonStats.find(e => e.name.toLocaleLowerCase() === pokemonName.toLocaleLowerCase())
    const currentStats = randomStats(pokemon, pokemonLevel)

    const skills = {
        level: pokemonLevel,
        hp: currentStats.hp,
        damage: currentStats.dmg,
        speed: currentStats.speed,
        energy: currentStats.energy,
        abilities: "none",
    }
    console.log(skills);
    
    return skills;
}