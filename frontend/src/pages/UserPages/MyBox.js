import React, {useEffect, useState} from "react";
import UserApi from '../../services/api'
import { addPokemonToSix } from "../../Functions/AddToSix";
import { useSelector } from "react-redux";
import Wallpaper from '../../components/Wallpaper'
import { labBg } from "../../data/importedImages";
import { getBoxPokemons } from "../../Functions/Functions";
import MyBoxPokemons from "../../components/ProfileComp/MyBoxPokemons";


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

    const addPokemon = addPokemonToSix(currentUser.username)
    
    return(
        
        <Wallpaper background={labBg}>
            <div className="prevent-wrap">
                <MyBoxPokemons
                    title="YOUR POKEMONS"
                    pokemons={pokemons}
                    function={addPokemon}
                   />
            </div>
        </Wallpaper>
          
    )
}

export default MyBox