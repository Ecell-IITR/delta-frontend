import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
// import EmptyScreen from 'coreContainers/empty-screen'
import Navbar from 'coreContainers/navbar'
import PrivateRoute from './routeUtils/privateRoute'
import FreeRoute from './routeUtils/freeRoute'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <>
        <Route path="/" component={Navbar} />
        <Switch>
          <FreeRoute
            exact
            path="/oauth/"
            component={React.lazy(() => import('./auth/oauth/channeli'))}
          />
          <FreeRoute
            exact
            path="/login"
            component={React.lazy(() => import('./auth/login'))}
          />
          <Route
            exact
            path="/logout"
            component={React.lazy(() => import('./auth/logout'))}
          />
          <PrivateRoute
            path="/"
            component={React.lazy(() => import('./student/components/app.js'))}
          />
          {/* <PrivateRoute
              path="/company"
              component={React.lazy(() => import('./company'))}
            /> */}
        </Switch>
      </>
    )
  }
}
