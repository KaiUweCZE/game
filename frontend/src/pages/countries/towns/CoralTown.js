import React from 'react';
import Wallpaper from '../../../components/Wallpaper';
import { useToBattle } from '../../../Functions/BattleFunctions';
import { townsData, town2part } from '../../../data/DataCountries/DataTowns';
import '../../../styles/countryStyle.css';

const CoralTown = () => {
    const toBattle = useToBattle("cave")
    const bgc = townsData.find(town => town.name === "Coral Town").images

    return(
        <>
            <img src={bgc} className='town' useMap="#image-map" />

            <map name="image-map">
                <area className="image-map" target="" alt="" title="" href="" coords="935,157,953,143,985,128,1006,114,1031,115,1065,120,1100,128,1119,133,1096,144,1095,166,1101,191,1089,198,1042,192,1016,195,984,208,967,213,965,189,958,164,942,161,977,206" shape="poly" />
                <area className="image-map" target="" alt="" title="" href="" coords="1205,476,1212,542,1211,568,1259,568,1259,515,1252,471" shape="poly" />
            </map>
        </>   
    )
}

export default CoralTown