import React, { useEffect, useState } from "react";
import '../styles/mailStyle.css';
import { useSelector } from "react-redux";
import { useGetConversation, useGetMail } from "../Functions/MailFunction";
import MailMenu from "../components/mail-components/MailMenu";
import MailMessageBox from "../components/mail-components/MailMessageBox"

// This feature will bring into play the ability to interact with NPCs (after each turn there will be some 
//probability that they will challenge you to a duel, for example) 
const Mail = () => {
    const [npcName, setNpcName] = useState("prof Bloom")
    const {currentUser} = useSelector(state => state.user)

    const data = useGetMail(currentUser.username)
    const conversation = useGetConversation(currentUser.username, npcName)
    
    const handleString = (name) =>{
        setNpcName(name)
    }

    return(
        <div className="container__mail">
            <MailMenu npc={data} func={handleString} />
            <MailMessageBox messages={conversation} />
        </div>
    )
}


export default Mail