import React from 'react'
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'
import AutenticationProvider from '../../../utilities/AutenticationProvider'
import {
  DISPLAY_CONDITION_TYPES
} from '../config'

const DisplayOptionProvider = ({ render, displayCondition }) => {
  const { pathname } = useLocation()

  return (
    <AutenticationProvider
      render={isLogged => {
        switch (displayCondition.type) {
          case DISPLAY_CONDITION_TYPES.NO_CONDITION: {
            return render(true)
          }
          case DISPLAY_CONDITION_TYPES.APP_IN_ROUTE: {
            return render(pathname === displayCondition.path)
          }
          case DISPLAY_CONDITION_TYPES.USER_LOGGED: {
            return render(isLogged)
          }
          case DISPLAY_CONDITION_TYPES.USER_UNLOGGED: {
            return render(!isLogged)
          }
          default: {
            return render(true)
          }
        }
      }}
    />
  )
}
DisplayOptionProvider.propTypes = {
  displayCondition: PropTypes.object,
  render: PropTypes.func
}


export default DisplayOptionProvider