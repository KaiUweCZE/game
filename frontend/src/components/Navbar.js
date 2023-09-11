import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLogOut } from "../Functions/Functions";

const Navbar = () => {
    const {currentUser} = useSelector((state) => state.user)
    const logOut = useLogOut();
    return(
        <header>
            <div className="logo">
                <span>Goloa</span>
            </div>
            <nav className="navigation">
                <ul className="menu">
                    <li className="menu__item"><NavLink to="/">Home</NavLink></li>
                    {
                    currentUser ? 
                    <>
                        <li className="menu__item">
                            <NavLink to="/crossroad">Crossroad</NavLink>
                        </li>
                        <li className="menu__item"><NavLink to="/profile">Profile</NavLink></li>
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
            
        </header>
    )
}

export default Navbar