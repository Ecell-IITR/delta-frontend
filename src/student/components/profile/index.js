import React, { Component } from 'react'
import { Progress, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchUser, fetchProfile } from '../../actions/index'
import { hasToken } from '../../utils'
import { TOKEN_TYPE } from '../../constants/index'
import styles from '../css/profile.module.css'
import PropTypes from 'prop-types'
import Profile2 from './profile2'
// import { Image } from "../../../core_containers";

class StudentProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    if (hasToken(TOKEN_TYPE)) {
      this.props.fetchUser(this.callback)
    }
  }
  callback = () => {
    this.props.fetchProfile(this.props.user.username)
  }
  render() {
    console.log(this.props)
    const student = this.props.info
    const { user } = this.props
    return (
      <React.Fragment>
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
        <Profile2 match={this.props.match} />
      </React.Fragment>
    )
  }
}

StudentProfile.propTypes = {
  info: PropTypes.objectOf(
    PropTypes.shape({
      branch: PropTypes.string,
      year: PropTypes.string,
      course: PropTypes.string,
      roll: PropTypes.number,
      src: PropTypes.string,
      profilePercentage: PropTypes.number
    })
  ),
  user: PropTypes.shape({
    username: PropTypes.string,
    userDetails: PropTypes.string
  }).isRequired,
  match: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProfile: username => {
      dispatch(fetchProfile(username))
    },
    fetchUser: callback => {
      dispatch(fetchUser(callback))
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.studentReducer.user.userDetails,
    info: state.studentReducer.profile.info
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentProfile)
