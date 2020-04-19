/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchStudentProfile } from '../../actions'
import { SELF_PROFILE, PUBLIC_PROFILE } from '../../constants'
import styles from '../css/profile.module.css'
import Sidebar from './sidebar'

import stylesNew from '../css/profile2.module.css'

class StudentProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

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
            <>
              <div className={styles.info}>
                <div className={styles['student-img']}>
                  {/* <Image
            className={styles.image}
            src={student.img_src}
            size={student.img_size}
          /> */}
                </div>
                <div className={styles['student-info']}>
                  <div className={styles['student-personal-info']}>
                    <span className={styles['student-name']}>
                      {user.username}
                    </span>
                    <span className={styles['student-branch']}>
                      {studentProfile.branch + '    .' + studentProfile.year}
                    </span>
                    <span className={styles.roll}>
                      {studentProfile.course + '. ' + studentProfile.roll}
                    </span>
                    <div className={styles.icon1}>
                      <Icon name="circle" size="huge" />
                    </div>
                  </div>
                  <div className={styles['student-bio']}>
                    {studentProfile.bio}
                  </div>
                  <div className={styles.icons}>
                    <Icon name="circle" size="big" />
                    <Icon name="circle" size="big" />
                    <Icon name="circle" size="big" />
                  </div>
                </div>
                <div className={styles['profile-status']}>
                  <div className={styles['profile-percent']}>
                    <span>
                      {studentProfile.profilePercentage}% profile completed
                  </span>
                    {/* <Progress
                      percent={studentProfile.profilePercentage}
                      progress
                      color="blue"
                    /> */}
                  </div>
                  <div className={styles.label}>
                    <div className={styles.label_1}>
                      <span>Following 36</span>
                      <Icon name="circle" size="big" />
                    </div>
                    <div className={styles.label_2}>
                      <span>Available</span>
                      <Icon name="circle" size="big" />
                    </div>
                  </div>
                </div>
              </div>
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
            </>
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
