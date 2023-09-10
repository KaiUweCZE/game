import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import UserApi from '../services/api'
import { pokemonsData } from "../data/pokemons";
import { char1, char3, arrow, elixirOne } from "../data/charImages";
import  { BoxBadges, BoxInventory } from "../components/light-component/LightComponent";


const Profile = () => {
    const {currentUser} = useSelector((state) => state.user)
    const [pokemons, setPokemons] = useState([])
    const [myClass, setMyClass] = useState("");
    const [t,setT] = useState("")
    const [buttonShow, setButtonShow] = useState("Show stats!")
    const arrowRef = useRef(null);
    const arrowRef2 = useRef(null)
    const [i, setI] = useState(0)
    const charImg = currentUser.img === "char1" ? char1 : char3


    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = (await UserApi.aboutUser({ username: currentUser.username })).data;
                return userData
            } catch (error) {
                console.error("An error occurred:", error);
            }
        };
        console.log(currentUser.img);
        console.log(charImg);
        fetchData();
    }, []);
    

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

    /* Nutné přejmenovat a opravit s ostatními funkcemi setter/showComponent */
    const otherclass = () => {
        if (t === ""){
            setT("actived")
            setButtonShow("Hide stats!")
        } else {
            setT("")
            setButtonShow("Show stats!")
        }
        
    }
    
    return(
        <div className="container__profile">
            <img className="profile-img" src={charImg} alt="" />
            <div className="box__user-info">
                <div className="left">
                    <div className="about">
                        <ul>
                            <li>Name: {currentUser.username}</li>
                            <li>Lokalita: Home</li>
                        </ul>
                    </div>
                    
                    <BoxBadges />
                </div>
                <div className="right">
                    <article>
                        <h2>Stats</h2>
                        <p>
                            Lorem, ipsum dolor.
                        </p>
                    </article>
                </div>
                
                <img ref={arrowRef} className="arrow" src={arrow} alt="" onClick={showComponent}/>
            </div>
            <div className={`box__user-inventory ${myClass} ${i === 1 ? "fast-opacity" : ""}`} >
                <span>Bag</span>
                <hr />
                <BoxInventory 
                />
                <img ref={arrowRef2} className="arrow" src={arrow} alt="" onClick={setter}/>
            </div>
            <div className={`box__user-pokemons ${i === 2 ? myClass : ""} ${i === 1 ? "fast-opacity" : ""}`}>
                <h2>Pokemons:</h2>
                <button onClick={otherclass}>{buttonShow}</button>
                <div>     
                {       
                    pokemons.map((pokemon, index) => {
                        const onePokemon = pokemonsData.find((e) => e.name === pokemon.name)
                        const {level, attack, hp, abilities } = pokemon.skills
                        return(
                            <figure key={index}>
                                <img src={onePokemon.img} alt=""/>
                                <article className={`${t}`}>
                                    <h3>{pokemon.name}</h3>
                                    <p>level: {level}</p>
                                    <p>hp: {hp}</p>
                                    <p>attack: {attack}</p>
                                    <p>abilities: {abilities}</p>
                                </article>
                                
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