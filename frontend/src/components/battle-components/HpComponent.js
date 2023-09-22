import React, { useEffect, useState } from "react";


const HpComponent = ( { who, hp, damage, itIsOver } ) => {
    const [actualHp, setActualHp] = useState(hp)

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
        <div className="background__bar">
            <div className="your-hp" style={{ width: `${(actualHp/hp)*100}%` }}>
            </div>
        </div>
        </>
    )
}

export default HpComponent