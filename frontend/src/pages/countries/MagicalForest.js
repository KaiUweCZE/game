import React from 'react'
import Wallpaper from '../../components/Wallpaper'
import { magicalForestBg } from '../../data/importedImages'
import BoxAction from '../../components/BoxAction'
import { useToBattle } from "../../Functions/BattleFunctions";



const MagicalForest = () => {
    // It sends message about where it was redirected from.
    const toBattle = useToBattle("magicalforest")

    return(
        <>
        <Wallpaper background={magicalForestBg}>
            <BoxAction
                title="NĚCO JE VE VZDUCHU"
                links={[{to: "/", name:"MY ROOM"}, {to:"/mountains", name:"DO HOR!"}, {to: toBattle, name:"FIGHT!"}, {to:"/crossroad", name:"CROSSROAD"} ]}
            />
        </Wallpaper>
        </>
    )
}

export default MagicalForest