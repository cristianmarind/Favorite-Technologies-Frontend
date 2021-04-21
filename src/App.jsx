import React from 'react';
import { Provider } from 'react-redux'
import getStore from './state'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ROUTES } from './utilities/router/config'
import UnloggedRoute from './utilities/router/UnloggedRoute'
import LoggedRoute from './utilities/router/LoggedRoute'
import CustomHeader from './components/generals/header/CustomHeader'
import CustomFooter from './components/generals/footer/CustomFooter'
import LandingPage from './pages/LandingPage'
//import Login from './pages/Login'
import Signup from './pages/Signup'
import TechList from './pages/TechList'
import AppConnectLS from './utilities/AppConnectLS'
import './theme/index.css';


const store = getStore()

const App = () => {

  return (
    <Provider store={store}>
      <AppConnectLS
        render={() => {
          return (

            <BrowserRouter>
              <div id="app" className="app">
                <div className="customHeader">
                  <CustomHeader />
                </div>
                <div
                  style={{
                    zIndex: 1
                  }}
                  className="pt-5">
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
                        return <Signup />
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
                </div>
                <div style={{
                  zIndex: 1
                }}>
                  <CustomFooter />
                </div>

              </div>
            </BrowserRouter>


          )
        }}
      />
    </Provider>
  )
}


export default App