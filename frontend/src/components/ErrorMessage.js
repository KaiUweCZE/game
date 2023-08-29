import React from 'react'
import '../styles/components.css'

const ErrorMessage = (props) => {
    return(
        <span className='Error-Message'>{props.message}</span>
    )
}

export default ErrorMessage