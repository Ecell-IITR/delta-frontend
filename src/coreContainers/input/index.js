import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './input.css'

export default class InputField extends Component {
  render() {
    const { placeholder, type, name, onChange, customClassName } = this.props
    return (
      <input
        className={`${styles.general}  ${customClassName}`}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
      />
    )
  }
}

InputField.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  customClassName: PropTypes.string,
}
