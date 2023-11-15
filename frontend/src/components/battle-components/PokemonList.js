import React from 'react';
import { pokemonsData } from '../../data/pokemons';

//This component shows your six of user's pokemon
const PokemonList = ({ pokemons, choosePokemon, setActivePokemon, setStartBattle }) => {

    //create an array with length 6 elements
    const pokemonArray = pokemons.slice(0,6).concat(new Array(6 - pokemons.length).fill(null));
    
    return (
        <div className="box__pokemon-list">
            {pokemonArray.map((pokemon, index) => {

                if (pokemon) {
                    const pokemonImg = pokemonsData.find(e => e.name === pokemon.name).img;
                    return (
                        <figure key={index} onClick={() => choosePokemon(pokemon, setActivePokemon, setStartBattle)}>
                            <img src={pokemonImg} alt={pokemon.name} />
                            <figcaption>{pokemon.name}</figcaption>
                        </figure>
                    );
                } else {
                    // render placeholder
                    return <figure key={index}></figure>;
                }
            })}
        </div>
    );
};

export default PokemonList;