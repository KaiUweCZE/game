import React, { useState, useEffect } from "react";


// This component visualizes energy staus for user pokemon
const EnergyComponent = ({ energy, costEnergy }) => {
    const [actualEnergy, setActualEnergy] = useState(energy)
    useEffect(() => {
        if (costEnergy !== undefined && costEnergy !== null) {
            const newEnergy = actualEnergy - costEnergy;
            if (newEnergy < 0) {
                console.log("ÚTOK NELZE  PROVÉST");
            } else {
                setActualEnergy(newEnergy);
            }
        }

    }, [energy, costEnergy]);

    console.log("tohle že je energY?  ", energy);
    return (
        
        <div className="background__bar">
            <div className="your-energy" style={{ width: `${actualEnergy * (100/energy)}%` }}></div>
        </div>
    )
}

export default EnergyComponent