import { useEffect, useState } from 'react'
import UserApi from '../services/api'

export const addItem = async (user, item) => {
    UserApi
}

export const useGetItems = (user) => {
    const [items, setItems] = useState([])

    useEffect(() => {
      console.log("Effect running for user:", user);

      const fetchItems = async() => {
        try {
          console.log("Before API call for user:", user);
          const res = await UserApi.getItems({username: user});
          console.log("This data will be send: ", user, res.data.items);
          setItems(res.data.items);
        } catch (err) {
          console.log("User is: ",user);
          console.log("Where is an error? and user: ", user);
          console.error(err);
      }
      }

      if (user) {
        fetchItems();
      }
      
    }, [user]);

    return {items};
}

export const useItem = async () => {

}
