import React from "react";
import ButtonProfile from "./light-component/ButtonProfile";


const CardNPC = (props) => {
    const contact = props.myContacts.some(e => e.toLowerCase() === props.name.toLowerCase())
    //const contactClass = contact ? "my-contact" : "";
    return(
        <figure className="box__NPC" >
            <img className={contact ? "my-contact" : ""} src={props.image} alt="" />
            <article>
                <h2>{contact ? props.name : "???"}</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </article>

            { contact ? <ButtonProfile content="Call him" path={`/npc/${props.id}`}/> : ""}
        </figure>
    )
}

export default CardNPC