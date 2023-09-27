import { setImage } from '../redux/user/userSlice';
import UserApi from '../services/api'

export const  updateProfileImage = (username, img, dispatch) => {
    const data = { username, img};
    UserApi.profileImage(data)
        .then( res => { dispatch(setImage(img)) })
        .catch( err => console.error('Failed with image', err));
}

// this could be unnecessary
export const navigateToProfile = (name, image, navigate) => {
    navigate(`/profile?name=${name}&image=${image}`)
}

