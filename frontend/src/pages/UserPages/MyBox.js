import React, {useEffect, useState} from "react";
import { addPokemonToSix } from "../../Functions/CatchFunc";
import { useSelector } from "react-redux";
import Wallpaper from '../../components/Wallpaper'
import { labBg } from "../../data/importedImages";
import { getBoxPokemons } from "../../Functions/usePokemonAction";
import MyBoxPokemons from "../../components/ProfileComp/MyBoxPokemons";

const MyBox = () => {
    const {currentUser} = useSelector((state) => state.user)
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0);

    // Fetch pokemons when the component mounts or 'count' changes
    useEffect(() => {
        setLoading(true) // Start the loader
        getBoxPokemons(currentUser.username)
        .then((receivedPokemons) => {
            if (receivedPokemons) {
                setPokemons(receivedPokemons) // Update pokemons
            }
            setLoading(false) // Stop the loader
        })
        .catch((err) => {
            console.error(err); // Log any errors
            setLoading(false) // Stop the loader
        })
    }, [count]);



    //const addPokemon = addPokemonToSix(currentUser.username)
    const addPokemon = async (pokemonId) => {
        try {
          await addPokemonToSix(currentUser.username)(pokemonId);
          setCount(count + 1);  // This triggers a re-fetch of your pokemons
        } catch (error) {
          console.error("Failed to add to six", error);
        }
      };

    return(
        
        <Wallpaper background={labBg}>
            <div className="prevent-wrap">
                <MyBoxPokemons
                    title="YOUR POKEMONS"
                    pokemons={pokemons}
                    function={addPokemon}
                    loading={loading}
                   />
            </div>
        </Wallpaper>
          
    )
}

export default MyBox