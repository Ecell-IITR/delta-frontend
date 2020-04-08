/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { TOKEN_TYPE } from '../globalConstants'

const FreeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !localStorage.getItem(TOKEN_TYPE) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
)

FreeRoute.propTypes = {
  history: PropTypes.object.isRequired,
  component: PropTypes.element.isRequired,
}

export default FreeRoute
