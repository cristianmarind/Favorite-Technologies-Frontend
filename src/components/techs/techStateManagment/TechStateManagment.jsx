import React from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { changeTechState } from '../../../state/actions/techsActions'
import TechState from '../techState/TechState'

const TechStateManagment = ({ isFavorite, techId, tech }) => {
  let dispatch = useDispatch()

  const handleChangeState = () => {
    dispatch(changeTechState(techId, tech, !isFavorite))
  }

  return (
    <div onClick={handleChangeState}>
      <TechState isFavorite={isFavorite} />
    </div>
  )
}

TechStateManagment.propTypes = {
  isFavorite: PropTypes.bool,
  techId: PropTypes.number,
  tech: PropTypes.string
}

export default TechStateManagment