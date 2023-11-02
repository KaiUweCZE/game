import React, { useEffect, useState } from "react";

const EndOfBattleWallpaper = (props) => {
    const [message, setMessage] = useState()
    const [bgc, setBgc] = useState()

    useEffect(() => {
        if (props.who === "user") {
            setMessage("Na mašírku!")
            setBgc("#bd3c3c")
        } else {
            setMessage("Panečku!")
            setBgc("#2caa6499")
        }
    }, [])


    return (
        <div className="GameOver" style={{ backgroundColor: `${bgc}` }}>
            <h2>{message}</h2>
            <div className="box">
                <h3>Do you want to continue?</h3>
                <button onClick={props.incrementPage}>Keep going!</button>
                <button><a href="/">It is enough!</a></button>
            </div>
        </div>
    )
}

export default EndOfBattleWallpaper