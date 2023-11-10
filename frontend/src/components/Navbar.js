import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLogOut } from "../Functions/userHooks/formHooks";
import NavbarItem from "./light-component/NavbarItem";
import homeIcon from '../styles/images/home.svg';
import keyIcon from '../styles/images/key.svg';
import userIcon from '../styles/images/user.svg';
import registerIcon from '../styles/images/register.svg'
import mapIcon from '../styles/images/map.svg'
import letterIcon from '../styles/images/letter-open.svg'

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
                        <NavbarItem title="Home" to="/" icon={homeIcon}/>
                    {
                    currentUser ? 
                    <>
                        <NavbarItem title="Explore" to="/onroad" icon={mapIcon}/>
                        <NavbarItem title="Profile" to="/profile" icon={userIcon}/>
                        <NavbarItem title="m@il" to="/mail" icon={letterIcon}/>
                        <NavbarItem  title="LogOut" icon={keyIcon} func={logOut}/>
                    
                    </>
                    :
                    <>
                        <NavbarItem title="Login" to="/login" icon={keyIcon} />
                        <NavbarItem title="Register" to="/register" icon={registerIcon} />
                    </>
                    }
                </ul>
            </nav>
            
        </header>
    )
}

export default Navbar