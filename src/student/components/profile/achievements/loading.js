/* eslint-disable consistent-return */
/* eslint-disable react/forbid-prop-types */
import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

import styles from './index.css'

export function AchievementsLoading() {
  return (
    <div className={styles['achievements-container']}>
      <Skeleton variant="text" height={200} />
    </div>
  )
}

export default AchievementsLoading
