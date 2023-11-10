import React from "react";
import '../styles/mailStyle.css'

const Mail = () => {

    return(
        <div className="container__mail">
            <div className="box__mail">
                <h2>Contact</h2>
                <ul className="menu__mail">
                    <li>Conrad</li>
                    <li>Amelie</li>
                    <li>Jhon Bert</li>
                    <li>Nor Bert</li>
                    <li>Elvin</li>
                    <li>Muck</li>
                    <li>Trevor</li>
                    <li>Prevor</li>
                    <li>Ul-ama-na</li>
                    <li>Kobakami</li>
                </ul>
            </div>
            <div className="box__message">
                <article className="message__npc">
                    <h2>Conrad</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Natus, in.
                    </p>
                </article>
                <article className="message__user">
                    <h2>User</h2>
                    <p>
                        Lorem ipsum dolor sit Lorem ipsum dolor sit.
                    </p>
                </article>
                <article className="message__npc">
                    <h2>Conrad</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Natus, in.
                    </p>
                </article>
            </div>
        </div>
    )
}


export default Mail