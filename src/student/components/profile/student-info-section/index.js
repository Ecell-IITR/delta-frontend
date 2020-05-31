/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { getImageURL } from 'utils/getImageURL'

import styles from './index.css'

class StudentInfoSection extends Component {
  render() {
    const { studentProfile, user } = this.props
    return (
      <div className={styles.profile}>
        <div className={styles['student-img']}>
          {user ?
            <img className={styles['student-profile-image']} src={user.profileImage} alt="profile-img" />
            : <></>}
        </div>
        <div className={styles['student-info']}>
          <div className={styles['student-personal-info']}>
            <div className={styles['student-details-wrapper']}>
              <div className={styles['margin-half']}>
                <span className={styles['student-name']}>
                  {`${studentProfile.firstName} ${studentProfile.lastName}`}
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
                    src={getImageURL(link.website.websiteLogo)}
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
              {'availabilityStatus' in studentProfile ? (
                <span>
                  Available{' '}
                  {studentProfile.availabilityStatus ? (
                    <FontAwesomeIcon
                      className={styles['check-true-icon']}
                      icon={faCheckCircle}
                    />
                  ) : (
                      <FontAwesomeIcon
                        className={styles['check-false-icon']}
                        icon={faTimesCircle}
                      />
                    )}
                </span>
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
