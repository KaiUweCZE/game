import React from "react";


const ImagePainter = ({ pokemons }) => {

    return(
        <div className="box__painter">
            {
                pokemons.map((pokemon,index) => {
                    const {image, content} = pokemon
                    return(
                        <fieldset key={index} >
                            <img src={image} alt="" />
                            <p>{content}</p>
                        </fieldset>
                        
                    )
                    
                })
            }
        </div>
    )
}


export default ImagePainter