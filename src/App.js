import React from 'react'
import './App.css';
import { Provider } from 'react-redux'
import getStore from './state'

import { BrowserRouter, Switch } from 'react-router-dom'
import { ROUTES } from './utilities/router/config'
import UnloggedRoute from './utilities/router/UnloggedRoute'
import LoggedRoute from './utilities/router/LoggedRoute'

import Login from './pages/Login'
import Signup from './pages/Signup'
import TechList from './pages/TechList'

import AppConnectLS from './utilities/AppConnectLS'


const store = getStore()

function App() {

  return (
    <Provider store={store}>
      <AppConnectLS
        render={() => {
          return (
            <BrowserRouter>
              <Switch>
                <UnloggedRoute 
                  path={ROUTES.LOGIN.PATH}
                  exact={true}
                  render={() => {
                    return <Login />
                  }}
                />
                <UnloggedRoute 
                  path={ROUTES.SIGNUP.PATH}
                  exact={true}
                  render={() => {
                    return <Signup />
                  }}
                />
                <LoggedRoute 
                  path={ROUTES.TECH_LIST.PATH}
                  exact={true}
                  render={() => {
                    return <TechList />
                  }}
                />
                
              </Switch>
            </BrowserRouter>
          )
        }}      
      />
    </Provider>
  );
}

export default App;
