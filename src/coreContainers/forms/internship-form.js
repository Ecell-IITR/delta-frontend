/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CKEditor from '@ckeditor/ckeditor5-react'
import InlineEditor from '@ckeditor/ckeditor5-build-inline'
import { SelectFilter } from 'coreContainers/filters'
import { Responsive } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react'
import { INTERNSHIP_POST_TYPE_KEY } from '../../student/constants'

import styles from './form.css'

export function InternshipForm({
  skills,
  skillsLoading,
  fetchSkills,
  locations,
  locationsLoading,
  fetchLocations,
  tags,
  tagsLoading,
  fetchTags,
  onAction,
  formObj,
  modalCloseFunc,
  inputFieldWithBorder,
  action,
  publishButton,
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

  const durationUnitOptions = [
    { value: 1, label: 'Day', durationValue: 1 },
    { value: 2, label: 'Week', durationValue: 7 },
    { value: 3, label: 'Month', durationValue: 30 },
  ]

  const [title, setTitle] = useState(
    formObj && formObj.title ? formObj.title : '',
  )
  const [stipend, setStipend] = useState(
    formObj && formObj.stipend ? formObj.stipend : '',
  )
  const [description, setDescription] = useState(
    formObj && formObj.description ? formObj.description : '',
  )
  const [stateSkills, setSkills] = useState(
    formObj && formObj.requiredSkills ? formObj.requiredSkills : [],
  )
  const [stateLocation, setLocation] = useState(
    formObj && formObj.location ? formObj.location : '',
  )
  const [stateTags, setTags] = useState(
    formObj && formObj.tags ? formObj.tags : [],
  )
  const [selectedDate, setSelectedDate] = useState(
    formObj && formObj.postExpiryDate ? new Date(formObj.postExpiryDate) : '',
  )
  const [durationValue, setDurationValue] = useState(
    formObj && formObj.durationValue ? formObj.durationValue : '',
  )
  const [durationUnit, setDurationUnit] = useState(1)

  const [errTitle, setErrTitle] = useState(false)
  const [errExpiryDate, setErrExpiryDate] = useState(false)
  const [formLoading, setFormLoading] = useState(false)

  const getFilterOptions = (filterList, valueKey, labelKey) => {
    const resultArr = []
    filterList.forEach((filter) =>
      resultArr.push({
        value: filter[valueKey],
        label: filter[labelKey],
        ...filter,
      }),
    )
    return resultArr
  }

  const getValueFromArray = (list, key) => {
    const tempArr = []
    list.forEach((obj) => tempArr.push(obj[key]))
    return tempArr
  }

  const getLocationObj = (loc) => {
    if (loc) {
      return {
        value: loc.slug,
        label: loc.name,
      }
    }
    return {}
  }
  const dateCurrent = new Date()
  dateCurrent.setDate(dateCurrent.getDate() + 1)

  // const getDurationVal = (unit) => {
  //   const i = findIndex(durationUnitOptions, (option) => option.value === unit)
  //   return durationUnitOptions[i].durationValue
  // }

  const handleForm = (isPublish = false) => {
    if (title === '' || title.trim() === '') {
      setErrTitle(true)
      return
    }
    if (selectedDate === '') {
      setErrExpiryDate(true)
      return
    }
    const obj = {
      title,
      stipend,
      description,
      skill_slugs: getValueFromArray(stateSkills, 'slug'),
      location: stateLocation.slug,
      tag_hashes: getValueFromArray(stateTags, 'hash'),
      expiry_timestamp: selectedDate.getTime() / 1000,
      is_publish: isPublish,
      post_type: INTERNSHIP_POST_TYPE_KEY,
      duration_value: durationValue,
      duration_unit: durationUnit,
    }

    setFormLoading(true)
    if (action === 'edit') {
      onAction(obj, modalCloseFunc, () => setFormLoading(false))
    }
    if (action === 'create') {
      onAction(obj, () => setFormLoading(false))
    }
  }

  return (
    <div className={styles['modal-container']}>
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
              className={`${styles['edit-modal-field-input']} ${
                inputFieldWithBorder ? styles['with-border-input'] : ''
              }`}
            />
            {errTitle ? (
              <div className={styles['error-display']}>
                Title field cannot be empty!
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={styles['edit-modal-field']}>
            <label className={styles['edit-modal-field-label']}>Stipend</label>
            <input
              type="text"
              placeholder="Stipend"
              name="stipend"
              value={stipend}
              onChange={(e) => setStipend(e.target.value)}
              className={`${styles['edit-modal-field-input']} ${
                inputFieldWithBorder ? styles['with-border-input'] : ''
              }`}
            />
            <div className={styles['help-text']}>
              Note: For 20k, write 20000 in the input field.
            </div>
          </div>
        </div>
        <div className={styles['edit-modal-field']}>
          <label className={styles['edit-modal-field-label']}>
            Description
          </label>
          <div
            className={`${styles['editor-wrapper']} ${
              inputFieldWithBorder ? styles['with-border-input'] : ''
            }`}
          >
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
        <div className={styles['']}>
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
            <label className={styles['edit-modal-field-label']}>Location</label>
            <SelectFilter
              options={
                locations ? getFilterOptions(locations, 'slug', 'name') : []
              }
              loading={locationsLoading}
              placeholder="Select locations"
              isMulti={false}
              value={getLocationObj(stateLocation)}
              handleChange={(value) => {
                setLocation(value)
              }}
            />
          </div>
        </div>
        <div className={styles['edit-modal-field-group1']}>
          <div className={styles['edit-modal-field']}>
            <label className={styles['edit-modal-field-label']}>
              Post Expiry Date
            </label>
            <div className={styles['edit-modal-filter-wrapper']}>
              <Responsive {...Responsive.onlyMobile}>
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
                  onChange={(event, { value }) =>
                    setSelectedDate(new Date(value))
                  }
                />
              </Responsive>
              <Responsive minWidth={Responsive.onlyMobile.maxWidth + 1}>
                <DateInput
                  closable
                  fluid
                  popupPosition="bottom center"
                  name="endDate"
                  minDate={dateCurrent}
                  placeholder="Expires on"
                  value={selectedDate}
                  iconPosition="left"
                  required
                  dateFormat="YYYY-MM-DD"
                  onChange={(event, { value }) =>
                    setSelectedDate(new Date(value))
                  }
                />
              </Responsive>
            </div>
            {errExpiryDate ? (
              <div className={styles['error-display']}>
                Expiry date field cannot be empty!
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={styles['edit-modal-field2']}>
            <label className={styles['edit-modal-field-label']}>Tags</label>
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
        <div className={styles['edit-modal-field-group']}>
          <div className={styles['edit-modal-field']}>
            <div className={styles['modal-label-wrapper']}>
              <label
                style={{ display: 'flex', alignItems: 'center' }}
                className={styles['edit-modal-field-label']}
              >
                Duration
              </label>
              <div>
                <select
                  className={styles['filter-unit-select']}
                  value={durationUnit}
                  onChange={(e) => setDurationUnit(e.target.value)}
                >
                  {durationUnitOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <input
              type="text"
              placeholder="Duration value"
              name="duration-value"
              value={durationValue}
              onChange={(e) => setDurationValue(e.target.value)}
              className={`${styles['edit-modal-field-input']} ${
                inputFieldWithBorder ? styles['with-border-input'] : ''
              }`}
            />
            <div className={styles['help-text']}>
              Note: For 2 months, write 2 in the input field and select month
              from dropdown.
            </div>
          </div>
        </div>
      </div>
      <div className={styles['button-wrapper']}>
        {formLoading ? (
          <div className="spinner-border text-primary" role="status"></div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => handleForm(false)}
              className={styles['save-button']}
            >
              Save
            </button>
            {publishButton ? (
              <button
                type="button"
                onClick={() => handleForm(true)}
                className={styles['publish-button']}
              >
                Publish
              </button>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  )
}

// InternshipForm.defaultProps = {
//   modalCloseFunc: () => { },
// }

InternshipForm.propTypes = {
  fetchLocations: PropTypes.func,
  fetchSkills: PropTypes.func,
  modalCloseFunc: PropTypes.func,
  publishButton: PropTypes.bool,
  locations: PropTypes.array,
  locationsLoading: PropTypes.bool,
  skills: PropTypes.array,
  skillsLoading: PropTypes.bool,
  tags: PropTypes.array,
  tagsLoading: PropTypes.bool,
  fetchTags: PropTypes.func,
  onAction: PropTypes.func,
  formObj: PropTypes.object,
  inputFieldWithBorder: PropTypes.bool,
  action: PropTypes.string,
}

export default InternshipForm
