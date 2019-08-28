import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import App from './components/app'
import PropTypes from 'prop-types'
export default class AppRouter extends Component {
  render() {
    const { match } = this.props
    return (
      <React.Fragment>
        <Route path={`${match.path}`} component={App} />
      </React.Fragment>
    )
  }
}
AppRouter.propTypes = {
  match: PropTypes.object.isRequired
}