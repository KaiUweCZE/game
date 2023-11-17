import React, {useState, useEffect} from "react";
import { useMySix } from "../Functions/usePokemonAction";
import { useStatePage, useTimer } from "../Functions/myHooks";
import { choosePokemon, updateEnergy, updateHp } from "../Functions/BattleFunctions";
import Loader from "../components/Loader";
import GetMob from "../Functions/GetMob";
import { fieldOne } from "../data/importedImages";
import HpComponent from "../components/battle-components/HpComponent";
import EnergyComponent from "../components/battle-components/EnergyComponent";
import BoxAttacks from "../components/battle-components/BoxAttacks";
import { countryData } from "../data/DataCountries/countryData";
import EndOfBattleWallpaper from "../components/battle-components/EndOfBattleWallpaper";
import { useSelector } from "react-redux";
import PokemonList from "../components/battle-components/PokemonList";
import BoxEnemy from "../components/battle-components/BoxEnemy";

const Battleground = () => {
    const {currentUser} = useSelector((state) => state.user)
    const {pokemons, loading} = useMySix()
    const [startBattle, setStartBattle] = useState(false)
    const [activePokemon, setActivePokemon] = useState({name: ""})
    const [activeEnemy, setActiveEnemy] = useState({})
    const [dmg, setDmg] = useState(0)
    const [energy, setEnergy] = useState(0)
    const [enemyDmg, setEnemyDmg] = useState(0)
    const [isOver, setIsOver] = useState(false)
    const [who, setWho] = useState()
    const [withoutEnergy, setWithoutEnergy] = useState(false)

    //updateDmg
    const afterAttack = (dmg, energy) => {
        setDmg(dmg)
        setEnergy(energy)
        console.log("ENNEERRE", energy);
        updateEnergy(
            activePokemon.pokemon.currentEnergy,
            energy,
            activePokemon.pokemon._id
        ).then( updatedEnergy => {
            console.log("zasílám toliko energy: ", activePokemon.pokemon.currentEnergy);
            setActivePokemon( prev => ({
                ...prev,
                pokemon: { ...prev.pokemon, currentEnergy: updatedEnergy}
            }))
        }).catch(err => {
            console.error("failed", err);
        })
    }

    const itIsOver = (who) => {
        setStartBattle(false);
        setWho(who);
        setIsOver(true);
    }

    const nextRound = () => {
        setIsOver(false)
        setStartBattle(true)
    }

    //encounter random pokemon
    const enemies = countryData.find(e => e.countryName === currentUser.location)
    useEffect(() => {
        const getEnemy = () => {
            const enemy = GetMob(enemies.names)
            setActiveEnemy(enemy)
         }      
         getEnemy()
    },[])
    
    //this part of code user's pokemon current hp in database
    //setEnemyDmg visualize it
    useTimer(() => {
        if (startBattle) {
            setEnemyDmg(activeEnemy.dmg)
            updateHp(
                activePokemon.pokemon.currentHp,
                activeEnemy.dmg,
                activePokemon.pokemon._id
                ).then(updateHp => {
                    setActivePokemon(prev => ({
                     ...prev, pokemon: { ...prev.pokemon, currentHp:updateHp}
                }))
                }).catch(error => {
                    console.error("Failed", error)}
                )
        }
    }, 2000)

    //because of the hp component that reacts to dmg changes 
    useTimer(() => {
        if(startBattle && enemyDmg !== 0){
            setEnemyDmg(0)
        }
    }, 2000)

    //send functions to custom hooks (useStatePage),every increment is next round in battleground
    const actions = {
        0: () => {console.log("clicked on start"), nextRound()},
        1: () => console.log("Next Round!"),
        2: () => console.log("Oh man, the last one")
    }

     //first argument is initialPage => -1 because I want to run the function manually
     const [page, incrementPage, decrementPage] = useStatePage(-1, actions)



    return(
        <div className="container__battle">
            {loading ? (<Loader /> ) :  ( isOver ? ( <EndOfBattleWallpaper who={who} incrementPage={incrementPage}/> ) : (
                <>
                <div className="box__battle--user">
                    {/* this will be component*/}
                    <div className="battle-field" style={{backgroundImage: `url(${fieldOne})`}}>
                        <img className={activePokemon.pokemonImg ? "combined-animation" : ""} src={activePokemon.pokemonImg} alt="" />
                    </div>
                    { activePokemon && activePokemon.pokemon && activePokemon.pokemon.skills ? (
                        <>
                        <HpComponent 
                            who= "user"
                            maxHp= {activePokemon?.pokemon?.skills.hp}
                            currentHp= {activePokemon.pokemon.currentHp}
                            damage= {enemyDmg}
                            itIsOver= {itIsOver}
                        />
                        <EnergyComponent
                        currentEnergy = {activePokemon.pokemon.currentEnergy}
                        maxEnergy = {activePokemon.pokemon.skills.energy}
                        costEnergy = {energy}
                        setWithoutEnergy={setWithoutEnergy}
                        />
                        </>
                    ) : null}
                    {
                    activePokemon.name === "" ? "" : ( <BoxAttacks 
                    id= {activePokemon}
                    afterAttack= {afterAttack}
                    startBattle= {startBattle}
                    withoutEnergy={withoutEnergy}
                     /> 
                    )
                    }
                    <PokemonList 
                    pokemons={pokemons} 
                    choosePokemon={choosePokemon} 
                    setActivePokemon={setActivePokemon} 
                    setStartBattle={setStartBattle} 
                    />
                </div>
                
                <div className="box__battle--middle">       
                </div>
                <div className="box__battle--enemy">
                    {/* this will be component*/}
                    <BoxEnemy backgroundImage={fieldOne} enemyImg={activeEnemy.img}/>
                    <span>{activeEnemy.name}</span>              
                    <HpComponent 
                    who="enemy"
                    maxHp= {activeEnemy.hp}
                    currentHp={activeEnemy.hp}
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