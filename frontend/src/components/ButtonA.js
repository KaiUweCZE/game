import React from 'react'

const ButtonA = ({link}) => {

    return(
        <a className="button__link" href={link}> {link} </a>
    )
}

export default ButtonA