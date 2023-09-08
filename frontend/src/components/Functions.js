import { useDispatch } from 'react-redux';
import { signOut } from '../redux/user/userSlice';
import UserApi from "../services/api"
import { useState, useEffect } from 'react';

export const useLogOut = () => {
    const dispatch = useDispatch();

    const logOut = () => {
        UserApi.logoutUser()
        .then(() => { 
            console.log("logout was successfully");
            dispatch(signOut());
        })
        .catch((e) => console.error(e))
    }
    
    return logOut;
}

export const renderSkills = ({level, abilities, hp, attack}) => {
    const randomNumber = (range) => {
        let min = range[0]
        let max = range[1]
        
        return Math.floor(Math.random() * (max-min)+min);
    }

    const randomAbilities = (abilities) => {

        let abilityIndex = Math.floor(Math.random() * abilities.length)
        let ability = abilities[abilityIndex]

        return ability
    }

    const hpRandom = randomNumber(hp);
    const attackRandom = randomNumber(attack);
    const abilityRandom = randomAbilities(abilities)

    const skills = {
        level,
        abilities: abilityRandom,
        hp: hpRandom,
        attack: attackRandom
    }
    console.log(skills);
    
    return skills;
}

export const useCompleteCampaign = (username) => {
    const completeCampaign = (campaignName) => {
        var data = {
            username,
            campaignName
        }
        UserApi.nextCampaign(data)
        .then(res => 
            console.log("Completed!"))
        .catch( err => {
            console.error(err);
        })
    }

    return { completeCampaign }
}

export const checkCampaign = (username, campaignName) =>{
    var data = {
        username,
        campaignName
    }
    return UserApi.checkCampaign(data)
    .then(res => {
        console.log(res.data.message);
        if (res.data.message === "Campaign is completed") {
            return true
        } else{
            return false;
        }
    })
    .catch(err => {
        console.error(err);
        return false
    })
}