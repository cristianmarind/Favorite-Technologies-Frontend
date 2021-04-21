import React/*, { useEffect, useState }*/ from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  MENU_ACTION_TYPES,
  HEADER_CONF
} from './config'
import { logoutAction } from '../../../state/actions/authActions'
import DisplayOptionProvider from './displayOptionProvider/DisplayOptionProvider'
import Option from './option/Option'
import PropTypes from 'prop-types';
import './style.css'

const scrollTo = (elementId) => {
  let y = document.getElementById(`${elementId}`)?.getBoundingClientRect().top
  window.scrollTo(0, y - 100);
}

const CustomHeader = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = (opt) => {
    const action = opt.action
    switch (action.type) {
      case MENU_ACTION_TYPES.ROUTE_TO: {
        history.push(action.path)
        if (action.alternativeElementId) {
          scrollTo(action.alternativeElementId)
        }
        return
      }

      case MENU_ACTION_TYPES.MOVE_TO_ELEMENT: {
        scrollTo(action.elementId)
        return;
      }
        
      case MENU_ACTION_TYPES.LOGOUT: {
        dispatch(logoutAction())
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