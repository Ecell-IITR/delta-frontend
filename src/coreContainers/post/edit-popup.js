import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InternshipFormComponent from 'coreContainers/forms/internship-form'
import {
  INTERNSHIP_POST_TYPE_KEY,
  COMPETITION_POST_TYPE_KEY,
  PROJECT_POST_TYPE_KEY,
} from '../../student/constants'

import styles from './edit-popup.css'

export function EditPostModal({
  triggerElement,
  post,
  editPost,
  skills,
  skillsLoading,
  fetchSkills,
  locations,
  locationsLoading,
  fetchLocations,
  tags,
  tagsLoading,
  fetchTags,
}) {
  const editPostWrapper = (obj, close, callback) => {
    editPost(post.slug, obj, (status) => {
      if (status === 200) {
        close()
      }
      callback()
    })
  }
  return (
    <Popup trigger={triggerElement} modal>
      {(close) => (
        <div className={styles['modal-container']}>
          <div className={styles['modal-close-button']}>
            <FontAwesomeIcon icon={faTimesCircle} onClick={close} />
          </div>
          <div className={styles['modal-title-text']}>Edit</div>
          <div className={styles['modal-main']}>
            {post.postType === INTERNSHIP_POST_TYPE_KEY ? (
              <InternshipFormComponent
                formObj={post}
                onAction={editPostWrapper}
                skills={skills}
                skillsLoading={skillsLoading}
                fetchSkills={fetchSkills}
                locations={locations}
                locationsLoading={locationsLoading}
                fetchLocations={fetchLocations}
                tags={tags}
                tagsLoading={tagsLoading}
                fetchTags={fetchTags}
                modalCloseFunc={close}
                inputFieldWithBorder
                action="edit"
                publishButton
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </Popup>
  )
}

EditPostModal.propTypes = {
  triggerElement: PropTypes.object,
  post: PropTypes.object,
  editPost: PropTypes.func,
  fetchLocations: PropTypes.func,
  fetchSkills: PropTypes.func,
  skillsLoading: PropTypes.bool,
  locationsLoading: PropTypes.bool,
  locations: PropTypes.array,
  skills: PropTypes.array,
  tags: PropTypes.array,
  tagsLoading: PropTypes.bool,
  fetchTags: PropTypes.func,
}

export default EditPostModal
