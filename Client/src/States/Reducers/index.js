import { combineReducers } from "redux";
import AuthReducer from './Auth/Auth';

const Reducers = combineReducers({
    user: AuthReducer,
})

export default Reducers;