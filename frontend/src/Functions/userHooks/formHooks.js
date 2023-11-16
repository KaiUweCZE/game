import { useSelector, useDispatch } from "react-redux";
import UserApi from '../../services/api'
import { signOut } from "../../redux/user/userSlice";

export const useLogOut = () => {
    const dispatch = useDispatch();

    const logOut = () => {
        UserApi.logoutUser()
        .then(() => { 
            console.log("logout was successfully");
            dispatch(signOut());
        })
        .catch((e) => console.error(e))
    }
    
    return logOut;
}
