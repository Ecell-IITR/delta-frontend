import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import styles from './input.css'

export default class InputField extends Component {
  render() {
    let { placeholder, type, name, onChange } = this.props
    return (
      <Form.Input
        className={styles.general}
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
  className: PropTypes.string
}
