import React from "react";
import Wallpaper from "./Wallpaper";
import roadImg from '../styles/images/countries/crossroad.webp'
import TimeStamp from "./TimeStamp";


const OnRoad = ({ travelTime }) => {

    return(
        <Wallpaper background={roadImg}>
            <TimeStamp time={travelTime}/>
        </Wallpaper>
    )
}


export default OnRoad