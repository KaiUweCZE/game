import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import UserApi from '../services/api'
import { pokemonsData } from "../data/pokemons";
import { char1, char3, arrow } from "../data/charImages";


const Profile = () => {
    const {currentUser} = useSelector((state) => state.user)
    const [pokemons, setPokemons] = useState([])
    const [myClass, setMyClass] = useState("");
    const arrowRef = useRef(null);
    const arrowRef2 = useRef(null)
    const [data, setData] = useState([])
    const [i, setI] = useState(0)
    const charImg = currentUser.img === "char1" ? char1 : char3

    const getPokemons = () => {
        UserApi.getYourPokemons({username: currentUser.username})
        .then((res) => {
            setPokemons(res.data.pokemon)
            console.log(res.data);
        })
        .catch((err) => console.error(err));
    }

    useEffect(() => {
        getPokemons()
        
    }, []);

    const showComponent = () =>{
        if (myClass === "" && i === 0) {
            arrowRef.current.style.transform = "rotate(180deg)";
            setMyClass("active")
            setI(1)
        } else if (i === 1){
            arrowRef.current.style.transform = "rotate(0deg)"
            arrowRef2.current.style.transform = "rotate(-90deg)";
            setMyClass("")
            setI(0);
        } else {
            setI(1)
        }     
    }

    const setter = () => {
        if (i === 1) {
            arrowRef2.current.style.transform = "rotate(-270deg)";
            setI(2)
        } else {
            arrowRef2.current.style.transform = "rotate(-90deg)";
            setI(1)
        }
    }
    
    return(
        <div className="container__profile">
            <img className="profile-img" src={charImg} alt="" />
            <div className="box__user-info">
                <h3>Name: {currentUser.username}</h3>
                <h3>Lokalita: home</h3>
                <div>
                    <h3>Badges: </h3>
                    <figure>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </figure>
                </div>
                <img ref={arrowRef} className="arrow" src={arrow} alt="" onClick={showComponent}/>
            </div>
            <div r className={`box__user-inventory ${myClass}`} >
                <img ref={arrowRef2} className="arrow" src={arrow} alt="" onClick={setter}/>
            </div>
            <div className={`box__user-pokemons ${i === 2 ? myClass : ""} ${i === 1 ? "fast-opacity" : ""}`}>
                <h2>Pokemons:</h2>
                <div>     
                {       
                    pokemons.map((pokemon, index) => {
                        const onePokemon = pokemonsData.find((e) => e.name === pokemon.name)
                        const {level, attack, hp, abilities } = pokemon.skills
                        return(
                            <figure key={index}>
                                <img src={onePokemon.img} alt="" />
                                <article>
                                    <h3>{pokemon.name}</h3>
                                </article>
                                <p>{attack}</p>
                            </figure>
                        )
                    })
                }
                </div>  
            </div>
        </div>
    )
}


export default Profile