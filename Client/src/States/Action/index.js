export const CreateUser = (user) => {
    return (dispatch) => {
         dispatch({ type: 'IsLoggedIn', payload: user})
    };
};