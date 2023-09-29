import UserApi from '../services/api'

export const addPokemonToSix = (username) => (pokemon) => {         
    var data = {
        username: username,
        pokemon: pokemon
    }
    
    UserApi.addToSix(data)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err))    
}