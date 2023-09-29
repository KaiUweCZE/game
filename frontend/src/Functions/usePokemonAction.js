import { useEffect, useState } from 'react';
import UserApi from '../services/api';
import { useSelector } from "react-redux";


const usePokemonActions = () => {
    const [pokemons, setPokemons] = useState([]);
    const {currentUser} = useSelector((state) => state.user)
  
    const removeFromSix = async (pokemon) => {
      await UserApi.removeFromSix({username: currentUser.username, mySix: pokemon })
      .then((res) => {
        getMySix();
    })
      .catch((err) => console.error(err))  
    };
  
    const getMySix = () => {
      UserApi.getSix({username: currentUser.username})
      .then((res) => {
          setPokemons(res.data.mySix);
      })
      .catch((err) => console.error(err));
    };
  
    useEffect(() => {
      getMySix();     
    }, []);
  
    return { pokemons, removeFromSix, getMySix };
  };
  
  export default usePokemonActions;