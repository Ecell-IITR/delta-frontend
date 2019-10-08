import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { TOKEN_TYPE } from '../constants/index'
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem(TOKEN_TYPE) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/student/login" />
      )
    }
  />
)

PrivateRoute.propTypes = {
  history: PropTypes.object.isRequired,
  component: PropTypes.element.isRequired
}

export default PrivateRoute
