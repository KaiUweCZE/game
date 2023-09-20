import React from "react";
import { BoxBadges } from "../light-component/LightComponent";


const UserInfoBox = ({name, location, abilities, statistics, children}) => {
    

    return(
        <>
         <div className="box__user-info">
                <div className="left">
                    <div className="about">
                        <ul>
                            <li>Name: {name}</li>
                            <li>Location: {location}</li>
                            <li>Abilities: {abilities}</li>
                        </ul>
                    </div>
                    
                    <BoxBadges name={name}/>
                </div>
                <div className="right">
                    <article>
                        <h2>Statistics</h2>
                        <p>{statistics}</p>
                    </article>
                </div>

                {children}
            </div>
        </>
    )
}


export default UserInfoBox