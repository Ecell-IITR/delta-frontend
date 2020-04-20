// eslint-disable-next-line react/prop-types
import React, { Component } from 'react'
// import Loadable from 'react-loadable'
import UploadResume from './uploadResume'
import { connect } from 'react-redux'
import styles from './index.css'
import PropTypes from 'prop-types'

// const UploadResume = Loadable({
//   loader: () => import('./uploadResume'),
//   loading: () => <div>Loading ...</div>
// })

// const ViewResume = Loadable({
//   loader: () => import('./viewResume'),
//   loading: () => <div>Loading ...</div>
// })

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { studentProfile } = this.props;
    return (
      <div className={styles.resume}>
        <div className={styles.content}>
          {studentProfile.resume ? (
            <iframe
              src={`http://localhost:8000${studentProfile.resume}`}
              width="100%"
              height="100%"
            ></iframe>
          ) : (
              null
            )}
        </div>
        {studentProfile.resume ? (
          <div className={styles.optionsBar}>
            <div class={styles.viewResume}>
              <a
                href={`http://localhost:8000${studentProfile.resume}`}
                class={styles.viewButton}
                target="__blank"
              >
                View Resume
              </a>
            </div>
            <div class={styles.viewResume}>
              <a href="" class={styles.viewButton} target="__blank">
                Update Resume
              </a>
              {/*<UploadResume />*/}
            </div>
          </div>
        ) : (<UploadResume />)}
      </div>
    )
  }
}

Resume.propTypes = {
  studentProfile: PropTypes.object,
  file: PropTypes.string,
}

function mapStateToProps(state) {
  return {
    file: state.student.resume.file,
    studentProfile: state.student.profile.profile,
  }
}

export default connect(mapStateToProps, null)(Resume)
