import axios from "axios";

const URL = process.env.REACT_APP_BACKEND_API
console.log(process.env.REACT_APP_BACKEND_API)

class UserApi{
    createUser(data){
        return axios.post(`${URL}register`, data)
    }
    loginUser(data){
        return axios.post(`${URL}login`, data)
    }
    logoutUser(){
        return axios.get(`${URL}logout`)
    }
    profileImage(data){
        return axios.post(`${URL}imageProfile`, data)
    }
    obtainPokemon(data){
        return axios.post(`${URL}addPokemon`, data)
    }
    checkCampaign(data){
        return axios.get(`${URL}checkCampaign`, { params: data })
    }
    nextCampaign(data){
        return axios.post(`${URL}nextCampaign`, data)
    }
    aboutUser(data){
        return axios.get(`${URL}user`, { params: data })
    }
    getYourPokemons(data){
        return axios.get(`${URL}myPokemons`, {params: data})
    }
    addToSix(data){
        return axios.post(`${URL}addToSix`, data)
    }
    getSix(data){
        return axios.get(`${URL}mySix`, { params: data })
    }
    removeFromSix(data){
        return axios.delete(`${URL}removeFromSix`, data)
    }
}

export default new UserApi()