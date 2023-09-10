import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useMySix } from "../components/Functions";
import Loader from "../components/Loader";
import GetMob from "../Functions/GetMob";
import { pokemonsData } from "../data/pokemons";

const Battleground = () => {
    const location = useLocation()
    const from = location.state.from || "Nope"
    const {pokemons, loading} = useMySix()
    const [activePokemon, setActivePokemon] = useState({})
    const [activeEnemy, setActiveEnemy] = useState({})

 
        const chooseThis = (enemy) => {
          const poke = pokemonsData.find(poke => poke.name.toLocaleLowerCase() === enemy.name);
          console.log("toto: ", poke);
          setActiveEnemy(poke)
        };
    // hrubě předělat, jen zkouším funkcionality
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

    const enemies = country.find(e => e.countryName === from)
    useEffect(() => {
        const getEnemy = () => {
            const enemy = GetMob(enemies.names)
            chooseThis(enemy)
         }        
         getEnemy()

    },[])

    const chooseYou = (pokeName) =>{
        const poke = pokemonsData.find((e) => e.name === pokeName)
        console.log(pokeName);
        console.log(poke);
        setActivePokemon(poke)
    }

    return(
        <div className="container__battle">
            {
                loading ? <Loader /> : 
                <div className="container__battle--user">
                    <div>
                        <img src={activePokemon.img} alt="" />
                    </div>
                    <div className="box-battle">
                        <h2>Your Pokemons</h2>
                    {
                        pokemons.map((pokemon, index) => {
                            return(
                                <span key={index} onClick={() => chooseYou(pokemon.name)}>{pokemon.name}</span>
                            )
                        })
                    }
                    </div>
                </div>
            }
                <div className="container__battle--middle">

                </div>
                <div className="container__battle--enemy">
                    <img src={activeEnemy.img} alt="" />
                    <p>{activeEnemy.name}</p>

                </div>
        </div>
    )
}

export default Battleground