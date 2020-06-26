/* eslint-disable consistent-return */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CKEditor from '@ckeditor/ckeditor5-react'
import InlineEditor from '@ckeditor/ckeditor5-build-inline'

import styles from './index.css'

export function Achievements({ editStudentProfile, achievements }) {
  const [stateAchievements, setAchievements] = useState(
    achievements || 'Write something about your achievements....',
  )
  const [errAchievements, setErrAchievements] = useState('')
  const [successAchievements, setSuccessAchievements] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    return function cleanup() {
      setSuccessAchievements('')
      setErrAchievements('')
    }
  }, [])

  const callback = (status) => {
    setLoading(false)
    if (status === 'success') {
      setSuccessAchievements('Achievements updated successfully!')
    } else {
      setErrAchievements('Achievements unable to update.')
    }
  }

  const handleSave = () => {
    if (stateAchievements === '' || stateAchievements.trim() === '') {
      return setErrAchievements('Achievements can not be empty!')
    }
    setLoading(true)
    editStudentProfile({ achievements: stateAchievements }, (status) =>
      callback(status),
    )
  }

  return (
    <div className={styles['achievements-container']}>
      {errAchievements ? (
        <div className={styles['error-display']}>{errAchievements}</div>
      ) : (
        <></>
      )}
      {successAchievements ? (
        <div className={styles['success-display']}>{successAchievements}</div>
      ) : (
        <></>
      )}
      <div className={styles['editor-wrapper']}>
        <CKEditor
          editor={InlineEditor}
          data={stateAchievements}
          onChange={(event, editor) => {
            const data = editor.getData()
            setAchievements(data)
          }}
        />
      </div>
      <div className={styles['button-wrapper']}>
        {loading ? (
          <div className="spinner-border text-primary" role="status"></div>
        ) : (
          <button
            type="button"
            onClick={() => handleSave()}
            className={styles['save-button']}
          >
            Save
          </button>
        )}
      </div>
    </div>
  )
}

Achievements.propTypes = {
  editStudentProfile: PropTypes.func,
  achievements: PropTypes.object,
}

export default Achievements
