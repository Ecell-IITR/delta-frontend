/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import styles from './index.css'

class StudentInfoLoading extends Component {
  render() {
    return (
      <div style={{ width: '100%', backgroundColor: 'white' }}>
        <div className={styles.profile}>
          <div className={styles['student-img']}>
            <Skeleton variant="circle" height={165} />
          </div>
          <div className={styles['student-info']}>
            <div className={styles['student-personal-info']}>
              <div className={styles['student-details-wrapper']}>
                <div className={styles['margin-half']}>
                  <Skeleton variant="text" width={200} />
                </div>
                <div className={styles['margin-half']}>
                  <Skeleton variant="text" width={100} />
                </div>
                <div>
                  <Skeleton variant="text" width={100} />
                </div>
              </div>
              <div className={styles['edit-icon-wrapper']}></div>
            </div>
            <div className={styles['student-bio']}>
              <Skeleton variant="rect" height={75} />
            </div>
            <div className={styles.icons} style={{ display: 'flex' }}>
              <Skeleton variant="circle" height={50} width={50} />
              <Skeleton
                variant="circle"
                height={50}
                width={50}
                style={{ marginLeft: '0.5rem' }}
              />
            </div>
          </div>
          <div className={styles['profile-status']}>
            <div className={styles.label}>
              <div className={styles.following}>
                <Skeleton variant="text" width={100} />
              </div>
              <div className={styles.availability}>
                <Skeleton variant="text" width={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StudentInfoLoading
