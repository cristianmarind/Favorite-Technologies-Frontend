import { USER_ACTIONS } from '../../appConfiguration'
import { login, signup } from '../../providerServices'
import { setUserAttrsAction } from './userActions'

const TOKEN_KEY_FOR_LS = 'token'

export const setIsLoggedAction = (isLogged) => {
  return {
    type: USER_ACTIONS.SET_IS_LOGGED,
    isLogged
  }
}

export const loginAction = (email, password) => {
  return (dispatch) => {
    login(email, password).then(res => {
      localStorage.setItem(TOKEN_KEY_FOR_LS, res.token)
      dispatch(setIsLoggedAction(true))
    }).catch(err => {
      console.log(err);
    })
  }
}

export const logoutAction = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch(setIsLoggedAction(false))
    dispatch(setUserAttrsAction({}))
  }
}

export const mountAppAuthenticatedAction = () => {
  return (dispatch) => {
    const token = localStorage.getItem(TOKEN_KEY_FOR_LS)
    dispatch(setIsLoggedAction(!!token))
  }
}

export const signupAction = (user) => {
  return (dispatch) => {
    signup(user).then(res => {
      localStorage.setItem(TOKEN_KEY_FOR_LS, res.token)
      dispatch(setUserAttrsAction(user))
      dispatch(setIsLoggedAction(true))
    }).catch(err => {
      console.log(err);
    })
  }
}