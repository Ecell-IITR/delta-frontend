import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class GenButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  render() {
    const { content } = this.props
    const { isActive } = this.state
    return (
      <Button
        primary={this.state.isActive}
        onClick={() => {
          this.setState({ isActive: !isActive })
        }}
      >
        {content}
      </Button>
    )
  }
}
GenButton.propTypes = {
  IsActive: PropTypes.bool,
  className: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
