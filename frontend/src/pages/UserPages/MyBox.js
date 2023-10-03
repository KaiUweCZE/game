import React, {useEffect, useState} from "react";
import { addPokemonToSix } from "../../Functions/CatchFunc";
import { useSelector } from "react-redux";
import Wallpaper from '../../components/Wallpaper'
import { labBg } from "../../data/importedImages";
import { getBoxPokemons } from "../../Functions/usePokemonAction";
import MyBoxPokemons from "../../components/ProfileComp/MyBoxPokemons";
import LoaderLight from "../../components/LoaderLight"

const MyBox = () => {
    const {currentUser} = useSelector((state) => state.user)
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getBoxPokemons(currentUser.username)
        .then((receivedPokemons) => {
            if (receivedPokemons) {
                setPokemons(receivedPokemons)
            }
            setLoading(false)
        })
        .catch((err) => console.error(err), setLoading(false))
    }, [currentUser.mySix]);



    const addPokemon = addPokemonToSix(currentUser.username, currentUser.mySix)
    
    return(
        
        <Wallpaper background={labBg}>
            <div className="prevent-wrap">
                { loading ? <LoaderLight /> :
                <MyBoxPokemons
                    title="YOUR POKEMONS"
                    pokemons={pokemons}
                    function={addPokemon}
                   />
                }
            </div>
        </Wallpaper>
          
    )
}

export default MyBox