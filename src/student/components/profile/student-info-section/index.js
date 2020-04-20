/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import styles from './index.css'

class StudentInfoSection extends Component {
  render() {
    const { user, studentProfile } = this.props
    return (
      <div className={styles['profile']}>
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
              {studentProfile.branch + '    .' + studentProfile.year}
            </span>
            <span className={styles.roll}>
              {studentProfile.course + '. ' + studentProfile.roll}
            </span>
            <div className={styles.icon1}>
              <Icon name="circle" size="huge" />
            </div>
          </div>
          <div className={styles['student-bio']}>{studentProfile.bio}</div>
          <div className={styles.icons}>
            <Icon name="circle" size="big" />
            <Icon name="circle" size="big" />
            <Icon name="circle" size="big" />
          </div>
        </div>
        <div className={styles['profile-status']}>
          <div className={styles['profile-percent']}>
            <span>{studentProfile.profilePercentage}% profile completed</span>
            {/* <Progress
                      percent={studentProfile.profilePercentage}
                      progress
                      color="blue"
                    /> */}
          </div>
          <div className={styles.label}>
            <div className={styles['label_1']}>
              <span>Following 36</span>
              <Icon name="circle" size="big" />
            </div>
            <div className={styles['label_2']}>
              <span>Available</span>
              <Icon name="circle" size="big" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

StudentInfoSection.propTypes = {
  studentProfile: PropTypes.object,
  user: PropTypes.object,
}

export default StudentInfoSection
