import React, {useState} from "react";
import usePokemonActions from "../../Functions/usePokemonAction";
import ButtonProfile from "../light-component/ButtonProfile";
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
                        <ButtonProfile content="Return" func={()=>removeFromSix(pokemon._id)}/>

                    </figure>
                )
            })
        }
        </div>  
    </div>
    )
}


export default UserPokemonsBox