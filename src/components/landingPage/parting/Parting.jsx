import React from 'react'
import {
  PARTING_CONF
} from './config'
import ResponsiveProvider from '../../../utilities/ResponsiveProvider'

const SEPARATOR_STYLE = { maxWidth: '50em', marginBottom: '2em' }
const BACKGROUND_STYLE = {
  backgroundSize: 'cover',
  backgroundPposition: 'center',
  width: '100%',
  paddingBottom: '3em'
}

const Parting = () => {

  const handleClick = () => {
    window.open(PARTING_CONF.action.link, '_blank')
  }

  return (
    <ResponsiveProvider
      render={responsiveMode => (
        <div className="containerY x-center">
          <div style={SEPARATOR_STYLE} >
            <img className="w-100 h-auto" src="https://www.pngkey.com/png/full/55-556458_web-page-divider-png-ivory.png" />
          </div>
          <div
            style={{
              ...BACKGROUND_STYLE,
              backgroundImage: `url(${PARTING_CONF.backgroundImage[responsiveMode]}`
            }}
          >
            <div
              className="font-size-large text-center"
              dangerouslySetInnerHTML={{
                __html: PARTING_CONF.titleHTML
              }}
            />
            <div className="font-size-normal text-center pt-1">
              {PARTING_CONF.text}
            </div>
            <div className="containerX x-center pt-3">
              <button
                onClick={handleClick}
                className={`btn ${PARTING_CONF.action.style}`}
              >
                {PARTING_CONF.action.label}
              </button>
            </div>
          </div>
        </div>
      )}
    />
  )

}

export default Parting