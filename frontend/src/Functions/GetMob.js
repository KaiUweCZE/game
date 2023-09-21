import React from "react";
import { pokemonsData } from "../data/pokemons";
import { pokemonStats } from "../data/pokemonStats";

const GetMob = (mobs) => {
    const enemyName = mobs[Math.floor(Math.random() * mobs.length)]
    const enemyStats = pokemonStats.find(enemy => enemy.name.toLowerCase() === enemyName.toLowerCase())

    const randomNumber = (min, max) =>{
        const level = Math.floor(Math.random() * (max-min) + min)
        const attackCon = Math.random() * (1.5 - 0.5) + 0.5
        const hpCon = Math.random() * (1.5 - 0.5) + 0.5
        const speedCon = Math.random() * (1.5 - 0.5) + 0.5
        const energyCon = Math.random() * (1.5 - 0.5) + 0.5
        const dmg = Math.floor(enemyStats.damage * attackCon * (1 + level * 0.05))
        const hp = Math.floor(enemyStats.hp * hpCon * (1 + level * 0.05))
        const speed = Math.floor(enemyStats.speed * speedCon * (1 + level * 0.05))
        const energy = Math.floor(enemyStats.energy * energyCon + (level * 2))
        //random for abilities, will be changed
        const i = Math.floor(Math.random() * 2)
        return {level, dmg, hp, speed, energy, i}
    }

    const generateEnemy = (name, minLevel, maxLevel) => {
        const values = randomNumber(minLevel, maxLevel)
        const img = pokemonsData.find(e => e.name.toLocaleLowerCase() === name.toLocaleLowerCase()).img;
        return{
            name,
            img,
            level: values.level,
            dmg: values.dmg,
            hp: values.hp,
            speed: values.speed,
            energy: values.energy,
            abilities: values.i === 1 ? "some1": "some2"
        };
    };

    //generujeme náhodného pokémona ze zaslaných
    const enemy = generateEnemy(enemyName, 10, 20)
    console.log("tohle je eneym: ", enemy);
    return enemy

}


export default GetMob