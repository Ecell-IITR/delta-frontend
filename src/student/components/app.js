/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchUser } from '../actions/fetch-user'

export function StudentApp({ fetchUserComponent, user, match }) {
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      fetchUserComponent()
    }
  }, [])

  return (
    <>
      {/* <Route
        exact
        path={`${match.path}`}
        component={() => <Redirect to='/opportunities' />}
      /> */}
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
      <Route
        exact
        path={`${match.path}more/organisations`}
        component={React.lazy(() => import('./organisation/index'))}
      />
      <Route
        exact
        path={`${match.path}more/organisations/following`}
        component={React.lazy(() => import('./organisation/index'))}
      />
    </>
  )
}

StudentApp.propTypes = {
  match: PropTypes.object,
  fetchUserComponent: PropTypes.func,
  user: PropTypes.object,
}

const mapActionToProps = (dispatch) => {
  return {
    fetchUserComponent: () => {
      return dispatch(fetchUser())
    },
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.student.user.user,
  }
}
export default connect(mapStateToProps, mapActionToProps)(StudentApp)
