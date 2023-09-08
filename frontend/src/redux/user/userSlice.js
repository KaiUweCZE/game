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
        addPokemon: (state, action) =>{
            if (state.currentUser) {
                if (!state.currentUser.pokemons){
                    state.currentUser.pokemons = [];
                }
                state.currentUser.pokemons.push(action.payload)
            }
        },
        firstChoice: (state) => {
            state.hasMadeFirstChoice = true;           
        }
    }
});

export const { signInStart, signInSuccess, signInFailure, signOut, addPokemon, firstChoice } = userSlice.actions;

export default userSlice.reducer;