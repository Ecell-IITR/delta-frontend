/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react'
import { findIndex } from 'lodash'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Popup from 'reactjs-popup'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SelectFilter } from 'coreContainers/filters'
import { notify } from 'react-notify-toast'
import { NOTIF_SUCCESS_TYPE } from 'globalConstants'
import { editStudentProfile } from '../../../actions'

import styles from './edit-profile.css'

function changeWindowSize() {
  const [size, setsize] = useState([window.innerWidth])
  useEffect(() => {
    const handleResize = () => {
      setsize([window.innerWidth])
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return size
}
function widthrendere() {
  const [width] = changeWindowSize()
  return { width } > 1000 ? '75%' : '60%'
}

export function EditProfileComponent({
  triggerElement,
  userProfile,
  editStudentProfileComponent,
  inputFieldWithBorder,
}) {
  const [bio, setBio] = useState(
    userProfile && userProfile.bio ? userProfile.bio : '',
  )
  const [currentYear, setCurrentYear] = useState(
    userProfile && userProfile.currentYear ? userProfile.currentYear : '',
  )
  const [firstName, setFirstName] = useState(
    userProfile && userProfile.firstName ? userProfile.firstName : '',
  )
  const [lastName, setLastName] = useState(
    userProfile && userProfile.lastName ? userProfile.lastName : '',
  )
  const [phoneNumber, setPhoneNumber] = useState(
    userProfile && userProfile.phoneNumber ? userProfile.phoneNumber : '',
  )
  const [errPhoneNumber, setErrPhoneNumber] = useState(false)
  const [formLoading, setFormLoading] = useState(false)

  // const [socialLink, setSocialLink] = useState()

  const currentYearOptions = [
    { value: 1, label: '1st year' },
    { value: 2, label: '2nd year' },
    { value: 3, label: '3rd year' },
    { value: 4, label: '4th year' },
    { value: 5, label: '5th year' },
  ]

  const getCurrentYear = (year) => {
    const i = findIndex(currentYearOptions, (option) => option.value === year)
    return currentYearOptions[i]
  }

  const handleForm = (close) => {
    if (phoneNumber) {
      const phoneNum = phoneNumber.replace(/[^\d]/g, '')
      if (phoneNum.length <= 6 && phoneNum.length >= 11) {
        return setErrPhoneNumber(true)
      }
    }

    const obj = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      bio,
      current_year: currentYear,
    }
    setFormLoading(true)
    editStudentProfileComponent(obj, (status) => {
      setFormLoading(false)
      if (status === 'success') {
        notify.show('Successfully edited!', NOTIF_SUCCESS_TYPE, 1000)
        close()
      }
    })
  }

  return (
    <Popup
      contentStyle={{
        width: widthrendere(),
      }}
      trigger={triggerElement}
      modal
    >
      {(close) => (
        <div className={styles['modal-container']}>
          <div className={styles['modal-close-button']}>
            <FontAwesomeIcon icon={faTimesCircle} onClick={close} />
          </div>
          <div className={styles['modal-title-text']}>Edit Profile</div>
          <div className={styles['modal-main']}>
            <div className={styles['edit-modal-field-group']}>
              <div className={styles['edit-modal-field']}>
                <label className={styles['edit-modal-field-label']}>
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`${styles['edit-modal-field-input']} ${
                    inputFieldWithBorder ? styles['with-border-input'] : ''
                  }`}
                />
              </div>
              <div className={styles['edit-modal-field']}>
                <label className={styles['edit-modal-field-label']}>
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`${styles['edit-modal-field-input']} ${
                    inputFieldWithBorder ? styles['with-border-input'] : ''
                  }`}
                />
              </div>
            </div>
            <div className={styles['edit-modal-field-group']}>
              <div className={styles['edit-modal-field']}>
                <label className={styles['edit-modal-field-label']}>
                  Phone number
                </label>
                <input
                  type="text"
                  placeholder="Phone number"
                  name="phone-number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={`${styles['edit-modal-field-input']} ${
                    inputFieldWithBorder ? styles['with-border-input'] : ''
                  }`}
                />
                {errPhoneNumber ? (
                  <div className={styles['error-display']}>
                    Phone number is invalid!
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className={styles['edit-modal-field-group']}>
              <div className={styles['edit-modal-field']}>
                <label className={styles['edit-modal-field-label']}>
                  Current year
                </label>
                <SelectFilter
                  options={currentYearOptions}
                  placeholder="Select year"
                  value={getCurrentYear(currentYear)}
                  handleChange={(obj) => {
                    setCurrentYear(obj ? obj.value : '')
                  }}
                />
              </div>
            </div>
            <div className={styles['edit-modal-field']}>
              <label className={styles['edit-modal-field-label']}>Bio</label>
              <textarea
                placeholder="Write you bio here....."
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className={`${styles['edit-modal-field-input']} ${
                  inputFieldWithBorder ? styles['with-border-input'] : ''
                }`}
              />
            </div>
          </div>
          <div className={styles['button-wrapper']}>
            {formLoading ? (
              <div className="spinner-border text-primary" role="status"></div>
            ) : (
              <button
                type="button"
                onClick={() => handleForm(close)}
                className={styles['save-button']}
              >
                Save
              </button>
            )}
          </div>
        </div>
      )}
    </Popup>
  )
}

EditProfileComponent.propTypes = {
  userProfile: PropTypes.object,
  editStudentProfileComponent: PropTypes.func,
  inputFieldWithBorder: PropTypes.bool,
}

function mapDispatchToProps(dispatch) {
  return {
    editStudentProfileComponent: (body, callback = () => {}) => {
      dispatch(editStudentProfile(body, callback))
    },
  }
}

function mapStateToProps(state) {
  return {
    userProfile: state.student.profile.profile,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfileComponent)
