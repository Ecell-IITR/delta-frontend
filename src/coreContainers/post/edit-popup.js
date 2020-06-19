import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CKEditor from '@ckeditor/ckeditor5-react'
import InlineEditor from '@ckeditor/ckeditor5-build-inline'
import Button from 'coreContainers/button'

import styles from './edit-popup.css'

export function EditPostModal({ triggerElement, post, editPost }) {
  const [title, setTitle] = useState(post.title ? post.title : '')
  const [stipend, setStipend] = useState(post.stipend ? post.stipend : '')
  const [description, setDescription] = useState(
    post.description ? post.description : '',
  )

  const handleSave = (close) => {
    let obj = {
      title,
      stipend,
      description,
    }
    editPost(post.slug, obj)
    close()
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
            <div className={styles['edit-modal-field-group']}>
              <div className={styles['edit-modal-field']}>
                <label className={styles['edit-modal-field-label']}>
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={styles['edit-modal-field-input']}
                />
              </div>
              <div className={styles['edit-modal-field']}>
                <label className={styles['edit-modal-field-label']}>
                  Stipend
                </label>
                <input
                  type="text"
                  placeholder="Stipend"
                  name="stipend"
                  value={stipend}
                  onChange={(e) => setStipend(e.target.value)}
                  className={styles['edit-modal-field-input']}
                />
              </div>
            </div>
            <div className={styles['edit-modal-field']}>
              <label className={styles['edit-modal-field-label']}>
                Description
              </label>
              <div className={styles['editor-wrapper']}>
                <CKEditor
                  editor={InlineEditor}
                  data={description}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setDescription(data)
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles['button-wrapper']}>
            <button
              type="button"
              onClick={() => handleSave(close)}
              className={styles['save-button']}
            >
              Save
            </button>
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
}

export default EditPostModal
