import React, {useState} from "react";

const EnergyComponent = ({energy}) => {
    const {actualEnergy, setActualEnergy} = useState(energy)

    return(
        <>
        <h2>{energy}</h2>
        <div className="background__bar">
            <div className="your-energy" style={{ width: `${({actualEnergy}/energy)*100}%` }}>
            </div>
        </div>
        </>
    )
}

export default EnergyComponent