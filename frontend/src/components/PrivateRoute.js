import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import {useSelector} from "react-redux"

const PrivateRoute = () => {
    const {currentUser} = useSelector((state) => state.user)
    return(
        <>
            {currentUser ? <h2>HOUHOU</h2> : <Navigate to="/register"/>}
        </>
    )
}

export default PrivateRoute