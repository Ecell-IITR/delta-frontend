/* eslint-disable react/button-has-type */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './index.css'

export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'Submit',
    }
  }

  componentDidMount = () => {
    const { buttonContent } = this.props

    if (buttonContent !== undefined) {
      this.setState({
        content: buttonContent,
      })
    }
  }

  render() {
    const { customClassName, onClick, type } = this.props
    const { content } = this.state

    const buttonType = type || 'submit'
    return (
      <button
        type={buttonType}
        className={`${styles.general} ${customClassName}`}
        onClick={onClick}
      >
        {content}
      </button>
    )
  }
}

Button.propTypes = {
  customClassName: PropTypes.string,
  buttonContent: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
}
