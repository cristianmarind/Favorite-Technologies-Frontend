import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { TECHNOLOGIES_ACTIONS, USER_ACTIONS } from './actions/config'

const initialState = {
  technologies: [],
  user: {
    isLogged: false,
    attrs: {}
  }
}

const technologiesReducer = (technologies, action) => {
  switch (action.type) {
    case TECHNOLOGIES_ACTIONS.SET_TECHNOLOGIES: {
      return action.technologies
    }
      
    case TECHNOLOGIES_ACTIONS.TECHNOLOGIE_CHANGE_STATE: {
      const technologie = {
        ...technologies[action.index],
        isFavorite: !technologies[action.index].isFavorite
      }
      return technologies.slice(0, action.index)
        .concat([technologie])
        .concat(technologies.slice(action.index + 1))
    }
      
    default: {
      return technologies
    }
      
  }
}

const userReducer = (user, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_IS_LOGGED: {
      return {
        ...user,
        isLogged: action.isLogged
      }
    }
      
    case USER_ACTIONS.SET_USER_ATTRS: {
      return  {
        ...user,
        attrs: action.attrs
      }
    }
    
    default: {
      return user
    }
  }
}

const getStore = () => {
  return createStore(
    (state, action) => {
      return {
        ...state,
        technologies: technologiesReducer(state.technologies, action),
        user: userReducer(state.user, action),
      }
    },
    initialState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}

export default getStore