import React, { useState } from "react";
import { pokemonsData } from "../../data/pokemons";
import LoaderLight from "../LoaderLight";


const MyBoxPokemons = (props) => {
    
    return(
        <div className="container__pc--pokemons">
            <div className="box__headline">
                <h2>{props.title}</h2>
                <hr />
            </div>
            { props.loading ? <LoaderLight /> : ( 
            <div className="grid__layout-auto">
                {
                props.pokemons.map((pokemon,index) => {
                    const onePokemon = pokemonsData.find((e) => e.name === pokemon.name)
                    return(
                        <figure key={index}>
                            <img src={onePokemon.img} alt=""  />
                            <h2>{pokemon.name}</h2>
                            <button className="btn__primary" onClick={() => props.function(pokemon._id)}>
                                <span></span>
                                vybrat
                                <span></span>
                            </button>
                        </figure>
                    )
                })
                }
            
            </div>
            )}
        </div>
    )
}

export default MyBoxPokemons