import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchUser } from '../actions/fetch-user'

class StudentApp extends Component {
  componentDidMount() {
    const { fetchUserComponent } = this.props
    fetchUserComponent()
  }

  render() {
    const { match } = this.props
    return (
      <>
        <Route
          exact
          path={`${match.path}`}
          component={React.lazy(() => import('./dashboard'))}
        />
        <Route
          path={`${match.path}user/:username`}
          component={React.lazy(() => import('./profile'))}
        />
        <Route
          exact
          path={`${match.path}opportunities`}
          component={React.lazy(() => import('./opportunities'))}
        />
        <Route
          exact
          path={`${match.path}create-post`}
          component={React.lazy(() => import('./createpost'))}
        />
      </>
    )
  }
}

StudentApp.propTypes = {
  match: PropTypes.object,
  fetchUserComponent: PropTypes.func,
}

const mapActionToProps = (dispatch) => {
  return {
    fetchUserComponent: () => {
      return dispatch(fetchUser())
    },
  }
}

export default connect(null, mapActionToProps)(StudentApp)
