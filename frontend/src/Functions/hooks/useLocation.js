import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserApi from '../../services/api'
import { setLocation } from "../../redux/user/userSlice";

export const setYourLocation = (username, location, dispatch) => {
    const data = { username, location}
    UserApi.setYourLocation(data)
        .then( res => { dispatch(setLocation(location)) })
        .catch( err => console.error('Failed with image', err))
}

