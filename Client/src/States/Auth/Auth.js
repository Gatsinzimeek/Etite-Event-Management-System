import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
}

export const UserAuth = createSlice({
    name: 'IsLoggedIn',
    initialState,
    reducers: {
        
    }
})