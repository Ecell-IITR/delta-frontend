import React from 'react'
import { times } from 'lodash'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton'

import styles from './index.css'

export function OrganizationLoading({ count }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {times(count, () => (
        <div className={styles['organization-card']}>
          <div className={styles['card-info']}>
            <div className={styles['card-profile-image']}>
              <Skeleton variant="rect" height={60} />
            </div>
            <div className={styles['card-info-desc']}>
              <div className={styles['card-title']}>
                <Skeleton variant="text" width={100} />
              </div>
              <div className={styles['card-text']}>
                <Skeleton variant="text" width={100} />
              </div>
              <div className={styles['card-text']}>
                <Skeleton variant="text" width={100} />
              </div>
            </div>
          </div>
          <div className={styles['card-lower-section']}>
            <Skeleton variant="text" width={100} />
          </div>
        </div>
      ))}
    </div>
  )
}

OrganizationLoading.propTypes = {
  count: PropTypes.number,
}

export default OrganizationLoading
