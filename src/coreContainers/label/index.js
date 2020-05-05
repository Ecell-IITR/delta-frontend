import React, { Component } from 'react'
import { Icon, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class Labeltag extends Component {
  render() {
    return (
      <div>
        <Label image>
          {this.props.labelName}
          <Icon name="delete" />
        </Label>
      </div>
    )
  }
}
Labeltag.propTypes = {
  labelName: PropTypes.string,
}
