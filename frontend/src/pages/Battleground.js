import React, {useState, useEffect} from "react";
import { useMySix } from "../Functions/usePokemonAction";
import { useStatePage, useTimer } from "../Functions/myHooks";
import { choosePokemon } from "../Functions/BattleFunctions";
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
import UserApi from "../services/api"


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
    //const [stopFight, setStopFight] = useState(false)

    //updateDmg
    const afterAttack = async (dmg, energy) => {
        setDmg(dmg)
        setEnergy(energy)
    }

    const itIsOver = (who) => {
        //setStopFight(true)
        console.log("Konec battlu " + who + " je poražen");
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
            console.log("tohle jsou jeho staty: ", enemy);
            //enemyImg(enemy)
            setActiveEnemy(enemy)
            console.log("tohle jsou jeho staty: ", enemy);
         }      
         getEnemy()
    },[])
    
    useTimer(() => {
        if (startBattle) {
            setEnemyDmg(activeEnemy.dmg)
            console.log("Tohle je aktuální hp",activePokemon.pokemon.currentHp);
            const newHp = activePokemon.pokemon.currentHp - activeEnemy.dmg;
            const updatedHp = newHp > 0 ? newHp : 0;
            let data = {
                currentHp: updatedHp,
            }
            UserApi.updateStatus(activePokemon.pokemon._id, data)
            .then(res => {
                if (res.status === 200){
                    setActivePokemon(prev => ({
                        ...prev,
                        pokemon: {
                            ...prev.pokemon,
                            currentHp: updatedHp
                        }
                    }))
                    console.log("status updated", updatedHp);
                }
            })
            .catch(error => {console.error("status update error"), error})
        }
    }, 2000)

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
                        energy= {activePokemon.pokemon.skills.energy}
                        costEnergy = {energy}
                        />
                        </>
                    ) : null}
                    {
                    activePokemon.name === "" ? "" : ( <BoxAttacks 
                    id= {activePokemon}
                    afterAttack= {afterAttack}
                    startBattle= {startBattle}
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