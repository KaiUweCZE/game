import React from "react";
import Wallpaper from "./Wallpaper";
import roadImg from '../styles/images/countries/crossroad.webp'
import TimeStamp from "./TimeStamp";


const OnRoad = () => {

    return(
        <Wallpaper background={roadImg}>
            <TimeStamp />
        </Wallpaper>
    )
}


export default OnRoad