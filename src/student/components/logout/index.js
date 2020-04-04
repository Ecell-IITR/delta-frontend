import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { log_out } from '../../actions/index'

class Logout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.logout(this.callback)
  }

  callback = () => {
    this.props.history.push('/student/login')
  }

  render() {
    return <></>
  }
}
Logout.propTypes = {
  history: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
}
const mapActionToProps = (dispatch) => {
  return {
    logout: (callback) => {
      return dispatch(log_out(callback))
    },
  }
}

export default connect(null, mapActionToProps)(Logout)
