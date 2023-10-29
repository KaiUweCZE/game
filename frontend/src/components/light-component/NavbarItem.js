import React from 'react';
import homeIcon from '../../styles/images/home.svg';
import keyIcon from '../../styles/images/key.svg';
import userIcon from '../../styles/images/user.svg';
import { NavLink } from "react-router-dom";


const NavbarItem = (props) => {

    return(
        <figure className='menu__item'>
            <img src={userIcon} alt="" />
            <li><NavLink to="/profile">Profile</NavLink></li>
            
        </figure>
    )
}


export default NavbarItem