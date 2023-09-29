import {useEffect, useState} from "react";
import UserApi from '../services/api'


export const useStatePage = (initialPage = -1, actions = {}) => {
    const [page, setPage] = useState(initialPage);
  
    const incrementPage = (...args) => {
      if (page >= Object.keys(actions).length - 1) {
        console.log("Last page reached");
      } else {
        setPage(prevPage => prevPage + 1);
        if (actions[page + 1]) {
          actions[page + 1](...args);
        }
      }
    };
  
    const decrementPage = () => {
      if (page <= -1) {
        console.log("First page reached");
      } else {
        setPage(prevPage => prevPage - 1);
      }
    };
  
    return [page, incrementPage, decrementPage];
};


export const useUserData = (username) => {
    const [userData, setUserData] = useState(null);

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const { data } = await UserApi.aboutUser({ username });
                setUserData(data);
            } catch (error) {
                console.error("An error occurred", error);
            }
        }
        fetchData()
    }, [username])
    return userData
}
