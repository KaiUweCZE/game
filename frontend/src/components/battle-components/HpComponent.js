import React, { useEffect, useState } from "react";


const HpComponent = ( props ) => {
    const [actualHp, setActualHp] = useState(100)
    /*funcs: how many hp does a pokemon have? */
    // attack and hp will be parameters
    const damage = props.damage
    console.log("tohle jde &&&@&&: ", damage);
    
    useEffect(() => {
        if (damage !== undefined && damage !== null) {
            const newHp = actualHp - damage;
            if (newHp < 0) {
                setActualHp(0);
            } else {
                setActualHp(newHp);
            }
        }
        console.log(actualHp);
    }, [damage]);
    


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