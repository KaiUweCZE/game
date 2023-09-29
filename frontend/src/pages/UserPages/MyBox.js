import React, {useEffect, useState} from "react";
import UserApi from '../../services/api'
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
                <MyBoxPokemons pokemons={pokemons} function={addPokemonToSix}/>
            </div>
        </Wallpaper>
          
    )
}

export default MyBox