import React, {useState} from 'react'
import professorImage from '../styles/images/profbloom.webp'
import { useSelector } from "react-redux";
import ImagePainter from '../components/ImagePainter';
import eevee from "../styles/images/eevee.png"
import teddiursa from "../styles/images/teddiursa.png"

const Profile = () => {
    const {currentUser} = useSelector((state) => state.user)
    const [page, setPage] = useState(false)
    console.log(currentUser.username);

    const pokemons = [
        {
            image: eevee,
            content: "Tohle je Eevee bude tě provázet na tvých cestách odhodlaně a věrně!"
        },
        {
            image: teddiursa,
            content:  "Tak tady to je Teddiursa, jeho tvrdohlavost je vykoupena bojem do poslední kapky krve!"
        }
    ]

    const nextPage = (e) => {
        e.preventDefault()
        if (page) {
            setPage(false)
        } else {
            setPage(true)
        }
        console.log("page number: ", page);
    }

    return(
        <div className='container__profile'>
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
            <a href="" onClick={nextPage}>Start</a>
            {
                page ?
                <>
                    <h2 className='margin'>Pokračujeme</h2>
                    <ImagePainter
                        pokemons={pokemons}
                    />
                </>
                
                :
                ""
            }
            
        </div>
    )
}


export default Profile