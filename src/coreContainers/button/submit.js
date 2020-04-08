import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class SubmitButton extends Component {
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
    const { color, className } = this.props
    const { content } = this.state

    return (
      <Form.Button
        style={{ background: `${color}` }}
        className={`${className}`}
        content={content}
        color={color}
      />
    )
  }
}

SubmitButton.propTypes = {
  className: PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
}
