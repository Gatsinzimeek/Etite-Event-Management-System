import {configureStore} from '@reduxjs/toolkit';
import authReducer from './Slices/authslice';

const store  = configureStore({
    reducer: {
        auth: authReducer,

    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware(),
    devTools: true

})

export default store 