import React, {useState} from "react";
import LoginForm from "../components/LoginForm";
import UserApi from "../services/api";
import {Link, useNavigate} from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const [user, setUser] = useState({username: "", password: ""})
    const [login, setLogin] = useState(false)
    const { loading, error } = useSelector((state) => state.user)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value}))
    }

    const loginUser = async (e) => {
        e.preventDefault()
        try {
            dispatch(signInStart());
            const response = await UserApi.loginUser(user);
            console.log("User logged in", response.data);
            dispatch(signInSuccess(response.data));
            navigate("/start")
        } catch (error) {
            console.log("error due logging", error);
            dispatch(signInFailure(error))
        }
    }
    return(
        <div className="container__base">
            <LoginForm
                fun= {loginUser}
                handler={handleChange}
                contact= "Username" 
                pass= "Password"
                submit= "Login"
            />
            {error && <ErrorMessage message="Login has not been successfull... :("/>}
        </div>
    )
}

export default Login