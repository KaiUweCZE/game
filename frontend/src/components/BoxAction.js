import React from "react";

// Box shows actions and links for each country by the its name
const BoxAction = (props) => {

    return(
        <div className="box__action">
            <article>
                <h2>{props.title}</h2>
                <a href=""></a>
                <ul>
                    {/* first render links */
                    props.links.map((link, index) => {
                        const {name, to, action} = link
                        return(
                            <li key={index}>
                                    <a onClick={action}>{name}</a>   
                            </li>
                        )
                    })
                    }
                    { /* If there are any actions, they will be rendered */
                        props.extra?.map((index) => {

                            return(
                                <li key={index}> <a href="/battle">Fight!</a></li>
                            )
                        })
                        
                    }
                </ul>
            </article>
        </div>
    )
}

export default BoxAction