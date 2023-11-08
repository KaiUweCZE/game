import React from "react";
import professorImage from '../../styles/images/characters/profbloom.webp'

const ProfesorPainter = (props) => {

    return(
        <div className="box__classic">
            <h2>Welcome Here! {props.name}</h2>
            <p>
                Now it's time to take the first steps on your adventure!
            </p>
            <div className='animation-professor'>
                <div className='img-wrapper'>
                    <img src={professorImage} alt="" /> 
                </div>     
                <article>
                    <h2>Prof. Bloom</h2>
                    <p>
                        Are you sure you want to continue your dangerous adventure? If so, click start!
                    </p>
                </article>   
            </div>
        </div>
    )
}


export default ProfesorPainter