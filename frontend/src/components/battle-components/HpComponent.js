import React, { useState } from "react";


const HpComponent = () => {
    const [actualHp, setActualHp] = useState(100)
    /*funcs: how many hp does a pokemon have? */
    // attack and hp will be parameters
    const hp = 100
    const attack = 10
    

    //sketch of a attack func
    const handleAttack = () => {
        console.log(attack);
        const damage = actualHp - attack
        setActualHp(damage)
    }


    return (
        <>
        <div className="hp">
            <div className="your-hp" style={{ width: `${actualHp}%` }}>
            </div>
        </div>
        <button onClick={handleAttack}>attack</button>
        </>
    )
}

export default HpComponent