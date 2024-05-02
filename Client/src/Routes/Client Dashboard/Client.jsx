import { UsersContext } from '../../Context/User.Context'
import { useContext } from 'react'
const Client = () => {
  const {user} = useContext(UsersContext)
  return (
    <div>
      <p>client</p>
      {
        user
      }
    </div>
  )
}

export default Client
