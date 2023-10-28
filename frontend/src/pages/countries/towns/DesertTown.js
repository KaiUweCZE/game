import React from 'react'
import Wallpaper from '../../../components/Wallpaper'
import { desertTownImg } from "../../../data/importedImages";
import BoxAction from "../../../components/BoxAction";

const DesertTown = () => {

    return(
        <>
        <Wallpaper background={desertTownImg}>
            {/* {<BoxAction />} */}
        </Wallpaper>
        </>
    )
}

export default DesertTown