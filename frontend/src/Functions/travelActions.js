import { startTraveling } from "../redux/user/userSlice";

// Starts the user's traveling journey by setting the travel end time and other details
export const startUserTraveling = (dispatch, duration, destination) => {
    // Calculate the travel end time by adding the duration to the current time.
    const travelEndTime = new Date().getTime() + duration;

    // Dispatch the `startTraveling` action to update the Redux state.
    dispatch(startTraveling({ end: travelEndTime, time: duration, destination }));
}

export const endUserLocation = () => {

}


export const setNewLocation = () => {

}