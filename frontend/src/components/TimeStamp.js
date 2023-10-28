import React, { useEffect, useState } from "react";


const TimeStamp = () => {
    const [width, setWidth] = useState(100)

    useEffect(() => {
        const timer = setInterval(() => {
            setWidth(width - 1);
        }, 1000);

        return () => clearInterval(timer);
    })

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