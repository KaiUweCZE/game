import React, { useEffect, useState } from "react";

const EndOfBattleWallpaper = (props) => {
    const [message, setMessage ] = useState()
    const [bgc, setBgc] = useState()

    useEffect(() => {
        if (props.who === "user"){
            setMessage("Na mašírku!")
            setBgc("#bd3c3c")
        } else {
            setMessage("Panečku!")
            setBgc("#2caa6499")
        }
    }, [])

    const nextRound = (num) => {
        return props.round + num
    }
    return(
        <div className="GameOver" style={{backgroundColor: `${bgc}`}}>
            <h2>{message}</h2>
            <div className="box__choices">
                <h3>Do you want to continue?</h3>
                <div>
                    <button onClick={nextRound(+1)}>Keep going!</button>
                    <button onClick={nextRound(-1)}>It is enough!</button>
                </div>
                
            </div>
        </div>
    )
}

export default EndOfBattleWallpaper