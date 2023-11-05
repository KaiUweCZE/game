import React, { forwardRef, useEffect, useState } from "react";
import { elixirOne } from "../../data/importedImages";
import UserApi from "../../services/api"
import {badge01, badge02, badge03, badge04, badge05, badge06, badge07, badge08, badge09} from "../../data/imagesFolder/itemsImages"
import { useGetItems } from "../../Functions/ItemsFunc";
import { othersItemData } from "../../data/DataItems/itemsData";

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

const Arrow2 = ({src, fun}) => {
    return <img className="arrow" src={src} onClick={fun} />
}

const BoxBadges = ({name}) => {
    const [badges, setBadges] = useState([])

    const getAboutUser = async () => {
        const userBadges = (await UserApi.aboutUser({ username: name})).data.user?.badges || [];
        console.log("Nějaká ta data: ", userBadges);
        userBadges ? setBadges(userBadges) : setBadges([])
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



const BoxInventory = ({username}) =>{
    const [itemsImg, setItemsImg] = useState([])
    const { items } = useGetItems(username);

    useEffect(() => {
        console.log("Your items: ", items);
    },[items])

    return(
        <div className="box__items">
            {Object.entries(items).map(([key, value]) => (
                <figure key={key}>
                    <img src={ othersItemData.find(e => e.name === `${key}`).img} />
                    <figcaption>{value}</figcaption>
                </figure>
            ))}
        </div>
        
    )
}

/*
{
                items.map((item, index) => {

                    return(
                        <li key={index}>{item}</li>
                    )
                })
            }
*/

export { BoxBadges, BoxInventory, Arrow }