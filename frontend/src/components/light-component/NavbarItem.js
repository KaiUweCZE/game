import React from 'react';
import { NavLink } from "react-router-dom";


const NavbarItem = (props) => {
    
    return(
        <figure className='menu__item'>
            <img src={props.icon} alt="" />
            <li onClick={props.func}><NavLink to={props.to} >{props.title}</NavLink></li>
            
        </figure>
    )
}


export default NavbarItem