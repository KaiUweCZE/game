import React, { useEffect, useState } from "react";


const HpComponent = ( props ) => {
    const [actualHp, setActualHp] = useState(100)
    /*funcs: how many hp does a pokemon have? */
    // attack and hp will be parameters
    const damage = props.damage

    console.log("tohle se dostane do HpComponenty: ", damage);
    
    useEffect(() => {
        const newHp = actualHp - damage
        setActualHp(newHp)
    },[damage])
    


    return (
        <>
        <div className="hp">
            <div className="your-hp" style={{ width: `${actualHp}%` }}>
            </div>
        </div>
        </>
    )
}

export default HpComponent