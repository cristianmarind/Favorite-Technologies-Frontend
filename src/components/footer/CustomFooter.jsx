import React from 'react'
import {
  FOOTER_CONF
} from './config'

const CustomFooter = () => {


  return (
    <div className="containerX x-center pt-5">
      <div style={{ maxWidth: '10em' }}>
        <img 
          src={FOOTER_CONF.imageSrc} 
          className="w-100 h-auto" 
        />
      </div>
    </div>
  )

}

export default CustomFooter