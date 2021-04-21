import React from 'react'
import {
  FOOTER_CONF
} from './config'

const FOOTER_STYLE = { maxWidth: '8em', with: '100%' }

const CustomFooter = () => {

  return (
    <div className="containerX x-center">
      <div style={FOOTER_STYLE}>
        <img 
          src={FOOTER_CONF.imageSrc} 
          className="w-100 h-auto" 
        />
      </div>
    </div>
  )

}

export default CustomFooter