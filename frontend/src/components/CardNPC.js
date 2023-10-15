import React from "react";
import ButtonProfile from "./light-component/ButtonProfile";
import bgci from '../styles/images/seamless/metal.webp'

const CardNPC = (props) => {

    return(
        <figure className="box__NPC">
            <img src={props.image} alt="" />
            <article>
                <h2>{props.name}</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </article>
            <ButtonProfile content="Call him" path={`/npc/${props.id}`}/>
        </figure>
    )
}

export default CardNPC