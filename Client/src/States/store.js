import {configureStore} from '@reduxjs/toolkit';
import authReducer from './Slices/authslice';
import {apiSlice} from './Slices/ApiSlice';
const store  = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true

})

export default store 