import React from "react";
import '../../styles/lightComponent.css'

const PokemonPainter = (props) => {


    return(
        <>
        <div className="box__starter">
            {
                props.characters.map( (character, index) => {

                    return(
                        <div className="card__starter" key={index} onClick={(e) => props.fun(e, character.name, character.image)}>
                            <figure>
                                <img src={character.image} alt="" />
                                <h2>{character.name}</h2>            
                                <div className="info__starter">
                                    <span className="pokemon__type">{character.type}</span>
                                    <ul>
                                        <h3>Moves: </h3>
                                        {
                                            character.attacks.map( (attack, index) => {

                                                return(
                                                    <li key={index}>{attack}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <article>
                                        <h3>About: </h3>
                                        <p>
                                            {character.content}
                                        </p>
                                    </article>                              
                                </div>
                            </figure>
                        </div>
                    )
                })
            }
        </div>
    </>
)
}

export default PokemonPainter