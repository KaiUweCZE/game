import React, { useEffect, useState } from "react";
import { handlerAttack, handlerSwitch, handlerAvoid, reloadAttack } from "./battleBoxFunctions";


const BoxAttacks = (props) => {
    const [ currentAttack, setCurrentAttack ] = useState({})
    const [clickCounter, setClickCounter] = useState(0);
    const [reload, setReload] = useState(0);
    const [displayReload, setDisplayReload] = useState(0);
    const pokemon = props.id.pokemon
    const attacks = pokemon.attacks
  
    // attack reload
   
    useEffect(() => {
        const dmg = currentAttack.dmg;
        const reload = currentAttack.reload;
        setReload(reload);
        props.updateDmg(dmg);
        setClickCounter(0)
    }, [currentAttack, clickCounter])



    useEffect(() => {
    let timer;
    let start = Date.now();
    

    const updateReload = () => {
        const timout = (Date.now() - start) / 1000;
        const remaining = Math.max(0, reload - timout);
        
        setDisplayReload(remaining);
        if (remaining > 0) {
            timer = setTimeout(updateReload, 10);
        }
    };

    if (reload > 0) {
        updateReload();
    }
    
    return () => clearTimeout(timer), setCurrentAttack({});
    }, [reload, clickCounter]);

    const handleAttackClick = (attack) => {
        const handledAttack = handlerAttack(attack);
        setCurrentAttack(handledAttack);
        //setReload(handledAttack.reload);
        setClickCounter(prevCount => prevCount + 1);
        //props.updateDmg(handledAttack.dmg);
    };

    return(
        <ul className="box__battle-controll">
            {
                attacks.map((attack, index) => {
                    return(
                        <li key={index} className="attacks" onClick={() => handleAttackClick(attack)}>{attack.name ? attack.name : "" }</li>
                    )
                })
            }
            <li className="avoid" onClick={handlerAvoid}>avoid!</li>
            <li className="switch" onClick={handlerSwitch}>switch</li>
            <h2>{displayReload.toFixed(2)}</h2>
        </ul>
        
    )
}


export default BoxAttacks