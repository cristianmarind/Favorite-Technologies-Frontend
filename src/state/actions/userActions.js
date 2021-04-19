import { USER_ACTIONS } from '../../appConfiguration'

export const setUserAttrsAction = (attrs) => {
  return {
    type: USER_ACTIONS.SET_USER_ATTRS,
    attrs
  }
}