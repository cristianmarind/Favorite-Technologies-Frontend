import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import {
  TECH_STATE_CONFIGURATION
} from './config'

const TechState = ({ isFavorite }) => {
  const [condition, setCondition] = useState('')

  useEffect(() => {
    setCondition(isFavorite)
  }, [isFavorite])

  return (
    <div className="imageState cursor-pointer">
      {
        condition ? (
          <img
            className="w-100 h-auto"
            src={TECH_STATE_CONFIGURATION.ACTIVE}
          />
        ) : (
          <img
            className="w-100 h-auto"
            src={TECH_STATE_CONFIGURATION.INACTIVE}
            />
                )
            }


    </div>
  )
}

TechState.propTypes = {
  isFavorite: PropTypes.bool,
}

export default TechState