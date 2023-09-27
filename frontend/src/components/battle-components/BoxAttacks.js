import React, { useEffect, useState } from "react";
import { handlerAttack, handlerSwitch, handlerAvoid } from "./battleBoxFunctions";


const BoxAttacks = (props) => {
    const [ currentAttack, setCurrentAttack ] = useState({})
    const [clickCounter, setClickCounter] = useState(0);
    const [clickable, setClickable ] = useState(true)
    const [reload, setReload] = useState(0);
    const [duration, setDuration] = useState(0)
    const [displayReload, setDisplayReload] = useState(0);
    const pokemon = props.id.pokemon
    const battle = props.startBattle
    const attacks = pokemon.attacks
  
    // attack reload
    useEffect(() => {
        const dmg = currentAttack.dmg;
        // only because of editing * 3 
        const reload = currentAttack.reload;
        const spentEnergy = currentAttack.energyCost;
        console.log("TOHLE SE PROVEDLO!!",currentAttack.energyCost);
        setReload(reload);
        props.afterAttack(dmg, spentEnergy);
    }, [currentAttack, clickCounter])

    useEffect(() => {
    let timer;
    let start = Date.now();

    const updateReload = () => {
        const timout = (Date.now() - start) / 1000;
        const remaining = Math.max(0, reload - timout);

       setDuration(reload) 
        setDisplayReload(remaining);
        //console.log("animation duration is: ", remaining);
        if (remaining > 0) {
            timer = setTimeout(updateReload, 10);
        } else if (!battle) {
            setClickable(false)
        } else {
            setClickable(true)
        }
    };

    if (reload > 0) {
        setClickable(false)
        updateReload();
    }
    
    return () => clearTimeout(timer), setCurrentAttack({});
    }, [reload, clickCounter]);

    const handleAttackClick = (attack) => {
        const handledAttack = handlerAttack(attack);
        setCurrentAttack(handledAttack);
        setClickCounter(prevCount => prevCount + 1);
    };

    return(
        <ul className="box__battle-controll">
            {
                attacks.map((attack, index) => {
                    return(
                        <li key={index} className="attacks" onClick={clickable ? () => handleAttackClick(attack) : null}>{attack.name ? attack.name : "" }</li>
                    )
                })
            }
            <li className="avoid" onClick={handlerAvoid}>avoid!</li>
            <li className="switch" onClick={handlerSwitch}>switch</li>
            <li className={`reloader ${clickable ? "" : "deactive"}`} style={clickable ? {} : { "--duration": `${duration}s`}}>{displayReload.toFixed(2)}</li>
        </ul>
        
    )
}


export default BoxAttacks