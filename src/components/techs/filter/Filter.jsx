import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { FILTER_CONFIG } from './config'
import './style.css'

const Filter = ({ filter, onChange, options }) => {
  const [search, setSearch] = useState('')
  const [option, setOption] = useState('')
  const [order, setOrder] = useState('')

  const handleSearchApply = (event) => {
    const val = event.target.value
    const newFilter = {
      search: val,
      option,
      order
    }
    setSearch(val)
    onChange(newFilter)
  }

  const handleOrderApply = (orderId) => {
    let val = orderId
    if (orderId === order) {
      val = ''
    }
    const newFilter = {
      search,
      option,
      order: val
    }
    setOrder(orderId)
    onChange(newFilter)
  }

  const handleOptionSelect = (optId) => {
    let val = optId
    if (optId === option) {
      val = -1
    }
    const newFilter = {
      search,
      option: val,
      order
    }
    setOption(val)
    onChange(newFilter)
  }

  useEffect(() => {
    //setSearch(filter.search)
    setOption(filter.option)
  }, [filter])

  return (
    <div className="filter">
      <div className="mb-2 containerX x-center">
        <div className="input search">
          <div>
            <img src={FILTER_CONFIG.SEARCH.ICON} />
          </div>
          <input
            type="text"
            placeholder={FILTER_CONFIG.SEARCH.PLACEHOLDER}
            value={search}
            onChange={handleSearchApply}
          />
        </div>
      </div>
      <div className="containerX x-center flex-warp">
        <div className="containerX x-center flex-warp">
          <button
            onClick={() => { handleOrderApply(FILTER_CONFIG.ORDER.ASC.ID) }}
            className={`mx-1 mb-1 btn ${order === FILTER_CONFIG.ORDER.ASC.ID ? 'btn-primary-b' : ''}`}
          >
            <div style={{ width: '2em' }}>
              <img
                className="w-100 h-auto"
                src={FILTER_CONFIG.ORDER.ASC.IMAGE}
              />
            </div>

          </button>
          <button
            onClick={() => { handleOrderApply(FILTER_CONFIG.ORDER.DESC.ID) }}
            className={`mx-1 mb-1 btn ${order === FILTER_CONFIG.ORDER.DESC.ID ? 'btn-primary-b' : ''}`}
          >
            <div style={{ width: '2em' }}>
              <img src={FILTER_CONFIG.ORDER.DESC.IMAGE} className="w-100 h-auto" />
            </div>
          </button>
        </div>
        <div className="containerX x-center flex-warp">
          {
            options.map(opt => {
              return (
                <div key={opt.id} className="px-1 pt-1">
                  <button
                    onClick={() => { handleOptionSelect(opt.id) }}
                    className={`btn ${option === opt.id ? 'btn-primary-a' : ''}`}
                  >
                    {opt.label}
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

Filter.propTypes = {
  filter: PropTypes.object,
  onChange: PropTypes.func,
  options: PropTypes.array
}

export default Filter