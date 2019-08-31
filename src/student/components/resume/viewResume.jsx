import React, { Component } from 'react'
import SubmitButton from '../../../core_containers/button/submit'
import { connect } from 'react-redux'
import { viewResume } from '../../actions'

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

function mapdispatchToProps(dispatch) {
  return {
    viewResume: () => {
      dispatch(viewResume())
    }
  }
}

export default connect(
  null,
  mapdispatchToProps
)(ViewResume)
