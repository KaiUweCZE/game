import React from "react";
import { BoxBadges } from "../light-component/LightComponent";
import { Link } from 'react-router-dom'

const UserInfoBox = ({name, badges, location, abilities, statistics, children}) => {
    

    return(
        <>
         <div className="box__user-info">
            <div className="box__user-headline">
                <h2>About</h2>
                <hr />
            </div>
            <div className="part">
                <article>
                    <h2>Basic</h2>
                    <ul>
                        <li>Name: {name}</li>
                        <li>Location: {location}</li>
                        <li>Abilities: {abilities}</li>
                        <li><Link to="/npc">My Contacts</Link></li>
                        <li><Link to="/map">Map</Link></li>
                    </ul>
                </article>
                {
                    badges ? <BoxBadges name={name}/> : ""
                }
                
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