import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AutenticationProvider from '../AutenticationProvider'
import { ROUTES } from './config'
import PropTypes from 'prop-types';

function UnloggedRoute({ render, path, ...otherProps }) {

  return (
    <Route 
        path={path}
        {...otherProps}
    >
        <AutenticationProvider 
            render={(isLogged) => {
                return !isLogged?render():<Redirect to={ROUTES.TECH_LIST.PATH} />
            }}
        />
    </Route>
  );
}

UnloggedRoute.propTypes = {
  path: PropTypes.string,
  render: PropTypes.func
}


export default UnloggedRoute;
