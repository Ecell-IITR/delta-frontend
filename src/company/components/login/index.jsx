import React, { Component } from 'react'
/*import PropTypes from 'prop-types'*/
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Input, SubmitButton } from '../../../core_containers'
import styles from '../css/login.module.css'

class LoginIndex extends Component {
  render() {
    return (
      <div className={styles.login}>
        <div className={styles.loginInput}>
          <div className={styles.heading}>Welcome to DELTA</div>
          <div className={styles.subheading}>
            An online opportunity portal for students of IIT-R
          </div>
          <Input
            type="email"
            placeholder="Email ID"
            className={styles.loginField}
          />
          <Input
            type="password"
            placeholder="Password"
            className={styles.loginField}
          />
          <div className={styles.forgotPassword}>
            <Link to="#">Forgot Password?</Link>
          </div>
          <SubmitButton
            buttonContent="Sign Up"
            className={styles.loginSubmit}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginIndex)
