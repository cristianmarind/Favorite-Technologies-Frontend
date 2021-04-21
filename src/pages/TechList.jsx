import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux'
import TechListManagment from '../components/techs/techListManagment/TechListManagment'
import { logoutAction } from '../state/actions/authActions'

const TechList = ({ stateUser }) => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(stateUser)

  useEffect(() => {
    setUser(stateUser)
  }, [stateUser])

  const handleLogout = () => {
    console.log('logoutAction');
    dispatch(logoutAction())
  }

  return (
    <div className="pt-5">
      <div>TechList</div>
      
      <button onClick={handleLogout}>Logout</button>
      <TechListManagment />
      <div>
        {JSON.stringify(user)}
      </div>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    stateUser: state.user
  }
}

TechList.propTypes = {
  stateUser: PropTypes.object,
}

export default connect(mapStateToProps)(TechList)
