/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import EmptyScreen from 'coreContainers/empty-screen'
import { fetchUser } from '../actions/fetch-user'

export function StudentApp({ fetchUserComponent, user, match, userLoading }) {
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      fetchUserComponent()
    }
  }, [])

  return (
    <>
      {userLoading ? (
        <div>Loading......</div>
      ) : Object.keys(user).length === 0 ? (
        <EmptyScreen />
      ) : (
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            component={() => <Redirect to="/opportunities" />}
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
          <Route
            component={() => (
              <EmptyScreen text="Try searching for another page!" />
            )}
          />
        </Switch>
      )}
    </>
  )
}

StudentApp.propTypes = {
  match: PropTypes.object,
  fetchUserComponent: PropTypes.func,
  user: PropTypes.object,
  userLoading: PropTypes.bool,
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
    userLoading: state.student.user.isLoading,
  }
}
export default connect(mapStateToProps, mapActionToProps)(StudentApp)
