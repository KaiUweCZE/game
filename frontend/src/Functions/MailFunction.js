import { useEffect, useState } from 'react'
import UserApi from '../services/api'

export const useGetMail = (user) => {
    const [mails, setMails] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await UserApi.getMails({ username: user})
                setMails(res.data.mail)
            } catch (error) {
                console.error('Error fetching mails:', error);
            }
        };

        if (user) {
            fetchData();
        }
    },[user]);

    return mails;
}

export const useGetConversation = (user, npc) => {
    const [conversation, setConversation] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await UserApi.getConversation({username: user, npc: npc})
                setConversation(res.data.conversation)        
            } catch (error) {
                console.error('Error fetching mails:', error);
            };
        }

        if(user && npc){
            fetchData()
        }

    }, [npc])

    return conversation
}