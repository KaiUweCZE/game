import React, { useEffect, useState } from "react";
import { handlerAttack, handlerSwitch, handlerAvoid } from "./battleBoxFunctions";


const BoxAttacks = (props) => {
    const [ dmg, setDmg ] = useState(0)
    const pokemon = props.id.pokemon
    const attacks = pokemon.attacks

    useEffect(() => {
        props.updateDmg(dmg);
      }, [dmg]);

    return(
        <ul className="box__battle-controll">
            {
                attacks.map((attack, index) => {
                    return(
                        <li key={index} className="attacks" onClick={() => setDmg(handlerAttack(attack))}>{attack.name ? attack.name : "" }</li>
                    )
                })
            }
            <li className="avoid" onClick={handlerAvoid}>avoid!</li>
            <li className="switch" onClick={handlerSwitch}>switch</li>
            <li>{dmg}</li>
        </ul>
    )
}


export default BoxAttacks