import React from "react";


const CharPainter = ({ characters, fun }) => {

    return(
        <div className="box__painter">
            {
                characters.map((character,index) => {
                    
                    return(
                        <div key={index}>
                        <figure  onClick={(e) => fun(e, character.name, character.image)}>
                            <img src={character.image} alt="" />
                            { character.content && (
                                <article>
                                    <h2>{character.name}</h2>
                                    <p>{character.content}</p>
                                </article>
                            )}
                        </figure>
                         </div>
                    )
                    
                })
            }
        </div>
    )
}


export default CharPainter