import React, { Component } from 'react'
import SubmitButton from '../../../coreContainers/button/submit'
import { connect } from 'react-redux'
import { viewResume } from '../../actions'
import PropTypes from 'prop-types'

class ViewResume extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleClick = () => {
    this.props.viewResume()
  }

  render() {
    return (
      <div className="viewResume" onClick={this.handleClick}>
        <SubmitButton color="white" buttonContent="View Resume" />
      </div>
    )
  }
}

ViewResume.propTypes = {
  viewResume: PropTypes.func
}

function mapdispatchToProps(dispatch) {
  return {
    viewResume: () => {
      dispatch(viewResume())
    }
  }
}

export default connect(null, mapdispatchToProps)(ViewResume)
