import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Dashboard from './dashboard/index'
import { Navbar } from '../../core_containers'
import Profile from './profile/index'
import Opportunities from './opportunities/index'

class AuthenticativeRoutes extends Component {
  render() {
    const { match } = this.props
    return (
      <React.Fragment>
        <Navbar />
        <Route exact path={`${match.path}/`} component={Dashboard} />
        <Route path={`${match.path}profile`} component={Profile} />
        <Route
          exact
          path={`${match.path}opportunities`}
          component={Opportunities}
        />
      </React.Fragment>
    )
  }
}

AuthenticativeRoutes.propTypes = {
  match: PropTypes.object
}

export default AuthenticativeRoutes
