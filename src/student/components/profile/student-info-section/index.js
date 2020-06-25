/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getImageURL } from 'utils/getImageURL'
import Switch from '@material-ui/core/Switch'
import AvatarUpload from './avatar-upload'

import styles from './index.css'

class StudentInfoSection extends Component {
  render() {
    const {
      studentProfile,
      user,
      editStudentProfile,
      avatarUploadFunc,
    } = this.props
    return (
      <div className={styles.profile}>
        <div className={styles['student-img']}>
          {user ? (
            <div className={styles['img-wrapper']}>
              <img
                className={styles['student-profile-image']}
                src={getImageURL(user.profileImage)}
                alt="profile-img"
              />
              <AvatarUpload onSave={avatarUploadFunc} />
            </div>
          ) : (
            <></>
          )}
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
                  {`${studentProfile.branch && studentProfile.branch.name} 
                  ${
                    studentProfile.branch &&
                    studentProfile.branch.name &&
                    studentProfile.currentYear
                      ? '.'
                      : ''
                  } 
                  ${
                    studentProfile.currentYear === 1
                      ? '1st year'
                      : studentProfile.currentYear === 2
                      ? '2nd year'
                      : studentProfile.currentYear === 3
                      ? '3rd year'
                      : `${studentProfile.currentYear}th year`
                  } `}
                </span>
              </div>
              <div>
                <span className={styles.roll}>
                  {`${studentProfile.course} ${
                    studentProfile.course && studentProfile.enrollmentNumber
                      ? '.'
                      : ''
                  } ${studentProfile.enrollmentNumber}`}
                </span>
              </div>
              <div className={styles['follow-info-wrapper']}>
                <div className={styles.availability}>
                  {'followersCount' in studentProfile ? (
                    <>
                      <span className={styles['field-count']}>
                        {studentProfile.followersCount}
                      </span>
                      <span className={styles['field-text']}>followers</span>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div className={styles['between-gap']}>.</div>
                <div className={`${styles.availability}`}>
                  {'followingCount' in studentProfile ? (
                    <>
                      <span className={styles['field-count']}>
                        {studentProfile.followingCount}
                      </span>
                      <span className={styles['field-text']}>following</span>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className={styles['edit-icon-wrapper']}></div>
          </div>
          <div className={styles['student-bio']}>{studentProfile.bio}</div>
          <div className={styles.icons}>
            {studentProfile.socialLinks &&
            studentProfile.socialLinks.length > 0 ? (
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
              ))
            ) : (
              <></>
            )}
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
            <div className={styles.availability}>
              {'availabilityStatus' in studentProfile ? (
                <span>
                  Available{' '}
                  <Switch
                    checked={studentProfile.availabilityStatus}
                    onChange={(e, value) =>
                      editStudentProfile({
                        availability_status: value ? 'active' : 'inactive',
                      })
                    }
                    name="available"
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
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
  editStudentProfile: PropTypes.func,
  avatarUploadFunc: PropTypes.func,
}

export default StudentInfoSection
