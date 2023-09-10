import React, { useEffect } from 'react'
import Wallpaper from '../../components/Wallpaper'
import { magicalForestBg } from '../../data/charImages'
import BoxAction from '../../components/BoxAction'
import { useToBattle } from '../../components/Functions'



const MagicalForest = () => {
    const toBattle = useToBattle("magicalforest")
    //funkce při přesměrování na stránku záznam odku

    return(
        <>
        <Wallpaper background={magicalForestBg}>
            <BoxAction
                title="NĚCO JE VE VZDUCHU"
                links={[{to: "/", name:"MY ROOM"}, {to:"/", name:"DO HOR!"}, {to: toBattle, name:"FIGHT!"}, {to:"/crossroad", name:"CROSSROAD"} ]}
            />
        </Wallpaper>
        </>
    )
}

export default MagicalForest