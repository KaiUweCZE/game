import React, {useEffect, useState} from "react";
import UserApi from '../../services/api'
import { useSelector } from "react-redux";
import { pokemonsData } from "../../data/pokemons";

const MyBox = () => {
    const {currentUser} = useSelector((state) => state.user)
    const [pokemons, setPokemons] = useState([])

    const getPokemons = () => {
        UserApi.getYourPokemons({username: currentUser.username})
        .then((res) => {
            setPokemons(res.data.pokemon)
            console.log(res.data);
        })
        .catch((err) => console.error(err));
    }

    useEffect(() => {
        getPokemons()
    }, []);

    const addPokemon = (pokemon) =>{
        
        console.log(pokemon);
        
        var data = {
            username: currentUser.username,
            pokemon: pokemon
        }
        UserApi.addToSix(data)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err))
        
    }
    return(
        <div>
            {
                pokemons.map((pokemon,index) => {
                    const onePokemon = pokemonsData.find((e) => e.name === pokemon.name)
                    return(
                        <figure key={index}>
                            <img src={onePokemon.img} alt=""  />
                            <h2>{pokemon.name}</h2>
                            <button onClick={() => addPokemon(pokemon._id)}>vybrat</button>
                        </figure>
                    )
                })
            }
        </div>
    )
}

export default MyBox