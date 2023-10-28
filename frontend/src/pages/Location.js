import React, { useState } from "react";
import { countryData } from "../data/DataCountries/countryData";
import Wallpaper from "../components/Wallpaper";
import BoxAction from "../components/BoxAction";
import { useToBattle } from "../Functions/BattleFunctions";
import { useSelector } from "react-redux";

const Location = () => {
    const {currentUser} = useSelector((state) => state.user)

    const toBattle = useToBattle("cave")
    return(
        <Wallpaper background={caveBg}>
            <BoxAction 
                title="TOHLE NENÍ PRO BOJÁCNÉ!!!"
                links={[{to:"/magicalforest", name:"TAJUPLNÝ LES"},{to: toBattle, name:"FIGHT!"},{to:"/crossroad", name:"CROSSROAD"}]}
            />
        </Wallpaper>
    )
}


export default Location
