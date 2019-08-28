<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component } from 'react'
import { Icon, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'
=======
import React, { Component } from "react"
import { Icon, Label } from "semantic-ui-react"
import PropTypes from "prop-types"
>>>>>>> PropType added
=======
import React, { Component } from 'react'
import { Icon, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'
>>>>>>> Added extra proptypes
export default class label extends Component {
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
label.propTypes = {
  labelName: PropTypes.string
}
