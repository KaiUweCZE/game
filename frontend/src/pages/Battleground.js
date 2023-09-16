import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { choosePokemon, useMySix, useTimer } from "../Functions/Functions";
import Loader from "../components/Loader";
import GetMob from "../Functions/GetMob";
import { fieldOne } from "../data/importedImages";
import HpComponent from "../components/battle-components/HpComponent";
import BoxAttacks from "../components/battle-components/BoxAttacks";
import { countryData } from "../data/countryData";
import EndOfBattleWallpaper from "../components/battle-components/EndOfBattleWallpaper";

const Battleground = () => {
    const location = useLocation()
    const from = location.state.from || "Nope"
    const {pokemons, loading} = useMySix()
    const [startBattle, setStartBattle] = useState(false)
    const [activePokemon, setActivePokemon] = useState({name: ""})
    const [activeEnemy, setActiveEnemy] = useState({})
    const [dmg, setDmg] = useState(0)
    const [enemyDmg, setEnemyDmg] = useState(0)
    const [isOver, setIsOver] = useState(false)
    const [who, setWho] = useState()
    //const [stopFight, setStopFight] = useState(false)


    const updateDmg = (newDmg) => {
        setDmg(newDmg)
        console.log("Rodič obdržel: ", newDmg);
    }

    const itIsOver = (who) => {
        //setStopFight(true)
        console.log("Konec battlu " + who + " je poražen");
        setStartBattle(false)
        setWho(who)
        setIsOver(true)
    }

    //encounter random pokemon
    const enemies = countryData.find(e => e.countryName === from)
    useEffect(() => {
        const getEnemy = () => {
            const enemy = GetMob(enemies.names)
            console.log("tohle jsou jeho staty: ", enemy);
            //enemyImg(enemy)
            setActiveEnemy(enemy)
            console.log("tohle jsou jeho staty: ", enemy);
         }      
         getEnemy()
    },[])
    
    useTimer(() => {
        if (startBattle) {
            setEnemyDmg(activeEnemy.attack)
        }
    }, 2000)

    useTimer(() => {
        if(startBattle && enemyDmg !== 0){
            setEnemyDmg(0)
        }
    }, 2000)



    return(
        <div className="container__battle">
            {loading ? (<Loader /> ) :  ( isOver ? ( <EndOfBattleWallpaper who={who} /> ) : (
                <>
                <div className="box__battle--user">
                    {/* this will be component*/}
                    <div className="battle-field" style={{backgroundImage: `url(${fieldOne})`}}>
                        <img src={activePokemon.pokemonImg} alt="" />
                    </div>
                    { activePokemon && activePokemon.pokemon && activePokemon.pokemon.skills ? (
                        <HpComponent 
                            who= "user"
                            hp= {activePokemon?.pokemon?.skills?.hp}
                            damage= {enemyDmg}
                            itIsOver= {itIsOver}
                        />
                    ) : null}
                    { 
                    activePokemon.name === "" ? "" : ( <BoxAttacks 
                    id= {activePokemon}
                    updateDmg= {updateDmg}
                    startBattle= {startBattle}
                     /> 
                    )}
                                
                    <div className="box-battle">
                        <h2>Your Pokemons</h2>
                    {
                        pokemons.map((pokemon, index) => (
                                <span key={index} onClick={() => choosePokemon(pokemon, setActivePokemon, setStartBattle)}>{pokemon.name}</span>
                            )
                        )}
                    
                    </div>
                </div>
            
                <div className="box__battle--middle">

                </div>
                <div className="box__battle--enemy">
                    {/* this will be component*/}
                    <div className="battle-field" style={{backgroundImage: `url(${fieldOne})`}}>
                        <img src={activeEnemy.img} alt="" />                        
                    </div>
                    <span>{activeEnemy.name}</span>              
                    <HpComponent 
                    who="enemy"
                    hp= {activeEnemy.hp}
                    damage = {dmg}
                    itIsOver= {itIsOver}
                    />                
                </div>
                </>
            )
        )}
        </div>
    )
}

export default Battleground