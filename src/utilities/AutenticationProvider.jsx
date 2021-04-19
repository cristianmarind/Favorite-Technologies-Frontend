import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AutenticationProvider = ({ isAuthenticated, render }) => {
  const [isLogged, setIsLogged] = useState(isAuthenticated)

  useEffect(() => {
    setIsLogged(isAuthenticated)
  }, [isAuthenticated])
  

  return (
    <div>
        { render(isLogged) }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isLogged
  }
}

AutenticationProvider.propTypes = {
    isAuthenticated: PropTypes.bool,
    render: PropTypes.func
}

export default connect(mapStateToProps)(AutenticationProvider)