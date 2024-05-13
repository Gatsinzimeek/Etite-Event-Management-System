
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({children}) => {
    const {user} = useContext(UsersContext)
    if(!user) {
      console.log(user)
    return children 
    }
    return <Navigate to='/'/>
}

export default PrivateRoute;
