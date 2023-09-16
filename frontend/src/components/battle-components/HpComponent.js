import React, { useEffect, useState } from "react";


const HpComponent = ( { hp, damage } ) => {
    const [actualHp, setActualHp] = useState(200)

    
    /*useEffect(() => {
        //hp setting is ilustrative
        setActualHp(hp);
    }, [hp]);*/

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
            <div className="your-hp" style={{ width: `${(actualHp/200)*100}%` }}>
            </div>
        </div>
        </>
    )
}

export default HpComponent