import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styles from '../css/input.module.css'
export default class InputField extends Component {
  render() {
    let { placeholder, type, name } = this.props
    return (
      <Form.Input
        className={`${styles.general}  ${this.props.className}`}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={this.props.onChange}
      />
    )
  }
}
InputField.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
}
