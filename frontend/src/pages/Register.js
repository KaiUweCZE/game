import React, {useState} from "react";
import LoginForm from "../components/LoginForm";
import UserApi from "../services/api"
import ErrorMessage from "../components/ErrorMessage";

const Register = () => {
    const [user, setUser] = useState({ username: "", password: ""});
    const [registred, setRegistred] = useState(false)
    const [error, setError] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }))
        console.log(e.target.value);
    }

    const saveUser = (e) => {
        e.preventDefault()
        var data = {
            username: user.username,
            password: user.password
        }
        UserApi.createUser(data)
        .then(res => {
            console.log('User was registred!');
            setRegistred(true)
    })
        .catch( err => {
            console.log(err)
            setError(true)
        })
    }
    
    return(
        <div className="container__base">
           { registred ? <h2>Registred</h2>
            :
            <LoginForm 
                fun= {saveUser}
                handler={handleChange}
                contact= "Username" 
                pass= "Password"
                submit= "Register"
            />}
            <>{error && <ErrorMessage message= "Ops! There is a mistake due registration."/>}</>
        </div>
    )
}

export default Register