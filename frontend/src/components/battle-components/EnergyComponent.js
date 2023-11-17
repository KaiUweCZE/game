import React, { useState, useEffect } from "react";


// This component visualizes energy staus for user pokemon
const EnergyComponent = ({ currentEnergy, maxEnergy, costEnergy=0, setWithoutEnergy}) => {
    const [actualEnergy, setActualEnergy] = useState(currentEnergy)
    useEffect(() => {
        if (costEnergy !== undefined && costEnergy !== null) {
            const newEnergy = actualEnergy - costEnergy;
            if (newEnergy < 0) {
                setActualEnergy(0)
                setWithoutEnergy(true)
                console.log("ÚTOK NELZE PROVÉST");
            } else {
                setActualEnergy(newEnergy);
            }
        }

    }, [maxEnergy, costEnergy]);

    console.log("tohle že je energY?  ", maxEnergy);
    return (
        
        <div className="background__bar">
            <div className="your-energy" style={{ width: `${actualEnergy * (100/maxEnergy)}%` }}></div>
        </div>
    )
}

export default EnergyComponent