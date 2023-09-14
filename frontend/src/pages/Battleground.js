import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useMySix } from "../Functions/Functions";
import Loader from "../components/Loader";
import GetMob from "../Functions/GetMob";
import { pokemonsData } from "../data/pokemons";
import { fieldOne } from "../data/importedImages";
import HpComponent from "../components/battle-components/HpComponent";
import BoxAttacks from "../components/battle-components/BoxAttacks";
import userApi from "../services/api"

const Battleground = () => {
    const location = useLocation()
    const from = location.state.from || "Nope"
    const {pokemons, loading} = useMySix()
    const [activePokemon, setActivePokemon] = useState({name: ""})
    const [activeEnemy, setActiveEnemy] = useState({})
    const [dmg, setDmg] = useState(0)


    const updateDmg = (newDmg) => {
        setDmg(newDmg)
        console.log("Rodič obdržel: ", newDmg);
    }

    //img for 
    const enemyImg = (enemy) => {
        const poke = pokemonsData.find(poke => poke.name.toLocaleLowerCase() === enemy.name);
        setActiveEnemy(poke)
    };

    // this will be in dataCountry file
    const country = [
        {
            countryName: "magicalforest",
            names: ["scyther", "bulbasaur", "butterfree"]
        },
        {
            countryName: "cave",
            names: ["geodude", "zubat", "hypno"]
        }
    ]
    console.log(pokemons);
    //encounter random pokemon
    const enemies = country.find(e => e.countryName === from)
    useEffect(() => {
        const getEnemy = () => {
            const enemy = GetMob(enemies.names)
            enemyImg(enemy)
         }        
         getEnemy()

    },[])

    // func will be in funcions
    const chooseYou = (pokemon) =>{
        const pokemonData = pokemonsData.find(e => e.name === pokemon.name)
        const pokemonImg = pokemonData.img
        console.log("img is: ", pokemonImg);
        const onePokemon = { pokemon, pokemonImg }
        setActivePokemon(onePokemon)
        console.log("active pokemon is: ", activePokemon);
    }


    return(
        <div className="container__battle">
            {
                loading ? <Loader /> : 
                <div className="box__battle--user">
                    {/* this will be component*/}
                    <div className="battle-field" style={{backgroundImage: `url(${fieldOne})`}}>
                        <img src={activePokemon.pokemonImg} alt="" />
                    </div>
                    <HpComponent 
                    />
                    { 
                    activePokemon.name === "" ? "" : <BoxAttacks 
                    id= {activePokemon}
                    updateDmg = {updateDmg}
                     /> 
                    }
                                
                    <div className="box-battle">
                        <h2>Your Pokemons</h2>
                    {
                        pokemons.map((pokemon, index) => {
                            return(
                                <span key={index} onClick={() => chooseYou(pokemon)}>{pokemon.name}</span>
                            )
                        })
                    }
                    </div>
                </div>
            }
                <div className="box__battle--middle">

                </div>
                <div className="box__battle--enemy">
                    {/* this will be component*/}
                    <div className="battle-field" style={{backgroundImage: `url(${fieldOne})`}}>
                        <img src={activeEnemy.img} alt="" />                        
                    </div>
                    <span>{activeEnemy.name}</span>              
                    <HpComponent damage = {dmg}/>
                    
                </div>
        </div>
    )
}

export default Battleground