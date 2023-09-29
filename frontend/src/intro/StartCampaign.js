import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkCampaign, useCompleteCampaign, useLoader } from '../Functions/Functions';
import CharPainter from '../components/introComponent/CharPainter';
import PokemonPainter from '../components/introComponent/PokemonPainter';
import { trainers } from '../data/charactersData';
import Loader from '../components/Loader';
import { generateSkills, catchPokemon } from '../Functions/GeneratorFunctions';
import { updateProfileImage } from '../Functions/IntroFunctions';
import ProfesorPainter from '../components/introComponent/ProfesorPainter';
import CompletedMission from '../components/introComponent/CompletedMission';
import { pokemonForEvents } from '../data/giftsData';
import { useStatePage } from '../Functions/myHooks';


const StartCampaign = () => {
    const {currentUser} = useSelector((state) => state.user)
    const [completed, setCompleted] = useState(false)
    const navigate = useNavigate();
    const { completeCampaign } = useCompleteCampaign(currentUser.username)
    const {loading, setLoading} = useLoader();
    const dispatch = useDispatch();

    //Check if is this part completed? => will be custom hook @
    useEffect(() => {
        setLoading(true);
        checkCampaign(currentUser.username, 'firstChoice')
        .then(isCompleted => {
            setCompleted(isCompleted);
        })
        .finally(() => setLoading(false));
    }, []);

    //send functions to custom hooks (useStatePage), I set the number of pages and created a function for each page, etc.
    const actions = {
        0: () => console.log("clicked on start", page),
        1: (e, trainer) => {
            updateProfileImage(currentUser.username, trainer, dispatch)
            console.log("clicked on trainer image", trainer, pokemonForEvents.starterPokemon);
        },
        2: (e, name, image) => {
            const basicPokemonInfo = pokemonForEvents.starterPokemon.find(p => p.name === name);
            const generatedPokemon = generateSkills(name, 10);
            const completePokemon = { ...basicPokemonInfo, ...generatedPokemon };
            catchPokemon(completePokemon, currentUser.username, currentUser.mySix)
            ,completeCampaign('firstChoice')
            ,navigate(`/profile?name=${name}&image=${image}`)}
    }

    //first argument is initialPage => -1 because I want to run the function manually
    const [page, incrementPage, decrementPage] = useStatePage(-1, actions)


    return (
        <>
            {/*Mission is completed? so you will see wallpaper and you will be redirected to profile */}
            {completed ? 
                <CompletedMission />
                :
                <div className='container__firstChoice'>
                    {loading ? <Loader /> :
                        <>
                        {/*Introduction to game... Welcome page */}
                            <ProfesorPainter name={currentUser.username} />
                            {page === -1 ?
                                <a href="#" className='animation-translate button__classic' onClick={incrementPage}>Start</a>
                                :
                                <a href="#" className='animation-translate button__classic' onClick={decrementPage}>Go Back</a>
                            }
                            {page === 0 && 
                                <div className='box__classic'>
                                    <h2>Let's go make a first choice!</h2>
                                    {/*after click on start => pick one of characters images */}
                                    <CharPainter
                                        characters={trainers}
                                        fun={incrementPage}
                                    />
                                </div>
                            }
                            {page === 1 && 
                                <>
                                    <h2 className='margin'>Continue</h2>
                                    {/*after click on character image => choice your pokemon*/}
                                    <PokemonPainter
                                        characters={pokemonForEvents.starterPokemon}
                                        fun={incrementPage}
                                    />
                                </>
                            }
                        </>
                    }
                </div>
            }
        </>
    );
    
}


export default StartCampaign