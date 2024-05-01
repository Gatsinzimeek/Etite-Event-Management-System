import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
const PrivateRoute = () => {
    const {user} = useContext(UserContext)
    return (
      <div>
        {
          console.log(user)
        }
      </div>
  )
}

export default PrivateRoute;
