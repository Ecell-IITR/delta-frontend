import React, { Component } from 'react'
/*import PropTypes from 'prop-types'*/
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Input, SubmitButton } from '../../../coreContainers'

import styles from '../css/login.css'

class LoginIndex extends Component {
  render() {
    return (
      <div styleName="styles.login">
        <div styleName="styles.loginInput">
          <div styleName="styles.heading">Welcome to DELTA</div>
          <div styleName="styles.subheading">
            An online opportunity portal for students of IIT-R
          </div>
          <Input
            type="email"
            placeholder="Email ID"
            styleName="styles.loginField"
          />
          <Input
            type="password"
            placeholder="Password"
            styleName="styles.loginField"
          />
          <div styleName="styles.forgotPassword">
            <Link to="#">Forgot Password?</Link>
          </div>
          <SubmitButton
            buttonContent="Sign Up"
            styleName="styles.loginSubmit"
          />
        </div>
      </div>
    )
  }
}

// Props validation
LoginIndex.propTypes = {}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginIndex)
