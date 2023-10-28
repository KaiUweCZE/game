import React from "react";
import { mapImg } from "../../data/importedImages";

const MyMap = () => {
    const positions = Array.from({ length: 25 }, (_, index) => index);

    return(
        <>
        <h2>Mapa</h2>
        <div className="container__map" style={{backgroundImage: `url(${mapImg})`}}>
            {
                positions.map((pos) => {
                    return(
                    <div key={pos} className="position"></div>
                    )   
                })
                
            }
        </div>
        </>
    )
}


export default MyMap