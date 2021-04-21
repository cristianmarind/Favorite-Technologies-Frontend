import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {
  STYLE_TYPES
} from '../config'
import './style.css'

const Option = ({ style, label, technologies }) => {

  const [favoriteTechsCount, setFavoriteTechsCount] = useState(0)

  useEffect(() => {
    const opts = technologies
      .filter(t => t.isFavorite)
    setFavoriteTechsCount(opts.length)
  }, [technologies])

  const render = () => {
    switch (style.type) {
      case STYLE_TYPES.BASIC: {
        return <div className="containerX y-center option">{label}</div>
      }
      case STYLE_TYPES.BUTTON_PRIMARY_OUTLINE: {
        return (
          <div className="option">
            <button className={`btn ${STYLE_TYPES.BUTTON_PRIMARY_OUTLINE}`}>
              {label}
            </button>
          </div>
        )
      }
      case STYLE_TYPES.BUTTON_PRIMARY_B_OUTLINE: {
        return (
          <div className="option">
            <button className={`btn ${STYLE_TYPES.BUTTON_PRIMARY_B_OUTLINE}`}>
              {label}
            </button>
          </div>
        )
      }

      case STYLE_TYPES.TECHS_SELECTED: {
        return (
          <div className="option">
            <button className={`btn ${STYLE_TYPES.BUTTON_PRIMARY_OUTLINE}`}>
              {label}
              {
                favoriteTechsCount > 0 ? (
                  <span className="techCount">{favoriteTechsCount}</span>
                ) : null
              }
            </button>
          </div>
        )
      }
    }
    return null
  }

  return render()
}
Option.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string,
  technologies: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    technologies: state.technologies
  }
}

export default connect(mapStateToProps)(Option)