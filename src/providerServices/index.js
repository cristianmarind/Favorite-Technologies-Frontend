import { BACKEND_API } from "../appConfiguration"

export const login = async (email, password) => {
  try {
    const response = await fetch(BACKEND_API.LOGIN.END_POINT, {
      method: BACKEND_API.LOGIN.METHOD,
      body: JSON.stringify({ email, password })
    })
    return response.json()
  } catch (error) {
    console.log(error);
    return error
  }
}

export const signup = async (user) => {
  try {
    const response = await fetch(BACKEND_API.SIGNUP.END_POINT, {
      method: BACKEND_API.SIGNUP.METHOD,
      body: JSON.stringify(user)
    })
    return response.json()
  } catch (error) {
    console.log(error);
    return error
  }
}

export const listAllTechs = async () => {
  try {
    const response = await fetch(BACKEND_API.LIST_TECHS.END_POINT, {
      method: BACKEND_API.LIST_TECHS.METHOD
    })
    return response.json()
  } catch (error) {
    console.log(error);
    return error
  }
}