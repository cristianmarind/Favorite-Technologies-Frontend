import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './theme/index.css';
import { Provider } from 'react-redux'
import getStore from './state'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ROUTES } from './utilities/router/config'
import UnloggedRoute from './utilities/router/UnloggedRoute'
import LoggedRoute from './utilities/router/LoggedRoute'

import CustomHeader from './components/header/CustomHeader'
import CustomFooter from './components/footer/CustomFooter'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import TechList from './pages/TechList'

import AppConnectLS from './utilities/AppConnectLS'

const store = getStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppConnectLS
        render={() => {
          return (
            
            <BrowserRouter>
              <div id="app" className="containerY">
                <div style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0
                }}>
                  <CustomHeader />
                </div>
                <Switch>
                  <Route 
                    path={ROUTES.LANDING_PAGE.PATH}
                    exact={true}
                    render={() => {
                      return <LandingPage />
                    }}
                  />
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
                <CustomFooter />
              </div>
            </BrowserRouter>
              
            
          )
        }}      
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
