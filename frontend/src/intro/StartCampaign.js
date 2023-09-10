import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setImage } from '../redux/user/userSlice';
import { checkCampaign, renderSkills, useCompleteCampaign, useLoader } from '../components/Functions';
import UserApi from '../services/api'
import ImagePainter from '../components/ImagePainter';
import professorImage from '../styles/images/profbloom.webp'
import eevee from "../styles/images/eevee.png"
import teddiursa from "../styles/images/teddiursa.png"
import { char1, char3 } from '../data/charImages';
import {store} from '../redux/store'
import Loader from '../components/Loader';


const StartCampaign = () => {
    const {currentUser} = useSelector((state) => state.user)
    const [page, setPage] = useState(0)
    const [completed, setCompleted] = useState(false)
    const navigate = useNavigate();
    const { completeCampaign } = useCompleteCampaign(currentUser.username)
    const {loading, setLoading} = useLoader();
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        checkCampaign(currentUser.username, 'firstChoice')
        .then(isCompleted => {
            setCompleted(isCompleted); // Aktualizace stavu podle odpovědi
        })
        .finally(() => setLoading(false));
    }, []);

    // to pak hodit do lightData
        const eSkills = renderSkills({
            level:5,
            abilities: ["grower", "macho"],
            hp: [10,16],
            attack: [5,8]
        });

        const tSkills = renderSkills({
            level:5,
            abilities: ["hungry", "berseker"],
            hp: [8,12],
            attack: [7,10]
        });

    const pokemons = [
        {
            image: eevee,
            name: "Eevee",
            content: "Tohle je Eevee bude tě provázet na tvých cestách odhodlaně a věrně!",
            skills: eSkills
        },
        {
            image: teddiursa,
            name: "Teddiursa",
            content:  "Tak tady to je Teddiursa, jeho tvrdohlavost je vykoupena bojem do poslední kapky krve!",
            skills: tSkills
        }
    ]

    const trainers = [
        {
            name: "char1",
            image: char1,
        },
        {
            name: "char3",
            image: char3,
        }
    ]
    // až posud

    //šité horkou jehlou, někdy přeladit
    const nextPage = (e, trainer) => {
        e.preventDefault()
        if (page <= 2) {
            let newPage = page + 1
            console.log(trainer)
            var data={
                username: currentUser.username,
                img: trainer
            }
            UserApi.profileImage(data)
            .then(res => {
                dispatch(setImage(trainer));
            }).catch( err => console.error('faile with image', err))
            setPage(newPage)
        } else {
            setPage(0)
        }
        console.log("page number: ", page);
    }

    const toNextPage= (e, name, image) => {
        e.preventDefault()
        console.log(name);
        /* tady někde by měl být kód pro odeslání pokémona do databáze */
        const newPokemon = {
            name,
            image,
        }
        try {
            const thePokemon = pokemons.find(e => e.name === newPokemon.name);
            catchPokemon(e, thePokemon)
        } catch (error) {
            console.error("Something went error", error);
        }
        completeCampaign('firstChoice')
        navigate(`/profile?name=${name}&image=${image}`)
    }

    //tohle silně předělat, zatím to plní funkci jen pro eevee a teddiursu
    const catchPokemon = (e, pokemon) => {
        e.preventDefault()
        const skills = pokemon.name === "Eevee" ? eSkills : tSkills
        var data= {
            pokemon: {
                name: pokemon.name,
                image: pokemon.image,
                skills: skills,
            },
            trainer: currentUser.username
        }
        console.log(data)
        UserApi.obtainPokemon(data)
        .then( res => {
            console.log("pokemon was added");
            const lastAddedPokemon = res.data.newPokemonId;
            console.log(lastAddedPokemon);
            const nextData = {
                pokemon: lastAddedPokemon,
                username: currentUser.username
            }
            UserApi.addToSix(nextData)
            .then(res => console.log('Pokemon added', res))
            .catch(err => console.error('Error occurs', err))
        }) 
        .catch( err => {
            console.log(err);
        }
        )
    }


    return(
        <div className='container__firstChoice'>
        { loading ? <Loader /> :
        <>
           { completed ?
            <h2>je třeba jít dál</h2>
            :
            <>
            <h2>Welcome Here! {currentUser.username}</h2>
            <p>
                Now when you start with your journey, so you can
                set your profile! 
            </p>
            <div className='animation-professor'>
                <div className='img-wrapper'>
                    <img src={professorImage} alt="" /> 
                </div>     
                <article>
                    <h2>Profesor</h2>
                    <p>
                        Are you sure that you want to continue to dangerous advanture?
                        If yes click on start!
                    </p>
                </article>   
            </div>
            { 
            page === 0 
            ?
            <a href="#" className='animation-translate' onClick={nextPage}>Start</a>
            :
            <a href="#" className='animation-translate' onClick={(e) => {e.preventDefault(); setPage(page - 1)}}>Zpět</a>
            }
           
            {
                page === 1 ? <>
                <h2>Let's go make a first choice!</h2>
                <ImagePainter 
                characters = {trainers}
                fun={nextPage}
                />
                </> : <>
                </>
            }
            {
                page === 2 ?

                <>
                    <h2 className='margin'>Pokračujeme</h2>
                    <ImagePainter
                        characters = {pokemons}
                        fun={toNextPage}         
                    />
                </>
                :
                ""
            }
           
            </> }
            </>
        }
        </div>
    )
}


export default StartCampaign