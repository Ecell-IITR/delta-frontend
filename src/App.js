import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Notifications from 'react-notify-toast'
import PrivateRoute from './routeUtils/privateRoute'
import FreeRoute from './routeUtils/freeRoute'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading.....</div>}>
        <Notifications />
        <BrowserRouter>
          <>
            <PrivateRoute
              path="/"
              component={React.lazy(() => import('coreContainers/navbar'))}
            />
            <Switch>
              {/* <Route
              exact
              path="/register"
              component={React.lazy(() =>
                import('./student/components/onboarding'),
              )}
            /> */}
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
                component={React.lazy(() =>
                  import('./student/components/app.js'),
                )}
              />
              {/* <PrivateRoute
              path="/company"
              component={React.lazy(() => import('./company'))}
            /> */}
            </Switch>
          </>
        </BrowserRouter>
      </Suspense>
    )
  }
}
