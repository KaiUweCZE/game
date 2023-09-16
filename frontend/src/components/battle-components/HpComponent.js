import React, { useEffect, useState } from "react";


const HpComponent = ( { hp, damage } ) => {
    const [actualHp, setActualHp] = useState(hp)

    console.log("tohle je props: ", hp, damage);
    
    useEffect(() => {
        //hp setting is ilustrative
        setActualHp(hp*10);
    }, [hp]);

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
            <div className="your-hp" style={{ width: `${actualHp/(hp*0.1)}%` }}>
            </div>
        </div>
        </>
    )
}

export default HpComponent