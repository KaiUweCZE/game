import React from "react";
import { BoxBadges } from "../light-component/LightComponent";


const UserInfoBox = ({name, location, abilities, statistics, children}) => {
    

    return(
        <>
         <div className="box__user-info">
            <div className="box__user-headline">
                <h2>About</h2>
                <hr />
            </div>
            <div className="part">
                <article>
                    <h2>Batsic</h2>
                    <ul>
                        <li>Name: {name}</li>
                        <li>Location: {location}</li>
                        <li>Abilities: {abilities}</li>
                    </ul>
                </article>
                    
                <BoxBadges name={name}/>
            </div>
            <div className="part">
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