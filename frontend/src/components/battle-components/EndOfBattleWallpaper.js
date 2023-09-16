import React, { useEffect, useState } from "react";

const EndOfBattleWallpaper = ({who}) => {
    const [message, setMessage ] = useState()
    const [bgc, setBgc] = useState()

    useEffect(() => {
        if (who === "user"){
            setMessage("Na mašírku!")
            setBgc("#bd3c3c")
        } else {
            setMessage("Panečku!")
            setBgc("#2caa6499")
        }
    }, [])
    return(
        <div className="GameOver" style={{backgroundColor: `${bgc}`}}>
            <h2>{message}</h2>
        </div>
    )
}

export default EndOfBattleWallpaper