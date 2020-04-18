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
    const { match,user } = this.props
    return (
      <>
        
        <Route
          exact
          path={`${match.path}`}
          component={React.lazy(() => import('./dashboard'))}
        />
        <Route
          path={`${match.path}user/${user.username}`}
          component={React.lazy(() => import('./profile'))}
        />
        <Route
          exact
          path={`${match.path}opportunities`}
          component={React.lazy(() => import('./opportunities'))}
        />
        <Route
          exact
          path={`${match.path}createPost/internship`}
          component={React.lazy(() => import('./createpost/internship'))}
        />
        <Route
          exact
          path={`${match.path}createPost/project`}
          component={React.lazy(() => import('./createpost/project'))}
        />
        <Route
          exact
          path={`${match.path}createPost/competition`}
          component={React.lazy(() => import('./createpost/competition'))}
        />
      </>
    )
  }
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

function mapStateToProps(state) {
  return {
    user: state.student.user.user,
  
  }
}

export default connect(mapStateToProps, mapActionToProps)(StudentApp)
