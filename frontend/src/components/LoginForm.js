import React from 'react';
import "../styles/components.css"

const LoginForm = ({contact, pass, submit}) => {
    return(
        <form className='form__login' action="">
            <div style={{gridArea: "user"}}>
                <legend>{contact}: </legend>
                <input type="text" name="username" id="" />
            </div>
            
            <div style={{gridArea: "password"}}>
                <legend>{pass}: </legend>
                <input type="password" name="password" id="" />
            </div>
            <div className='login' style={{gridArea: "submit"}}>
            <input type="submit" value={submit}/>
            </div>
           
        </form>
    )
}

export default LoginForm