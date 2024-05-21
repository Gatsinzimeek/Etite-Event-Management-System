
const initialState = {
    currentUser: 'Ernest',
}


const Reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'IsLoggedIn':
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            return state;
    }
};

export default Reducer;