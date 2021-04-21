import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { TECH_INFO_LABELS } from './config'
import TechStateManagment from '../techStateManagment/TechStateManagment'

import './style.css'

const TechList = ({ technologies }) => {
  const [techs, setTechs] = useState([])

  useEffect(() => {
    setTechs(technologies)
  }, [technologies])

  return (
    <div className="containerY">
      <div className="px-3 techs">
        {
          techs.map((tech) => {
            return (
              <div key={tech.id} className="tech">
                <div className="adm">
                  <TechStateManagment 
                    isFavorite={tech.isFavorite}
                    techId={tech.id} 
                    tech={tech.attrs.tech}
                  />
                </div>
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${tech.attrs.logo})`
                  }}
                />
                <div className="content">
                  <span>
                    <b>
                      {TECH_INFO_LABELS.TECH}
                    </b>
                    <span>
                      {tech.attrs.tech}
                    </span>
                  </span>
                  <span>
                    <b>
                      {TECH_INFO_LABELS.TYPE}
                    </b>
                    <span>
                      {tech.attrs.type}
                    </span>
                  </span>
                  <span>
                    <b>
                      {TECH_INFO_LABELS.LANGUAGE}
                    </b>
                    <span>
                      {tech.attrs.language}
                    </span>
                  </span>
                  <span>
                    <b>
                      {TECH_INFO_LABELS.AUTHOR}
                    </b>
                    <span>
                      {tech.attrs.author}
                    </span>
                  </span>
                  <span>
                    <b>
                      {TECH_INFO_LABELS.LICENCE}
                    </b>
                    <span>
                      {tech.attrs.license}
                    </span>
                  </span>

                  <span>
                    <b>
                      {TECH_INFO_LABELS.YEAR}
                    </b>
                    <span>
                      {tech.attrs.year}
                    </span>
                  </span>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="containerX x-center">
        <button className="btn btn-primary-a">
          {techs.length}
        </button>
      </div>
    </div>
  )
}


TechList.propTypes = {
  technologies: PropTypes.array,
}

export default TechList