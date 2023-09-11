import React from "react";
import { elixirOne } from "../../data/importedImages";

const BoxBadges = () => {

    return(
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
    )
}

const BoxInventory = ( ) =>{


    return(
        <div className="item-list">
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                    <figure className="item"><img src={elixirOne} alt="" /></figure>
                </div>
    )
}

export { BoxBadges, BoxInventory }