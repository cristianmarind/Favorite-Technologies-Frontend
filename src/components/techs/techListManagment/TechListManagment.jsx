import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { startTechsApp } from '../../../state/actions/techsActions'
import PropTypes from 'prop-types';
import TechList from '../techList/TechList'
import Filter from '../filter/Filter'
import { TECH_LIST_MANAGMENT_CONFIG } from './config'
import { filter as techFilter } from '../../../utilities'

function uniquesFilter(res, index, self) {
  return self.indexOf(res) === index;
}

const TechListManagment = ({ technologies }) => {
  const [techs, setTechs] = useState([])
  const [techsFiltred, setTechsFiltred] = useState([])
  const [filter, setFilter] = useState({})
  const [fltrOptions, setFltrOptions] = useState([])
  const dispatch = useDispatch()

  const handleFilterChange = (fltr) => {
    let techsFilt = techFilter(techs, fltr, fltrOptions, TECH_LIST_MANAGMENT_CONFIG.OPTION_ATTR, TECH_LIST_MANAGMENT_CONFIG.SEARCH_ATTR)
    setTechsFiltred(techsFilt)
    setFilter(fltr)
  }

  useEffect(() => {
    dispatch(startTechsApp())
  }, [dispatch])

  useEffect(() => {
    const opts = technologies
      .map(t => t.attrs[TECH_LIST_MANAGMENT_CONFIG.OPTION_ATTR])
      .filter(uniquesFilter)
      .map((t, i) => {
        return {
          id: i,
          label: t
        }
      })
    setTechs(technologies)
    setFltrOptions(opts)
  }, [technologies])

  useEffect(() => {
    const techsFilt = techFilter(technologies, filter, fltrOptions, TECH_LIST_MANAGMENT_CONFIG.OPTION_ATTR, TECH_LIST_MANAGMENT_CONFIG.SEARCH_ATTR)
    setTechsFiltred(techsFilt)
  }, [techs, filter, fltrOptions])

  return (
    <div>
      <div className="px-3">
        <Filter 
          filter={filter} 
          onChange={handleFilterChange} 
          options={fltrOptions}
        />
        <TechList technologies={techsFiltred} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    technologies: state.technologies
  }
}

TechListManagment.propTypes = {
  technologies: PropTypes.array,
}

export default connect(mapStateToProps)(TechListManagment)