import React from "react";
import { caveBg } from "../../data/importedImages";
import Wallpaper from "../../components/Wallpaper";
import BoxAction from "../../components/BoxAction";
import { useToBattle } from "../../Functions/Functions";



const Cave = () => {
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


export default Cave