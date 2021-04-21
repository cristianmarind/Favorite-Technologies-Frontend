import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { startTechsApp } from '../../../state/actions/techsActions'
import PropTypes from 'prop-types';
import TechList from '../techList/TechList'
import Filter from '../filter/Filter'
import { TECH_LIST_MANAGMENT_CONFIG } from './config'
import { FILTER_CONFIG } from '../filter/config'

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
    let techsFilt = JSON.parse(JSON.stringify(techs))
    if (!Number.isNaN(Number.parseFloat(fltr.option)) && fltr.option >= 0 && fltr.option < fltrOptions.length) {
      techsFilt = techsFilt.filter((item) => {
        return item.attrs[TECH_LIST_MANAGMENT_CONFIG.OPTION_ATTR] === fltrOptions[fltr.option].label
      })
    }
    if (fltr.search) {
      techsFilt = techsFilt.filter((item) => {
        console.log(item.attrs[TECH_LIST_MANAGMENT_CONFIG.SEARCH_ATTR]);
        const i = item.attrs[TECH_LIST_MANAGMENT_CONFIG.SEARCH_ATTR]
                    .toString()
                    .toLowerCase()
                    .indexOf(
                        fltr.search
                        .toString()
                        .toLowerCase()
                    )
        return 0 <= i
      })
    }
    if (fltr.order === FILTER_CONFIG.ORDER.ASC.ID) {
      techsFilt = techsFilt.sort((a, b) => {
        const aLabel = a.attrs[TECH_LIST_MANAGMENT_CONFIG.SEARCH_ATTR]
        const bLabel = b.attrs[TECH_LIST_MANAGMENT_CONFIG.SEARCH_ATTR]
        if(aLabel < bLabel) { return -1; }
        if(aLabel > bLabel) { return 1; }
        return 0;
      })
    } else if (fltr.order === FILTER_CONFIG.ORDER.DESC.ID) {
      techsFilt = techsFilt.sort((a, b) => {
        const aLabel = a.attrs[TECH_LIST_MANAGMENT_CONFIG.SEARCH_ATTR]
        const bLabel = b.attrs[TECH_LIST_MANAGMENT_CONFIG.SEARCH_ATTR]
        if(aLabel > bLabel) { return -1; }
        if(aLabel < bLabel) { return 1; }
        return 0;
      })
    }
    if(techsFilt.length === 0) {
      techsFilt = JSON.parse(JSON.stringify(techs))
    }
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
    setTechsFiltred(technologies)
    setFltrOptions(opts)
  }, [technologies])

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