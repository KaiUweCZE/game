import { useDispatch } from 'react-redux';
import { signOut } from '../redux/user/userSlice';
import UserApi from "../services/api"

const useLogOut = () => {
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
export default useLogOut