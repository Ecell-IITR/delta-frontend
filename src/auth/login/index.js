import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { notify } from 'react-notify-toast'
import { NOTIF_SUCCESS_TYPE } from 'globalConstants'
import validateInput from 'utils/validation/validation'
import { Input, SubmitButton } from '../../coreContainers'
import { loginAction } from '../actions'
import mainbuilding from '../../images/mainbuilding.svg'

import styles from './style.css'

class LoginIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errors: '',
    }
  }

  handleChange = (e) => {
    const { name } = e.target
    const { value } = e.target
    this.setState({
      [name]: value,
      errors: '',
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    // const { history } = this.props
    // history.push('/register')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let { username, password } = this.state
    const { loginComponent, history } = this.props

    if (username) {
      username = username.trim()
    }
    if (password) {
      password = password.trim()
    }

    const checkPass = validateInput(password, 'password')
    if (!checkPass.isValid) {
      this.setState({
        errors: checkPass.errors.password,
      })
    }
    const data = {
      username,
      password,
    }
    if (checkPass.isValid)
      loginComponent(data, (status) => {
        if (status === 200) {
          notify.show('Successfully logged in!', NOTIF_SUCCESS_TYPE, 1000)
          history.push('/')
        } else {
          notify.show('Something went wrong!', 'error', 3000)
        }
      })
  }

  render() {
    const { username, password, errors } = this.state
    return (
      <div className={styles.login}>
        <div className={styles.loginInput}>
          <div className={styles.heading}>Welcome to DELTA</div>
          <div className={styles.subheading}>
            An online opportunity portal for students of IIT-R
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className={styles['login-error-text']}>{errors}</div>
            <Input
              type="text"
              placeholder="Email ID"
              className={styles.loginField}
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <br />
            <Input
              type="password"
              placeholder="Password"
              className={styles.loginField}
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <div className={styles.forgotPassword}>
              <Link to="#">Forgot Password?</Link>
            </div>
            <SubmitButton
              buttonContent="Log in"
              className={styles.loginSubmit}
            />
          </form>
          <div className={styles.loginOption}>
            <div className={styles.notMember}>
              <Link to="#">If you are not a member</Link>
            </div>
            <div onClick={this.handleClick}>
              <SubmitButton
                className={styles.loginNotMember}
                buttonContent="Sign up"
              />
            </div>
          </div>
        </div>
        <img
          src={mainbuilding}
          className={styles.loginMainBuilding}
          alt="main building"
        />
      </div>
    )
  }
}
LoginIndex.propTypes = {
  history: PropTypes.isRequired,
  loginComponent: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.login,
  }
}

const mapActionToProps = (dispatch) => {
  return {
    loginComponent: (data, callback) => {
      return dispatch(loginAction(data, callback))
    },
  }
}

export default connect(mapStateToProps, mapActionToProps)(LoginIndex)
