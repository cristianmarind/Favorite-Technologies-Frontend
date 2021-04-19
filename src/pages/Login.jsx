import React from 'react'
import { useDispatch } from 'react-redux'

import { loginAction } from '../state/actions/authActions'


const Login = () => {
  const dispatch = useDispatch()
  console.log(0);

  const handleLogin = () => {
    console.log(1);
    dispatch(loginAction('camd1996@gmail.com', '123456'))
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )

}

export default Login