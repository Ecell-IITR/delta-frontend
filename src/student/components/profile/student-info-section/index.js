/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './index.css'

class StudentInfoSection extends Component {
  render() {
    const { studentProfile, user } = this.props
    return (
      <div className={styles.profile}>
        <div className={styles['student-img']}>
          {/* <Image
            className={styles.image}
            src={student.img_src}
            size={student.img_size}
          /> */}
        </div>
        <div className={styles['student-info']}>
          <div className={styles['student-personal-info']}>
            <div className={styles['student-details-wrapper']}>
              <div className={styles['margin-half']}>
                <span className={styles['student-name']}>
                  {`${user.firstName} ${user.lastName}`}
                </span>
              </div>
              <div className={styles['margin-half']}>
                <span className={styles['student-branch']}>
                  {`${studentProfile.branch && studentProfile.branch.name} . ${
                    studentProfile.year
                  }`}
                </span>
              </div>
              <div>
                <span className={styles.roll}>
                  {`${studentProfile.course} . ${studentProfile.enrollmentNumber}`}
                </span>
              </div>
            </div>
            <div className={styles['edit-icon-wrapper']}></div>
          </div>
          <div className={styles['student-bio']}>{studentProfile.bio}</div>
          <div className={styles.icons}>
            {studentProfile.socialLinks &&
              studentProfile.socialLinks.length &&
              studentProfile.socialLinks.map((link) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.profileUrl}
                  key={link.id}
                >
                  <img
                    className={styles['website-icon-image']}
                    src={'http://localhost:8000' + link.website.websiteLogo}
                    alt={link.website.name}
                  />
                </a>
              ))}
          </div>
        </div>
        <div className={styles['profile-status']}>
          {/* <div className={styles['profile-percent']}>
            <span>{studentProfile.profilePercentage}% profile completed</span>
            <Progress
              percent={studentProfile.profilePercentage}
              progress
              color="blue"
            />
          </div> */}
          <div className={styles.label}>
            <div className={styles.following}>
              {studentProfile.followingCount ? (
                <span>Following {studentProfile.followingCount}</span>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.availability}>
              {studentProfile.availabilityStatus ? (
                <span>Available {studentProfile.availabilityStatus}</span>
              ) : (
                <></>
              )}
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
