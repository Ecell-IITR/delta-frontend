import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class StudentDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>Welcome!</div>
  }
}

const mapActionToProps = (dispatch) => {
  return {}
}
StudentDashboard.propTypes = {
  history: PropTypes.object.isRequired,
}

export default connect(null, mapActionToProps)(StudentDashboard)
