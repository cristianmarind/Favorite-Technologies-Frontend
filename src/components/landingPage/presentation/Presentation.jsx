import React from 'react'
import {
  PRESENTATION_CONF
} from './config'
import ResponsiveProvider from '../../../utilities/ResponsiveProvider'

import './style.css'



const Presentation = () => {
  const handleClick = () => {
    window.open(PRESENTATION_CONF.socialNetworks.action.link, '_blank')
  }

  return (
    <ResponsiveProvider
      render={responsiveMode => (
        <div className="presentation">
          <div
            style={{
              backgroundImage: `url(${PRESENTATION_CONF.socialNetworks.backgroundImage[responsiveMode]}`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            className="containerY x-center y-center"
          >
            <div
              className="font-size-large"
              dangerouslySetInnerHTML={{
                __html: PRESENTATION_CONF.socialNetworks.titleHtml
              }}
            />
            <div 
              style={{
                paddingTop: '.5em',
                paddingBottom: '.5em'
              }}
            >
              {
                PRESENTATION_CONF.socialNetworks.networks.map((network, ind) => {
                  return (
                    <div key={ind} className="network containerX x-center">
                      <div className="image">
                        <img src={network.logo} />
                      </div>
                      <div className="label text-white">
                        <span className="font-size-normal">
                          {network.label}
                        </span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="containerX x-center">
              <button 
                onClick={handleClick}
                style={{
                  color: '#fff'
                }}
                className={`btn ${PRESENTATION_CONF.socialNetworks.action.style} font-size-x-normal`}
              >
                {PRESENTATION_CONF.socialNetworks.action.label}
              </button>
            </div>
          </div>
          <div 
            className="bg-ligth containerX x-center y-center text-center font-size-x-normal"
          >
            <div 
              style={{
                paddingLeft: '.5em',
                paddingRight: '.5em'
              }}
              dangerouslySetInnerHTML={{
                __html: PRESENTATION_CONF.text.textHtml
              }}
            />
          </div>
        </div>
      )
      }
    />
  )

}

export default Presentation