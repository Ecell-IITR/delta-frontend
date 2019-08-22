import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './register/index'
import Dashboard from './dashboard/index'
import Logout from './logout/index'
import Login from './login/index'
import PrivateRoute from './pR'
import { Navbar } from '../../core_containers'
import Profile from './profile/index'
import Opportunities from './opportunities/index'

class StudentIndex extends Component {
  render() {
    const { match } = this.props
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path={`${match.path}/logout`} component={Logout} />
          <Route exact path={`${match.path}/register`} component={Register} />
          <Route exact path={`${match.path}/login`} component={Login} />
          {/* <Switch> */}
          <PrivateRoute path={`${match.path}/`} component={Navbar} />
          <PrivateRoute exact path={`${match.path}/`} component={Dashboard} />
          <PrivateRoute
            exact
            path={`${match.path}/profile`}
            component={Profile}
          />
          <PrivateRoute
            exact
            path={`${match.path}/opportunities`}
            component={Opportunities}
          />
          {/* </Switch> */}
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default StudentIndex
