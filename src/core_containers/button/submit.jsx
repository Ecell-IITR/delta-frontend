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
        style={{ background: `${this.props.color}` }}
        className={`${this.props.className}`}
        content={this.state.content}
        color={this.props.color}
      />
    )
  }
}

SubmitButton.propTypes = {
  className: PropTypes.string.isRequired,
<<<<<<< HEAD
  buttonContent: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func
}
=======
  buttonContent: PropTypes.string.isRequired
}

>>>>>>> Added extra proptypes
