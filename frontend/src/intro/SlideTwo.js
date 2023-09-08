import React from "react";
import { useSelector } from "react-redux"

const SlideTwo = () => {
    const { currentUser } = useSelector((state) => state.user)
    
    return(
        <>
            <h2>Hello there! {currentUser.username}</h2>
            {currentUser.pokemons && currentUser.pokemons.map((pokemon, index) => (
                <div key={index}>
                    <h4>{pokemon.name}</h4>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <p>{pokemon.skills}</p>
                </div>
            ))}
        </>
    )
}

export default SlideTwo