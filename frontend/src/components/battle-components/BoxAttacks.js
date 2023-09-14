import React from "react";


const BoxAttacks = (props) => {
    console.log("props má tyto informace: ", props);
    const pokemon = props.id.pokemon
    const attacks = pokemon.attacks
    //attacks.map( attack =>{ const { attackName, type, reload, speed, dmg } = attack})
    console.log("útoky jsou: ", attacks);

    //attack function
    const handlerAttack = () =>{
        console.log("attack!");
    }
    const handlerAvoid = () =>{
        console.log("void!");
    }
    const handlerSwitch = () =>{
        console.log("switch!");
    }

    return(
        <ul className="box__battle-controll">
            {
                attacks.map((attack, index) => {
                    return(
                        <li key={index} className="attacks" onClick={handlerAttack}>{attack.name ? attack.name : "" }</li>
                    )
                })
            }
            <li className="avoid" onClick={handlerAvoid}>avoid!</li>
            <li className="switch" onClick={handlerSwitch}>switch</li>
            
        </ul>
    )
}


export default BoxAttacks