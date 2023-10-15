import React from "react";
import { useParams } from "react-router-dom";
import { npcCharacters } from "../../data/imagesFolder/characterImgs";
import BoxTalks from "../../components/BoxTalks"
import UserInfoBox from "../../components/ProfileComp/UserInfoBox";

const ActionNPC = () => {
    const { id } = useParams();
    console.log(id);
    const character = npcCharacters.find((c) => c.id === Number(id));
    console.log(character);
    return(
        <>
        <div className="container__profile">
            <img className="profile-img" src={character.images[0]} alt="" />
            <UserInfoBox 
            name={character.name}>
                <div className="your-contact">
                    <h3>Known pokemons: </h3>
                </div>
                
            </UserInfoBox>
        </div>
        {
            character.action? <BoxTalks talker={character.name} contents = {character.action?.map(action => action.talks)} answers = {character.action?.map(action => action.name)}/> : ""
        }
        
        </>
    )
}


export default ActionNPC