import React, { Component } from 'react'
import { Form, FormButton } from 'semantic-ui-react'
import PropTypes from 'prop-types'
export default class SubmitButton extends Component {
  constructor(props) {
    super(props)
    this.setState({
      content: ''
    })
  }
  componentWillMount = () => {
    if (this.props.buttonContent !== undefined) {
      this.setState({
        content: this.props.buttonContent
      })
    } else {
      this.setState({
        content: 'Submit'
      })
    }
  }

  render() {
    return (
      <Form.Button
        className={`${this.props.className}`}
        content={this.state.content}
      />
    )
  }
}

SubmitButton.propTypes = {
  className: PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired
}

