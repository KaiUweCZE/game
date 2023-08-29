import React from 'react';
import "../styles/components.css"

const LoginForm = ({contact, pass, submit, fun, handler}) => {
    return(
        <form className='form__login' onSubmit={fun}>
            <div style={{gridArea: "user"}}>
                <legend>{contact}: </legend>
                <input type="text" name="username" onChange={handler} />
            </div>
            
            <div style={{gridArea: "password"}}>
                <legend>{pass}: </legend>
                <input type="password" name="password" onChange={handler} />
            </div>
            <div className='login' style={{gridArea: "submit"}}>
            <input type="submit" value={submit}/>
            </div>    
        </form>
    )
}

export default LoginForm