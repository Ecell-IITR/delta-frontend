/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logoutAction } from '../actions'

class Logout extends Component {
  componentDidMount() {
    const { logoutComponent } = this.props
    logoutComponent(this.callback)
  }

  callback = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return <></>
  }
}
Logout.propTypes = {
  history: PropTypes.object.isRequired,
  logoutComponent: PropTypes.func.isRequired,
}
const mapActionToProps = (dispatch) => {
  return {
    logoutComponent: (callback) => {
      return dispatch(logoutAction(callback))
    },
  }
}

export default connect(null, mapActionToProps)(Logout)
