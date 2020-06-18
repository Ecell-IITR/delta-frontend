/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-case-declarations */
import React, { Component } from 'react'
import { times } from 'lodash'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton'

import styles from './index.css'

export default class PostLoading extends Component {
  getUserSection = () => {
    return (
      <div className={styles['user-section-wrapper']}>
        <div>
          <Skeleton variant="text" width={60} />
          <Skeleton variant="text" width={60} />
        </div>
        <div className={styles['user-image']}>
          <Skeleton variant="circle" height={50} width={50} />
        </div>
      </div>
    )
  }

  getPostUpperSection = () => {
    return (
      <div className={styles['post-upper-section']}>
        <div className={styles['post-uppermost-info-sec']}>
          <div className={styles['post-basic-info-wrapper']}>
            <div className={styles['post-title']}>
              <Skeleton variant="text" width={100} />
            </div>
            <div className={styles['post-sti-work']}>
              <Skeleton variant="text" width={100} />
            </div>
          </div>
          <div className={styles['post-user-section']}>
            {this.getUserSection()}
          </div>
        </div>
        <div className={styles['post-some-info-section']}>
          <div>
            <Skeleton variant="text" width={60} />
          </div>
          <div>
            <Skeleton variant="text" width={60} />
          </div>
          <div>
            <Skeleton variant="text" width={60} />
          </div>
          <div>
            <Skeleton variant="text" width={60} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { count } = this.props
    return (
      <>
        {times(count, () => (
          <div className={styles.post} style={{ marginTop: '0.5rem' }}>
            <div>{this.getPostUpperSection()}</div>
          </div>
        ))}
      </>
    )
  }
}

PostLoading.propTypes = {
  count: PropTypes.number,
}
