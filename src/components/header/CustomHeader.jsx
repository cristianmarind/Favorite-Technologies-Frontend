import React/*, { useEffect, useState }*/ from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import {
  MENU_ACTION_TYPES,
  DISPLAY_CONDITION_TYPES,
  STYLE_TYPES,
  HEADER_CONF
} from './config'
import AutenticationProvider from '../../utilities/AutenticationProvider'
import PropTypes from 'prop-types';
import './style.css'

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

const Option = ({ style, label }) => {
  switch (style.type) {
    case STYLE_TYPES.BASIC: {
      return <div className="containerX y-center option">{ label }</div>
    }
    case STYLE_TYPES.BUTTON_PRIMARY_OUTLINE: {
      return (
        <div className="option">
          <button className={`btn ${STYLE_TYPES.BUTTON_PRIMARY_OUTLINE}`}>
            {label}
          </button>
        </div>
      )
    }
  }
  return null
}
Option.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string
}

const CustomHeader = () => {
  const history = useHistory()

  const handleClick = (opt) => {
    const action = opt.action
    switch (action.type) {
      case MENU_ACTION_TYPES.ROUTE_TO: {
        history.push(action.path)
        return
      }

      case MENU_ACTION_TYPES.MOVE_TO_ELEMENT: {
        let y = document.getElementById(`${action.elementId}`)?.getBoundingClientRect().top
        window.scrollTo(0, y - 100);
        return;
      }
        
    }
  }

  return (
    <div className="custom-header">
      <div className="image">
        <img src={HEADER_CONF.imageSrc} />
      </div>
      <div className="options">
        {
          HEADER_CONF.options.map((opt, ind) => {
            return (
              <DisplayOptionProvider
                key={ind}
                displayCondition={opt.displayCondition}
                render={(display) => {
                  return display?(
                    <div 
                      onClick={() => { handleClick(opt) }}
                      className="containerX y-center cursor-pointer"
                    >
                      <Option 
                        style={opt.style}
                        label={opt.label}
                      />
                    </div>
                  ):null
                }}
              />
            )
          })
        }
      </div>
    </div>
  )
}
Option.CustomHeader = {
  history: PropTypes.object
}


export default CustomHeader