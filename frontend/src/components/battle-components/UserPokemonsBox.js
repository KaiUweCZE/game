import React, { useEffect } from "react";


const UserPokemonsBox = (props) => {

    useEffect(()=>{
        console.log("My props: ", props);
    },[])

    return(
        <div className="box__change">
            <h2>Your Pokemons</h2>  
        </div>
    )
}


export default UserPokemonsBox