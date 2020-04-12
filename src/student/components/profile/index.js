import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Progress, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchProfile } from '../../actions/index'
import styles from '../css/profile.module.css'
import Sidebar from './sidebar'
import styles_1 from '../css/profile2.module.css'
class StudentProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { user, fetchProfileComponent } = this.props
    if (user && user.username) {
      fetchProfileComponent(user.username)
    }
  }

  render() {
    const { user, match, student } = this.props
    return (
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
              <span className={styles['student-name']}>{user.username}</span>
              <span className={styles['student-branch']}>
                {student.branch + '    .' + student.year}
              </span>
              <span className={styles.roll}>
                {student.course + '. ' + student.roll}
              </span>
              <div className={styles.icon1}>
                <Icon name="circle" size="huge" />
              </div>
            </div>
            <div className={styles['student-bio']}>{student.bio}</div>
            <div className={styles.icons}>
              <Icon name="circle" size="big" />
              <Icon name="circle" size="big" />
              <Icon name="circle" size="big" />
            </div>
          </div>
          <div className={styles['profile-status']}>
            <div className={styles['profile-percent']}>
              <span>{student.profilePercentage}% profile completed</span>
              <Progress
                percent={student.profilePercentage}
                progress
                color="blue"
              />
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
        <div className={styles_1.profile2}>
          <div className={styles_1.sidebar}>
            <Sidebar />
          </div>
          <div className={styles_1.contentBox}>
            <Switch>
              <Route
                exact
                path={`${match.path}/skills`}
                component={React.lazy(() => import('../addSkill'))}
              />
              <Route
                exact
                path={`${match.path}/resume`}
                component={React.lazy(() => import('../resume'))}
              />
            </Switch>
          </div>
        </div>
      </>
    )
  }
}

StudentProfile.propTypes = {
  student: PropTypes.objectOf(
    PropTypes.shape({
      branch: PropTypes.string,
      year: PropTypes.string,
      course: PropTypes.string,
      roll: PropTypes.number,
      src: PropTypes.string,
      profilePercentage: PropTypes.number,
    }),
  ),
  user: PropTypes.shape({
    username: PropTypes.string,
    userDetails: PropTypes.string,
  }).isRequired,
  match: PropTypes.object.isRequired,
  fetchProfileComponent: PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProfileComponent: (username) => {
      dispatch(fetchProfile(username))
    },
  }
}

function mapStateToProps(state) {
  return {
    user: state.student.user.userDetails,
    student: state.student.profile.info,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile)
