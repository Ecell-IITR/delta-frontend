import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import App from './components/app'

export default class AppRouter extends Component {
  render() {
    const { match } = this.props
    return (
      <>
        <Route path={`${match.path}`} component={App} />
      </>
    )
  }
}
AppRouter.propTypes = {
  match: PropTypes.object.isRequired,
}
