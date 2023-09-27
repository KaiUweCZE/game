import React from "react";
import { Link } from "react-router-dom";
import { missionCompleted } from "../../data/importedImages.js";
import Wallpaper from "../Wallpaper.js";


const CompletedMission = () => {
    return(
            <Wallpaper background={missionCompleted}>
                <div className="mission-complete">
                    <h2>Don't look back, your goal is forward!</h2>
                    <Link to='/profile' className="button__classic">HURRAY!!!</Link>
                </div>
            </Wallpaper>
    )
}

export default CompletedMission