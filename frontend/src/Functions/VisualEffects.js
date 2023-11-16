import React, {useState, useRef} from "react";
import { pokemonsData } from "../data/pokemons";

const showComponent = () =>{
    const [myClass, setMyClass] = useState()
    const arrowRef = useRef(null);
    const arrowRef2 = useRef(null)

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

export const findImg = (nameOfImage) => {
    const fetchData = async () => {
        try {
            const userData = (await UserApi.aboutUser({ username: nameOfImage })).data;
            return userData
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };
    console.log(currentUser.img);
    console.log(charImg);
    fetchData();
}


export const findImgOfPokemon = (pokemon) => {
    const pokemonImg = pokemonsData.find(e => e.name.toLocaleLowerCase() === pokemon.toLocaleLowerCase())
    console.log("Obrázek: ", pokemonImg);
    return pokemonImg.img
}