import React, {useState} from "react";
import usePokemonActions from "../../Functions/usePokemonAction";
import ButtonProfileB from "../light-component/ButtonProfileB";
import {pokemonsData} from "../../data/pokemons"
import { render } from "react-dom";

const UserPokemonsBox = ({myClass, i}) => {
    const [t,setT] = useState("")
    const [buttonShow, setButtonShow] = useState("Show stats!")
    const { pokemons, removeFromSix, getMySix} = usePokemonActions()

    const otherclass = () => {
        if (t === ""){
            setT("actived")
            setButtonShow("Hide stats!")
        } else {
            setT("")
            setButtonShow("Show stats!")
        }
        
    }

    return(
        <div className={`box__user-pokemons ${i === 2 ? myClass : ""} ${i === 1 ? "fast-opacity" : ""}`}>
        <h2>Pokemons:</h2>
        <div className="box__flex-row">
            <ButtonProfileB content={buttonShow} func={otherclass} path=""/>
            <ButtonProfileB content="Do Boxu!" func= "" path="/mybox"/>
        </div>
        
        <div>     
        {       
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
                        <ButtonProfileB content="Return" func={()=>removeFromSix(pokemon._id)}/>

                    </figure>
                )
            })
        }
        </div>  
    </div>
    )
}


export default UserPokemonsBox