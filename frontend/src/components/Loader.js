import React from "react";
import { pika } from '../data/charImages'

const Loader = () => {

    return(
        <div className="loader">
            <div className="loader-background">
                <img src={pika} alt="" />
                <span>Loading</span>    
            </div>
                
        </div>
    )
}


export default Loader