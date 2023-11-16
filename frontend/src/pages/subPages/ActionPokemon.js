import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOnePokemon } from "../../Functions/usePokemonAction";
import { findImgOfPokemon } from "../../Functions/VisualEffects";
import Loader from "../../components/Loader";
import HpComponent from "../../components/battle-components/HpComponent"


const ActionPokemon = () => {
    const {id} = useParams()
    const [pokemon, setPokemon] = useState(null)
    const [pokemonImg, setPokemonImg] = useState()

    useEffect( () => {   
        getOnePokemon(id).then(data => {
            console.log(data);
            const img = findImgOfPokemon(data.name)
            setPokemonImg(img)
            setPokemon(data)
        })
        .catch(err => console.error('error', err))
    },[id])

    return(
        <>
            {
                pokemon ? 
                <div className="box__one-pokemon">
                    <img src={pokemonImg} alt={pokemon.name} />
                    <h2 onClick={() => console.log(pokemon)}>{pokemon.name}</h2>
                    <HpComponent
                    maxHp={pokemon.skills.hp}
                    currentHp={pokemon.currentHp}
                    />
                    <p>{pokemon.currentHp}/{pokemon.skills.hp}</p>
                </div>
                :
                <Loader />
            }

        </>
    )
}

export default ActionPokemon