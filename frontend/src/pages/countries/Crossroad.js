import React from "react";
import { crossroadBg } from "../../data/importedImages";
import Wallpaper from "../../components/Wallpaper";
import BoxAction from "../../components/BoxAction";

const Crossroad = () => {

    return(
        <>
        <Wallpaper background={crossroadBg}>
            <BoxAction
                title="VSTŘÍC DOBRODRUŽSTVÍ"
                links={[{to: "/", name:"MY ROOM"}, {to:"/magicalforest", name:"TAJUPLNÝ LES"}, {to:"/cave", name:"CAVE"} ]}
            />
        </Wallpaper>
        </>
    )
}

export default Crossroad