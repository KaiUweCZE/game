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


const StartCampaign = () => {
    const {currentUser} = useSelector((state) => state.user)
    const [page, setPage] = useState(0)
    const [completed, setCompleted] = useState(false)
    const navigate = useNavigate();
    const { completeCampaign } = useCompleteCampaign(currentUser.username)
    const {loading, setLoading} = useLoader();
    const dispatch = useDispatch();

    //Check if is this part completed?
    useEffect(() => {
        setLoading(true);
        checkCampaign(currentUser.username, 'firstChoice')
        .then(isCompleted => {
            setCompleted(isCompleted);
        })
        .finally(() => setLoading(false));
    }, []);


    //šité horkou jehlou, někdy přeladit
    const nextPage = (e, trainer) => {
        e.preventDefault()
        if (page <= 2) {
            setPage(page + 1)
            updateProfileImage(currentUser.username, trainer, dispatch)
        } else {
            setPage(0)
        }
    }

    const toNextPage= (e, name, image) => {
        e.preventDefault()
        try {
            //from gift Pokemons, there are pokemons that you can obtain during a game
            const basicPokemonInfo = pokemonForEvents.starterPokemon.find(p => p.name === name);
            const generatedPokemon = generateSkills(name, 10);
            const completePokemon = { ...basicPokemonInfo, ...generatedPokemon };
            console.log("Tohle je basic Info: ", basicPokemonInfo);
            console.log("Tohle je Pokemon:   ",completePokemon);
            catchPokemon(completePokemon, currentUser.username, currentUser.mySix)
            completeCampaign('firstChoice')
            navigate(`/profile?name=${name}&image=${image}`)
        } catch (error) {
            console.error("Something went error", error);
        }
    }


    return (
        <>
            {completed ? 
                <CompletedMission />
                :
                <div className='container__firstChoice'>
                    {loading ? <Loader /> :
                        <>
                            <ProfesorPainter name={currentUser.username} />
                            {page === 0 ?
                                <a href="#" className='animation-translate button__classic' onClick={nextPage}>Start</a>
                                :
                                <a href="#" className='animation-translate button__classic' onClick={(e) => { e.preventDefault(); setPage(page - 1) }}>Go Back</a>
                            }
                            {page === 1 && 
                                <div className='box__classic'>
                                    <h2>Let's go make a first choice!</h2>
                                    <CharPainter
                                        characters={trainers}
                                        fun={nextPage}
                                    />
                                </div>
                            }
                            {page === 2 && 
                                <>
                                    <h2 className='margin'>Continue</h2>
                                    <PokemonPainter
                                        characters={pokemonForEvents.starterPokemon}
                                        fun={toNextPage}
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