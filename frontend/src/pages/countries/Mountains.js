import React from 'react'
import Wallpaper from '../../components/Wallpaper'
import { mountains } from '../../data/importedImages'
import BoxAction from '../../components/BoxAction'
import { useToBattle } from "../../Functions/BattleFunctions";



const Mountains = () => {
    // It sends message about where it was redirected from.
    const toBattle = useToBattle("mountains")

    return(
        <>
        <Wallpaper background={mountains}>
            <BoxAction
                title="DOLŮ TO BUDE JEDNA RADOST!"
                links={[{to: "/", name:"MY ROOM"}, {to:"/", name:"PURPON TOWN!"}, {to: toBattle, name:"FIGHT!"}, {to:"/crossroad", name:"CROSSROAD"} ]}
            />
        </Wallpaper>
        </>
    )
}

export default Mountains