import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useLogOut from "./Functions";

const Navbar = () => {
    const {currentUser} = useSelector((state) => state.user)
    const logOut = useLogOut();
    return(
        <header>
            <div className="logo">
                <span>PokeLogo</span>
            </div>
            <nav className="navigation">
                <ul className="menu">
                    <li className="menu__item"><NavLink to="/">Home</NavLink></li>
                    {
                    currentUser ? 
                    <>
                        <li className="menu__item" onClick={logOut}><a>Logout</a></li>
                    </>
                    :
                    <>
                        <li className="menu__item"><NavLink to="/login">Login</NavLink></li>
                        <li className="menu__item"><NavLink to="/register">Register</NavLink></li>
                    </>
                    }
                </ul>
            </nav>
            <div className="box__icons">
                <span>icons</span>
            </div>
        </header>
    )
}

export default Navbar