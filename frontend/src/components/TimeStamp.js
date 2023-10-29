import React, { useEffect, useState } from "react";


const TimeStamp = ({time}) => {
    const [width, setWidth] = useState(100)

    useEffect(() => {
        let atomicTime =(1000/(time - 1000)) * 100;
        const timer = setInterval(() => {
            setWidth(width - atomicTime);
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