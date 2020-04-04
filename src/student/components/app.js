import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import OnBoardingIndex from './onboarding/index'
import Logout from './logout/index'
import Login from './login/index'
import AuthenticativeRoutes from './authRoutes'
import PrivateRoute from './pR'

class StudentIndex extends Component {
  render() {
    const { match } = this.props
    return (
      <>
        <Switch>
          <Route
            exact
            path={`${match.path}/register`}
            component={OnBoardingIndex}
          />
          <Route exact path={`${match.path}/login`} component={Login} />
          <Route exact path={`${match.path}/logout`} component={Logout} />
          <PrivateRoute
            path={`${match.path}/`}
            component={AuthenticativeRoutes}
          />
        </Switch>
      </>
    )
  }
}

StudentIndex.propTypes = {
  match: PropTypes.object,
}

export default StudentIndex
