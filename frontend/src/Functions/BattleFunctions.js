import { pokemonsData } from '../data/pokemons';
import { useNavigate } from 'react-router-dom';

// battleground, pokemon
export const choosePokemon = (pokemon, setActivePokemon, setStartBattle) => {
    const pokemonData = pokemonsData.find(e => e.name === pokemon.name);
    const pokemonImg = pokemonData.img;
    const onePokemon = { pokemon, pokemonImg };
    setActivePokemon(onePokemon);
    setStartBattle(true);
}

//checks the previous page and passes information to the current page
export const useToBattle = (name) => {
    const navigate = useNavigate()

    const toBattle = () => {
        navigate("/battle", { state: { from: name }});
    }
    return toBattle
};