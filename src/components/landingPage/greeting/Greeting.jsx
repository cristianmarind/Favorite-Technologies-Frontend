import React from 'react'
import {
  GREETING_CONF
} from './config'
import ResponsiveProvider from '../../../utilities/ResponsiveProvider'
import './style.css'


const Greeting = () => {

  return (
    <ResponsiveProvider 
      render={responsiveMode => (
        <div style={{
          backgroundImage: `url(${GREETING_CONF.backgroundImage[responsiveMode]}`,
          height: '60vh',
          paddingTop: '20vh',
          backgroundSize: 'cover'
        }}>
          <div 
            className="containerX y-center"
            style={{
              backgroundImage: `url(${GREETING_CONF.imageConfig[responsiveMode]}`,
              height: '50vh',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPositionX: '80%'
            }}
          >
            <div 
              className="font-size-x-large greetingHTML"
              dangerouslySetInnerHTML={{
                __html: GREETING_CONF.greetingHTML
              }}
            />
          </div>
        </div>
      )}
    />
    
  )

}

export default Greeting