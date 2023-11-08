import React from "react";
import { npcCharacters } from "../data/DataNPC/npcData";
import CardNPC from "../components/CardNPC"
import { useGetContacts } from "../Functions/ContactFunctions";

const NPC = () => {
    const data = useGetContacts();

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
                        myContacts = {data.contacts}
                        />
                    )
                })
            }
        </div>
        </>
    )
}

export default NPC