import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UserInfo: localStorage.getItem('UserInfo') ? JSON.parse(localStorage.getItem('UserInfo')) : null,
}

const authslice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredential: (state, action) =>{
            state.UserInfo = action.payload;
            localStorage.setItem('UserInfo', JSON.stringify(action.payload))
        },
        logout: (state,action) => {
            state.UserInfo = null,
            localStorage.removeItem('UserInfo');
        }
    }
})

export const { setCredential, logout } = authslice.actions;

export default authslice.reducer;