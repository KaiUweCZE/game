import React from "react";
import { useNavigate } from "react-router-dom";


const ButtonProfile = (props) => {
    const navigate = useNavigate()

    const handleClick = () => {
        if(props.func) {
            props.func()
        } else if (props.path){
            navigate(props.path)
        }
    }

    return(
        <button className="btn__primary" onClick={handleClick}>
            <span></span>
                {props.content}
            <span></span>
        </button>
    )
}

export default ButtonProfile