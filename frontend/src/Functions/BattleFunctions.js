import { pokemonsData } from '../data/pokemons';

// battleground, pokemon
export const choosePokemon = (pokemon, setActivePokemon, setStartBattle) => {
    console.log("choosePokemon called with:", pokemon);
    const pokemonData = pokemonsData.find(e => e.name === pokemon.name);
    console.log("Found pokemon data:", pokemonData);
    const pokemonImg = pokemonData.img;
    const onePokemon = { pokemon, pokemonImg };
    console.log("Setting active pokemon:", onePokemon);
    setActivePokemon(onePokemon);
    console.log("Starting battle");
    setStartBattle(true);
}
