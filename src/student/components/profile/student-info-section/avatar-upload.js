/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react'
import Cropper from 'react-cropper'
import Popup from 'reactjs-popup'
import PropTypes from 'prop-types'

import styles from './avatar-upload.css'

class AvatarUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: '',
      open: false,
      loading: false,
    }
  }

  onChange = (e) => {
    e.preventDefault()
    let files
    if (e.dataTransfer) {
      files = e.dataTransfer.files
    } else if (e.target) {
      files = e.target.files
    }
    const reader = new FileReader()
    reader.onload = () => {
      this.setState({ src: reader.result, open: true })
    }
    reader.readAsDataURL(files[0])
  }

  cropImage = () => {
    const { onSave } = this.props
    if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      return
    }
    this.cropper.getCroppedCanvas().toBlob((blob) => {
      this.setState({
        loading: true,
      })
      onSave(blob, (status) => {
        if (status === 200) {
          this.setState({
            open: false,
            loading: false,
          })
        } else {
          this.setState({
            loading: false,
          })
        }
      })
    }, 'image/jpeg')
  }

  handelCloseModal = () => {
    this.setState({
      open: false,
    })
  }

  render() {
    const { open, loading, src } = this.state
    return (
      <div className={styles['profile-upload-container']}>
        <label className={styles['profile-upload-text']}>
          Edit
          <input
            type="file"
            className={styles['profile-upload-input']}
            onChange={this.onChange}
          />
        </label>
        <Popup
          open={open}
          closeOnDocumentClick
          onClose={this.handelCloseModal}
          modal
        >
          <div className={styles['avatar-crop-container']}>
            <Cropper
              style={{ maxHeight: 350, width: '100%' }}
              aspectRatio={1}
              src={src}
              ref={(cropper) => {
                this.cropper = cropper
              }}
              responsive
            />
            {loading ? (
              <div
                className="spinner-border text-primary"
                style={{ marginTop: '0.75rem' }}
                role="status"
              ></div>
            ) : (
              <button
                type="button"
                className={styles['submit-btn']}
                onClick={this.cropImage}
              >
                Update Avatar
              </button>
            )}
          </div>
        </Popup>
      </div>
    )
  }
}
AvatarUpload.propTypes = {
  onSave: PropTypes.func,
}

export default AvatarUpload
