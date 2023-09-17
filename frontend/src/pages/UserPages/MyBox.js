import React, {useEffect, useState} from "react";
import UserApi from '../../services/api'
import { useSelector } from "react-redux";
import { pokemonsData } from "../../data/pokemons";
import Wallpaper from '../../components/Wallpaper'
import { labBg } from "../../data/importedImages";
import { getBoxPokemons } from "../../Functions/Functions";


const MyBox = () => {
    const {currentUser} = useSelector((state) => state.user)
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getBoxPokemons(currentUser.username).then((receivedPokemons) => {
            if (receivedPokemons) {
                setPokemons(receivedPokemons)
            }
        })
    }, []);

    //this will be move to Functions file
    const addPokemonToSix = (pokemon) =>{     
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
        
        <Wallpaper background={labBg}>
            <div className="prevent-wrap">
                <h2>YOUR POKEMONS</h2>
                {/* this will be component*/}
                <div className="box__pc--pokemons">
                {
                    pokemons.map((pokemon,index) => {
                        const onePokemon = pokemonsData.find((e) => e.name === pokemon.name)
                        return(
                            <figure key={index}>
                                <img src={onePokemon.img} alt=""  />
                                <h2>{pokemon.name}</h2>
                                <button onClick={() => addPokemonToSix(pokemon._id)}>vybrat</button>
                            </figure>
                        )
                    })
                }
                </div>
            </div>
        </Wallpaper>
          
    )
}

export default MyBox