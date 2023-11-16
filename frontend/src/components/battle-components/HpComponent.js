import React, { useEffect, useState } from "react";

// This component visualizes hp staus for user and enemy pokemons
const HpComponent = ( { who="", maxHp, currentHp, damage=0, itIsOver="" } ) => {
    const [actualHp, setActualHp] = useState(currentHp)

    useEffect(() => {
        if (damage !== undefined && damage !== null) {
            const newHp = actualHp - damage;
            if (newHp <= 0) {
                setActualHp(0);
                itIsOver(who);
            } else {
                setActualHp(newHp);
            }
        }
        
    }, [damage]);
    


    return (
        <div className="background__bar">
            <div className="your-hp" style={{ width: `${(actualHp/maxHp)*100}%` }}></div>
        </div>
    )
}

export default HpComponent