import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers:{
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.error = false;
            state.currentUser = action.payload;
        },
        loginFaild: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutUser: (state) => {
            state.currentUser = null;
            state.isFetching = false;
            state.error = false;
        },
    } 
})

// export our reducers and method;
export const {loginStart, loginSuccess, loginFaild, logoutUser} = userSlice.actions;
export default userSlice.reducer;