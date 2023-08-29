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
}

export default new UserApi()