import React from "react";
import { npcCharacters } from "../data/imagesFolder/characterImgs";
import CardNPC from "../components/CardNPC"

const NPC = () => {

    return(
        <>
        <h1>List of NPC's: </h1>
        <div className="container__npc">
            {
                npcCharacters.map((character, index) => {

                    return(
                        // npc card
                        <CardNPC
                        key={index}
                        id = {character.id}
                        image = {character.images[0]}
                        name = {character.name}
                        />
                    )
                })
            }
        </div>
        </>
    )
}

export default NPC