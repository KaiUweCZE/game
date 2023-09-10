import React from "react";


const GetMob = (mobs) => {
    const randomNumber = (min, max) =>{
        const level = Math.floor(Math.random() * (max-min) + min)
        const attackCon = Math.floor(Math.random() * (1.5 - 0.5) + 0.5)
        const hpCon = Math.floor(Math.random() * (1.5 - 0.5) + 0.5)
        const attack = 10 + (attackCon * level)
        const hp = 10 + (hpCon * level)
        const i = Math.floor(Math.random() * 2)
        return {level, attack, hp, i}
    }

    const generateEnemy = (name, minLevel, maxLevel) => {
        const values = randomNumber(minLevel, maxLevel)
        return{
            name,
            level: values.level,
            attack: values.attack,
            hp: values.hp,
            abilities: values.i === 1 ? "some1": "some2"
        };
    };

    //generujeme náhodného pokémona ze zaslaných
    const enemy = generateEnemy(mobs[Math.floor(Math.random() * mobs.length)], 10, 20)
    return enemy

}


export default GetMob