import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
  hasMadeFirstChoice: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signOut: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },
        setImage: (state, action) => {
            if (state.currentUser) {
                state.currentUser.img = action.payload;
            }
        },
        setLocation: (state, action) => {
            if (state.currentUser) {
                state.currentUser.location = action.payload;
            }
        },
        updateMySix: (state, action) => {
            if (state.currentUser) {
                state.currentUser.mySix = action.payload;
            }
        },
        startTraveling: (state, action) => {
            state.traveling = true;
            state.travelEndTime = action.payload.end;
            state.travelTime = action.payload.time; 
        },
        endTraveling: (state) => {
            state.traveling = false;
            state.travelEndTime = null;
            state.travelTime = null;
        }
    }
});

export const { signInStart, signInSuccess, signInFailure, signOut, setImage, updateMySix, setLocation, startTraveling, endTraveling } = userSlice.actions;

export default userSlice.reducer;