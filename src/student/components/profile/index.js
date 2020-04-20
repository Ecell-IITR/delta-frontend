/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchStudentProfile } from '../../actions'
import { SELF_PROFILE, PUBLIC_PROFILE } from '../../constants'
import styles from '../css/profile.module.css'
import Sidebar from './sidebar'
import StudentInfoSection from './student-info-section'

import stylesNew from '../css/profile2.module.css'

class StudentProfile extends Component {
  componentDidMount() {
    const { fetchStudentProfileComponent, match, user } = this.props
    const { params } = match
    fetchStudentProfileComponent(
      user.username === params.username ? SELF_PROFILE : PUBLIC_PROFILE,
    )
  }

  render() {
    const { user, match, studentProfile } = this.props
    return (
      <>
        {studentProfile.isLoading ? (
          <div>Loading....</div>
        ) : (
            <div className={styles.info}>
              <StudentInfoSection studentProfile={studentProfile} user={user} />
              <div className={stylesNew.profile2}>
                <div className={stylesNew.sidebar}>
                  <Sidebar User={user.username} />
                </div>
                <div className={stylesNew.contentBox}>
                  <Switch>
                    <Route
                      exact
                      path={`${match.path}/skills`}
                      component={React.lazy(() => import('./skills'))}
                    />
                    <Route
                      exact
                      path={`${match.path}/resume`}
                      component={React.lazy(() => import('./resume'))}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          )}
      </>
    )
  }
}

StudentProfile.propTypes = {
  studentProfile: PropTypes.object,
  user: PropTypes.object,
  match: PropTypes.object.isRequired,
  fetchStudentProfileComponent: PropTypes.func,
  params: PropTypes.object,
}

function mapDispatchToProps(dispatch) {
  return {
    fetchStudentProfileComponent: (profileType) => {
      dispatch(fetchStudentProfile(profileType))
    },
  }
}

function mapStateToProps(state) {
  return {
    user: state.student.user.user,
    studentProfile: state.student.profile.profile,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile)
