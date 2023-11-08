import { useEffect, useState } from 'react'
import UserApi from '../services/api'
import { useSelector } from 'react-redux'

export const newContact = (user, npc) => {
    let data = {
        username: user,
        contact: npc
    }
    UserApi.addContact(data)
    .then(res => console.log("contact was added", res))
    .catch(err => console.error("Failed to add contact", err))
}

export const useGetContacts = () => {
    const [contacts, setContacts] = useState([]);
    const {currentUser} = useSelector((state) => state.user)

    useEffect(() => {
        if (currentUser) {
            UserApi.getContacts({username: currentUser.username})
            .then(res => {
                console.log("Your contacts: ", res)
                setContacts(res.data.contacts);
            })
            .catch(err => console.error("Error occurs", err))
        }

    },[currentUser.username])

    return {contacts}
}