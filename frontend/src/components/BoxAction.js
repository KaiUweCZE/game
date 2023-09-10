import React from "react";
import { Link } from "react-router-dom";

const BoxAction = ({title, links}) => {

    return(
        <div className="box__action">
            <article>
                <h2>{title}</h2>
                <a href=""></a>
                <ul>
                    {
                    links.map((link, index) => {
                        const {name, to} = link
                        return(
                            <li key={index}>
                                {
                                typeof to === "function" ? (
                                <a onClick={to}>{name}</a>
                                ):
                                (<Link to={to}>{name}</Link>)
                                }      
                            </li>
                        )
                    })
                    }
                </ul>
            </article>
        </div>
    )
}

export default BoxAction