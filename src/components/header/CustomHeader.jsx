import React/*, { useEffect, useState }*/ from 'react'
import { useHistory } from 'react-router-dom'
import {
  MENU_ACTION_TYPES,
  HEADER_CONF
} from './config'
import DisplayOptionProvider from './displayOptionProvider/DisplayOptionProvider'
import Option from './option/Option'
import PropTypes from 'prop-types';
import './style.css'


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