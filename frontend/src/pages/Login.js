import React from "react";
import LoginForm from "../components/LoginForm";


const Login = () => {
    return(
        <div>
            <LoginForm 
                contact= "Username"
                pass= "Password"
                submit= "Login" 
            />
        </div>
    )
}

export default Login