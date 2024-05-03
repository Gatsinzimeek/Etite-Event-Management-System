import { useContext } from "react";
import { Navigate } from 'react-router-dom'
import { UsersContext } from "../../Context/User.Context";
const PrivateRoute = ({children}) => {
    const {user} = useContext(UsersContext)
    if(!user) {
      console.log(user)
    return children 
    }
    return <Navigate to='/'/>
}

export default PrivateRoute;
