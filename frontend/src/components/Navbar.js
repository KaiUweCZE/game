import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return(
        <header>
            <div className="logo">
                <span>PokeLogo</span>
            </div>
            <nav className="navigation">
                <ul className="menu">
                    <li className="menu__item"><NavLink to="/">Home</NavLink></li>
                    <li className="menu__item"><NavLink to="/login">Login</NavLink></li>
                    <li className="menu__item"><NavLink to="/register">Register</NavLink></li>
                </ul>
            </nav>
            <div className="box__icons">
                <span>icons</span>
            </div>
        </header>
    )
}

export default Navbar