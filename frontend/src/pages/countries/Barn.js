import React from "react";
import {barn} from '../../data/importedImages'
import Wallpaper from '../../components/Wallpaper'
import BoxAction from "../../components/BoxAction";
import { useToBattle } from "../../Functions/BattleFunctions";

const Barn = () => {
    const toBattle = useToBattle("barn")
    return(
        <Wallpaper background={barn}>
            <BoxAction
                title="LOVELY"
                links={[{to:"/magicalforest", name:"TAJUPLNÝ LES"},{to: toBattle, name:"FIGHT!"},{to:"/crossroad", name:"CROSSROAD"}]}
            />
        </Wallpaper>
    )
}


export default Barn
