import React from 'react'
import {
  PARTING_CONF
} from './config'

const Parting = () => {

  const handleClick = () => {
    window.open(PARTING_CONF.action.link, '_blank')
  }

  return (
    <div className="containerY x-center">
      <div>
        <img className="w-100 h-auto" src="https://www.pngkey.com/png/full/55-556458_web-page-divider-png-ivory.png" />
      </div>
      <div 
        className="font-size-large text-center"
        dangerouslySetInnerHTML={{
          __html: PARTING_CONF.titleHTML
        }}
      />
      <div className="font-size-normal text-center pt-1">
        { PARTING_CONF.text }
      </div>
      <div className="pt-3">
        <button 
          onClick={handleClick}
          className={`btn ${PARTING_CONF.action.style}`}
        >
          { PARTING_CONF.action.label  }
        </button>
      </div>
    </div>
  )

}

export default Parting