import React from 'react'
import Wallpaper from '../../../components/Wallpaper'
import { nomadicCampImg } from "../../../data/importedImages";
import BoxAction from "../../../components/BoxAction";


const NomadCamp = () => {

    return(
        <>
        <Wallpaper background={nomadicCampImg}>
            {/* {<BoxAction />} */}
        </Wallpaper>

        </>
    )
}

export default NomadCamp