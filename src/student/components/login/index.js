import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Input, SubmitButton } from '../../../coreContainers'
import validateInput from '../../../utils/validation/validation'
import { login } from '../../actions/index'
import styles from '../css/login.module.css'
import { hasToken } from '../../utils'
import { TOKEN_TYPE } from '../../constants/index'
import PropTypes from 'prop-types'
import mainbuilding from '../../../images/mainbuilding.svg'

class LoginIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errors: ''
    }
  }
  componentDidMount() {
    if (hasToken(TOKEN_TYPE)) {
      this.props.history.push('/student/')
    }
  }
  onChange = e => {
    const name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value,
      errors: ''
    })
  }

  handleClick = e => {
    e.preventDefault()
    this.props.history.push('/student/register')
  }

  handleSubmit = e => {
    e.preventDefault()
    let { username, password } = this.state
    const { login } = this.props
    if (username) {
      username = username.trim()
    }
    if (password) {
      password = password.trim()
    }
    const checkUsername = validateInput(username, 'email')
    const checkPass = validateInput(password, 'password')
    if (!checkUsername.isValid)
      this.setState({
        errors: checkUsername.errors.email
      })
    if (!checkPass.isValid) {
      this.setState({
        errors: checkPass.errors.password
      })
    }
    if (checkPass.isValid && checkUsername.isValid)
      login(username, password, this.callback)
  }

  callback = error => {
    const { history } = this.props

    if (error === 'ok') history.push('/student/')
    else {
      this.setState({
        errors: 'Wrong credentials'
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
          <form className={styles.loginForm} onSubmit={this.handleSubmit}>
            <div className={styles['login-error-text']} style={{}}>
              {errors}
            </div>
            <Input
              type="text"
              placeholder="Email ID"
              className={styles.loginField}
              name="username"
              value={username}
              onChange={this.onChange}
            />
            <br />
            <Input
              type="password"
              placeholder="Password"
              className={styles.loginField}
              name="password"
              value={password}
              onChange={this.onChange}
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
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  loginInput: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  forgotPassword: PropTypes.string.isRequired,
  loginSubmit: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  history: PropTypes.isRequired
}

const mapStateToProps = state => {
  return {
    auth: state.studentReducer.login
  }
}

const mapActionToProps = dispatch => {
  return {
    login: (username, password, callback) => {
      return dispatch(login(username, password, callback))
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(LoginIndex)
