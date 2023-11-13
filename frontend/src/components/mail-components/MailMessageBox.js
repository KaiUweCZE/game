import React from "react";


//this component returns messages from npc (used in Mail page)
const MailMessageBox = (props) => {

    return(
        <div className="box__message">
            {
                props.messages.map((message) => {

                    return(
                    <article key={message._id} className={message.name == 'user'? 'message__user' : 'message__npc'}>
                        <h2>{message.name}</h2>
                        <p>{message.text}</p>
                    </article>
                    )
                })
            }
        </div>
    )
}

export default MailMessageBox
