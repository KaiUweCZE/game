import axios from "axios";

const URL = process.env.REACT_APP_BACKEND_API

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
    getBoxPokemon(data){
        return axios.get(`${URL}pokemonsInBox`, { params: data })
    }
    removeFromSix(data){
        return axios.delete(`${URL}removeFromSix`, { params: data})
    }
    learnAttack(data){
        return axios.post(`${URL}addAttack`, data)
    }
    setYourLocation(data){
        return axios.post(`${URL}setLocation`, data)
    }
    getItems(data){
        return axios.get(`${URL}items`, { params: data })
    }
    addItem(data){
        return axios.post(`${URL}getItem`, data)
    }
    useItem(data){
        return axios.patch(`${URL}useItem`, data)
    }
    getContacts(data){
        return axios.get(`${URL}contacts`, {params: data})
    }
    addContact(data){
        return axios.post(`${URL}addContact`, data)
    }
    getMails(data){
        return axios.get(`${URL}message`, {params: data})
    }
    addMessage(data){
        return axios.get(`${URL}message`, data)
    }
    getConversation(data){
        return axios.get(`${URL}conversation`, {params: data})
    }
}

export default new UserApi()
