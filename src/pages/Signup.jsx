import React from 'react'
import { useDispatch } from 'react-redux'

import { signupAction } from '../state/actions/authActions'


const Signup = () => {
  const dispatch = useDispatch()

  const handleSignup = () => {
    dispatch(signupAction({
        "name": "Joe",
        "last_name": "Doe",
        "country": "argentina",
        "province": "buenos_aires",
        "mail": "joe.doe@gmail.com",
        "phone": "47468900",
        "password": "abc12345678"
    }))
  }

  return (
    <div>
      <button onClick={handleSignup}>Signup</button>
    </div>
  )

}

export default Signup