import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../redux/user/userSlice';
import UserApi from "../services/api"
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { pokemonsData } from '../data/pokemons';

//timer

export const useTimer = (callback, interval) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current()
        }

        if (interval !== null){
            const id = setInterval(tick,interval);
            return () => clearInterval(id)
        }
    }, [interval])
}

export const choosePokemon = (pokemon, setActivePokemon, setStartBattle) => {
    const pokemonData = pokemonsData.find(e => e.name === pokemon.name);
    const pokemonImg = pokemonData.img;
    const onePokemon = { pokemon, pokemonImg };
    setActivePokemon(onePokemon);
    setStartBattle(true);
}

export const useLoader = () => {
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)   
    }, [])
    
    return { loading, setLoading }
}

export const useMyPokemon = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true);
    const {currentUser} = useSelector((state)=> state.user)

    const getPokemons = () => {
        UserApi.getYourPokemons({username: currentUser.username})
        .then((res) => {
            setPokemons(res.data.pokemon)
            setLoading(false);
        })
        .catch((err) => console.error(err));
        setLoading(false);
    }

    useEffect(() => {
        getPokemons() 
    }, []);

    return {pokemons, loading}
}

export const useMySix = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true);
    const {currentUser} = useSelector((state)=> state.user)

    const getMySix = () => {
        UserApi.getSix({username: currentUser.username})
        .then( (res) => {
            setPokemons(res.data.mySix)
            setLoading(false);
        })
        .catch((err) => console.error(err))
        setLoading(false);
    }

    useEffect(() => {
        getMySix()     
    }, []);

    return {pokemons, loading}
}

export const useToBattle = (name) => {
    const navigate = useNavigate()

    const toBattle = () => {
        navigate("/battle", { state: { from: name }});
    }
    
    return toBattle
};

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

// will be deleted
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

/*get pokemons whose are in box */
export const getBoxPokemons = (username) => {
    console.log("tohle je ", username);
    return new Promise((resolve, reject) => {
        UserApi.getBoxPokemon({username})
        .then((res) => {
        resolve(res.data.pokemon)
    })
        .catch((err) => {
        console.error(err)
        reject(null)
    });
    })
   
}

export const counterI = () => {
    const [i, setI] = useState(0)


}