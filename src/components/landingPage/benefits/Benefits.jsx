import React from 'react'
import {
  BENEFITS_CONF
} from './config'
import './style.css'

const Benefits = () => {


  return (
    <div className="containerY pt-5">
      <div className="text-center font-size-x-normal px-2">
        <div
          dangerouslySetInnerHTML={{
            __html: BENEFITS_CONF.titleHtml
          }}
        />
      </div>
      <div className="benefits">
        {
          BENEFITS_CONF.benefits.map((benefit, index) => {
            return (
              <div key={index} className="benefit containerY x-center">
                <div className="image"
                  style={{
                    backgroundImage: `url(${benefit.image})`
                  }}
                />
                <div className="text-center">
                  <span>{ benefit.label }</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )

}

export default Benefits