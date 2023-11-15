import React from "react";


const BoxEnemy = ({backgroundImage, enemyImg}) => {


    return(
        <div className="battle-field" style={{backgroundImage: `url(${backgroundImage})`}}>
            <img className="combined-animation" src={enemyImg} alt="" />                        
        </div>
    )
}

export default BoxEnemy