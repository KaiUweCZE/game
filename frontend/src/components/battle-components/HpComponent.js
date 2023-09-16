import React, { useEffect, useState } from "react";


const HpComponent = ( { who, hp, damage, itIsOver } ) => {
    const [actualHp, setActualHp] = useState(100)

    
    /*useEffect(() => {
        //hp setting is ilustrative
        setActualHp(hp);
    }, [hp]);*/

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
        <>
        <div className="hp">
            <div className="your-hp" style={{ width: `${(actualHp/100)*100}%` }}>
            </div>
        </div>
        </>
    )
}

export default HpComponent