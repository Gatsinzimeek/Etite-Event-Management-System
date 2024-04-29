import React from 'react'
import { userContext } from '../../Context/UserContext'
import { useContext } from 'react'
const Client = () => {
  const {user} = useContext(userContext)
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
