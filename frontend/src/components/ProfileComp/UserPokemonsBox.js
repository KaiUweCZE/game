import React, {useEffect, useState} from "react";
import {usePokemonActions} from "../../Functions/usePokemonAction";
import ButtonProfile from "../light-component/ButtonProfile";
import {pokemonsData} from "../../data/pokemons"
import LoaderLight from "../LoaderLight";
import { useDispatch } from "react-redux";
import { updateMySix } from "../../redux/user/userSlice";

const UserPokemonsBox = ({myClass, i}) => {
    const [t,setT] = useState("")
    const [buttonShow, setButtonShow] = useState("Show stats!")
    const { pokemons, removeFromSix, getMySix} = usePokemonActions()
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    const otherclass = () => {
        if (t === ""){
            setT("actived")
            setButtonShow("Hide stats!")
        } else {
            setT("")
            setButtonShow("Show stats!")
        }
    }


    const handleRemove = async (id) => {
        setLoading(true); // Start loader
        const success = await removeFromSix(id); // Remove Pokemon
        if (success) {
            const updatedSix = await getMySix();
            dispatch(updateMySix(updatedSix || []))
            setLoading(false); // Stop loader
        }
    };

    return(
        <div className={`box__user-pokemons ${i === 1 ? myClass : ""} ${i === 0 ? "fast-opacity" : ""}`}>
            <div className="box__user-headline">
                <h2>Pokemons</h2>
                <hr />
                <div className="box__buttons">
                    <ButtonProfile content={buttonShow} func={otherclass} path=""/>
                    <ButtonProfile content="Do Boxu!" func= "" path="/mybox"/>
                </div>
            </div>
        
        <div>

       { loading ? <LoaderLight/> : (       
            pokemons.map((pokemon, index) => {
                const onePokemon = pokemonsData.find((e) => e.name === pokemon.name)
                const {level, damage, hp, abilities } = pokemon.skills
                
                return(
                    <figure key={index}>
                        <img src={onePokemon.img} alt=""/>
                        <article className={`${t}`}>
                            <h3>{pokemon.name}</h3>
                            <p>level: {level}</p>
                            <p>hp: {hp}</p>
                            <p>damage: {damage}</p>
                            <p>abilities: {abilities}</p>
                            <p>attacks: {pokemon.attacks.map(attack => attack.name).join(", ")}</p>

                        </article>
                        <ButtonProfile content="Return" func={() => handleRemove(pokemon._id)}/>

                    </figure>
                )
            })
        )}
        </div>  
    </div>
    )
}


export default UserPokemonsBox