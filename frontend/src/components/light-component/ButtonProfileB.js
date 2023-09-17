import React from "react";
import { useNavigate } from "react-router-dom";


const ButtonProfileB = ({content, func, path}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        if(func) {
            func()
        } else if (path){
            navigate(path)
        }
    }

    console.log(content, func, path);
    return(
        <button className="button__profile" onClick={handleClick}>{content}</button>
    )
}

export default ButtonProfileB