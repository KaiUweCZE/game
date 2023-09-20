import React, { forwardRef, useEffect, useState } from "react";
import { elixirOne } from "../../data/importedImages";
import UserApi from "../../services/api"
import {badge01, badge02, badge03, badge04, badge05, badge06, badge07, badge08, badge09} from "../../data/imagesFolder/itemsImages"

const badgeMaping = {
    'badge01': badge01,
    'badge02': badge02,
    'badge03': badge03,
    'badge04': badge04,
    'badge05': badge05,
    'badge06': badge06,
    'badge07': badge07,
    'badge08': badge08,
    'badge09': badge09,
}

const Arrow = forwardRef(({src, fun}, ref) => {
    return <img className="arrow" ref={ref} src={src} onClick={fun} />
})

const BoxBadges = ({name}) => {
    const [badges, setBadges] = useState([])

    const getAboutUser = async () => {
        const userBadges = (await UserApi.aboutUser({ username: name})).data.user.badges
        console.log("Nějaká ta data: ", userBadges);
        setBadges(userBadges)
    }

    useEffect(() => {
        getAboutUser()
    },[])

    return(
        <div className="box__badges">
            <h3>Badges: </h3>
            <figure>
                {
                    badges.map((badge, index) => {
                        const badgeImage = badgeMaping[badge]
                        return(
                            <img key={index} src={badgeImage} alt="" />
                            
                        )
                    })
                }
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

export { BoxBadges, BoxInventory, Arrow }