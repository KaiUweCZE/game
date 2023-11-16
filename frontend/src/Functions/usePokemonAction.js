import { useEffect, useState } from 'react';
import UserApi from '../services/api';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';


export const usePokemonActions = () => {
    const [pokemons, setPokemons] = useState([]);
    const {currentUser} = useSelector((state) => state.user)
  
    const removeFromSix = async (pokemon) => {
      try {
        await UserApi.removeFromSix({username: currentUser.username, mySix: pokemon })
        await getMySix()
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    }

    const getMySix = async () => {
      try {
        const res = await UserApi.getSix({username: currentUser.username});
        setPokemons(res.data.mySix);
      } catch (err) {
        console.error(err);
      }
    }
  
    useEffect(() => {
      getMySix();     
    }, []);
  
    return { pokemons, removeFromSix, getMySix };
};

export const useCatchPokemon = () => {
  const dispatch = useDispatch();

  return async (pokemon, user) => {
    let data = {
      pokemon: {
        name: pokemon.name,
        skills: {
          level: pokemon.level,
          abilities: pokemon.abilities,
          hp: pokemon.hp,
          damage: pokemon.damage,
          speed: pokemon.speed,
          energy: pokemon.energy
        }
      },
      trainer: user.username
    };

    try {
      const response = await UserApi.obtainPokemon(data);
      const lastAddedPokemon = response.data.newPokemonId;
      await learnNewAttack(pokemon.attacks, lastAddedPokemon);

      if (user.mySix && user.mySix.length < 6) {
        addPokemonToSix(user.username)(lastAddedPokemon);
        dispatch(updateMySix([...user.mySix, lastAddedPokemon]));
        console.log('Pokemon successfully added');
      } else {
        console.log('You already have 6 Pokemons, so this one will be sent to the box');
      }
    } catch (error) {
      console.error('Error while catching Pokemon:', error);
    }
  };
};


  // this functions dispatch all your Pokemons
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

// this functions dispatch pokemons in your Six
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


//this functions dispatch pokemons in your Box
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

export const getOnePokemon = (id) => {
  return UserApi.getOnePokemon(id).then(res => {
    return res.data.pokemon;
  }).catch(err => {
    console.error(err);
    throw err;
  })
}