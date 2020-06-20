import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CKEditor from '@ckeditor/ckeditor5-react'
import InlineEditor from '@ckeditor/ckeditor5-build-inline'
import { SelectFilter } from 'coreContainers/filters'
import { DateInput } from 'semantic-ui-calendar-react'

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
  fetchTags
}) {

  useEffect(() => {
    if (Object.keys(locations).length === 0) {
      fetchLocations()
    }
    if (Object.keys(skills).length === 0) {
      fetchSkills()
    }
    if (Object.keys(tags).length === 0) {
      fetchTags()
    }
  }, [])

  const getFilterOptions = (filterList, valueKey, labelKey) => {
    const resultArr = []
    filterList.forEach((filter) =>
      resultArr.push(Object.assign({ value: filter[valueKey], label: filter[labelKey] }, filter)),
    )
    return resultArr
  }

  const getValueFromArray = (list, key) => {
    let tempArr = []
    list.forEach((obj) => tempArr.push(obj[key]))
    return tempArr
  }

  const [title, setTitle] = useState(post.title ? post.title : '')
  const [stipend, setStipend] = useState(post.stipend ? post.stipend : '')
  const [description, setDescription] = useState(
    post.description ? post.description : '',
  )
  const [stateSkills, setSkills] = useState(post.requiredSkills ? post.requiredSkills : [])
  const [stateLocation, setLocation] = useState(post.location ? post.location : '')
  const [stateTags, setTags] = useState(post.tags ? post.tags : [])
  const [selectedDate, setSelectedDate] = useState(post.postExpiryDate ? new Date(post.postExpiryDate) : '');
  const [errTitle, setErrTitle] = useState(false)
  const [editLoading, setEditLoading] = useState(false)

  const callback = (status, close) => {
    setEditLoading(false)
    if (status === 'success') {
      close()
    }
  }

  const handleSave = (close) => {
    if (title === '' || title.trim() === '') {
      setErrTitle(true)
      return
    }
    let obj = {
      title,
      stipend,
      description,
      skill_slugs: getValueFromArray(stateSkills, 'slug'),
      location: stateLocation.slug,
      tag_hashes: getValueFromArray(stateTags, 'hash'),
      expiry_timestamp: selectedDate.getTime() / 1000
    }
    setEditLoading(true)
    editPost(post.slug, obj, (status) => callback(status, close))
  }

  const getLocationObj = (loc) => {
    return {
      value: loc.slug,
      label: loc.name
    }
  }
  const dateCurrent = new Date()
  dateCurrent.setDate(dateCurrent.getDate() + 1)
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
                  Title <span className={styles['required-field']}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={styles['edit-modal-field-input']}
                />
                {errTitle ?
                  <div className={styles['error-display']}>
                    Title field cannot be empty!
                </div> : <></>}
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
            <div className={styles['edit-modal-field-group']}>
              <div className={styles['edit-modal-field']}>
                <label className={styles['edit-modal-field-label']}>
                  Required skills
                </label>
                <div className={styles['edit-modal-filter-wrapper']}>
                  <SelectFilter
                    options={skills ? getFilterOptions(skills, 'slug', 'name') : []}
                    loading={skillsLoading}
                    placeholder="Select skills"
                    isMulti={true}
                    value={getFilterOptions(stateSkills, 'slug', 'name')}
                    handleChange={(valueArr) => {
                      setSkills(valueArr)
                    }}
                  />
                </div>
              </div>
              <div className={styles['edit-modal-field']}>
                <label className={styles['edit-modal-field-label']}>
                  Location
                </label>
                <SelectFilter
                  options={locations ? getFilterOptions(locations, 'slug', 'name') : []}
                  loading={locationsLoading}
                  placeholder="Select skills"
                  isMulti={false}
                  value={getLocationObj(stateLocation)}
                  handleChange={(value) => {
                    setLocation(value)
                  }}
                />
              </div>
            </div>
            <div className={styles['edit-modal-field']}>
              <label className={styles['edit-modal-field-label']}>
                Post Expiry Date
                </label>
              <div className={styles['edit-modal-filter-wrapper']}>
                <DateInput
                  closable
                  name="endDate"
                  minDate={dateCurrent}
                  placeholder="Expiry date"
                  value={selectedDate}
                  iconPosition="left"
                  inline
                  required
                  dateFormat="YYYY-MM-DD"
                  onChange={(event, { name, value }) => setSelectedDate(new Date(value))}
                />
              </div>
            </div>

            <div className={styles['edit-modal-field']}>
              <label className={styles['edit-modal-field-label']}>
                Tags
                </label>
              <div className={styles['edit-modal-filter-wrapper']}>
                <SelectFilter
                  options={tags ? getFilterOptions(tags, 'hash', 'title') : []}
                  loading={tagsLoading}
                  placeholder="Select tags"
                  isMulti={true}
                  value={getFilterOptions(stateTags, 'hash', 'title')}
                  handleChange={(valueArr) => {
                    setTags(valueArr)
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles['button-wrapper']}>
            {editLoading ?
              <div
                className="spinner-border text-primary"
                role="status"
              ></div> :
              <button
                type="button"
                onClick={() => handleSave(close)}
                className={styles['save-button']}
              >
                Save
            </button>}
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
  fetchTags: PropTypes.func
}

export default EditPostModal
