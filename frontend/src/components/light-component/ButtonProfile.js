import React from "react";
import { useNavigate } from "react-router-dom";


const ButtonProfile = ({content, func, path}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        if(func) {
            func()
        } else if (path){
            navigate(path)
        }
    }

    return(
        <button className="btn__primary" onClick={handleClick}>
            <span></span>
                {content}
            <span></span>
        </button>
    )
}

export default ButtonProfile