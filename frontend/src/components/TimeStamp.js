import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const TimeStamp = () => {
    const { travelTime, travelEndTime } = useSelector((state) => state.user);
    const currentTime = new Date().getTime();
    const newRemainingTime = travelEndTime - currentTime;
    const [width, setWidth] = useState((newRemainingTime / travelTime) * 100)
    
    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = new Date().getTime();
            const newRemainingTime = travelEndTime - currentTime;
            const newWidth = (newRemainingTime / travelTime) * 100;
            setWidth(newWidth);
        }, 1000);
        return () => clearInterval(timer);
    });

    return(
        <div className="box__timestamp">
            <div>
                <span>On the road</span>
            </div>
            <div className="box__item" style={{ width: `${width}%` }}></div>
        </div>
    )
}


export default TimeStamp