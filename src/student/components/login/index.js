import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Input, SubmitButton } from '../../../coreContainers'
import validateInput from '../../../utils/validation/validation'
import { loginAction } from '../../actions/index'
import { hasToken } from '../../utils'
import { TOKEN_TYPE } from '../../constants/index'
import mainbuilding from '../../../images/mainbuilding.svg'

import styles from '../css/login.css'

class LoginIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errors: '',
    }
  }

  componentDidMount() {
    const { history } = this.props
    if (hasToken(TOKEN_TYPE)) {
      history.push('/student/')
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
    const { history } = this.props

    history.push('/student/register')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let { username, password } = this.state
    const { loginComponent } = this.props

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
    if (checkPass.isValid) loginComponent(username, password, this.callback)
  }

  callback = (error) => {
    const { history } = this.props

    if (error === 'ok') history.push('/student/')
    else {
      this.setState({
        errors: 'Wrong credentials',
      })
    }
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
    auth: state.studentReducer.login,
  }
}

const mapActionToProps = (dispatch) => {
  return {
    loginComponent: (username, password, callback) => {
      return dispatch(loginAction(username, password, callback))
    },
  }
}

export default connect(mapStateToProps, mapActionToProps)(LoginIndex)
