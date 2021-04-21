import React from 'react'
import PropTypes from 'prop-types';
import {
  TECH_STATE_CONFIGURATION
} from './config'

const TechState = ({ isFavorite }) => {
  return (
    <div className="imageState cursor-pointer">
      {
        isFavorite ? (
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