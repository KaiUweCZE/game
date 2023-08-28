import React from "react";
import LoginForm from "../components/LoginForm";

const Register = () => {
    return(
        <div>
            <LoginForm 
                contact= "Username"
                pass= "Password"
                submit= "Register"
            />
        </div>
    )
}

export default Register