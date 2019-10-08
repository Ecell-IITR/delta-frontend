import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Input, SubmitButton } from '../../../core_containers'
import { register } from '../../actions/index'
import validateInput from '../../../utils/validation/validation'
import styles from '../css/login.module.css'

class RegisterStudent extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: 'abcd@gmail.com',
      password1: 'password123',
      password2: 'password123'
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

  handleSubmit = e => {
    e.preventDefault()
    let { username, email, password1, password2 } = this.state
    if (username) {
      username = username.trim()
    }
    if (email) {
      email = email.trim()
    }
    if (password1) {
      password1 = password1.trim()
    }
    if (password2) {
      password2 = password2.trim()
    }
    if (password1 === password2) {
      const checkEmail = validateInput(email, 'email')
      const checkPass = validateInput(password1, 'password')
      if (checkEmail.isValid && checkPass.isValid) {
        this.props.dispatch(register(username, email, password1, password2))
      } else {
        this.setState({
          errors: checkEmail.errors.email
            ? checkEmail.errors.email
            : checkPass.errors.password
        })
      }
    } else {
      this.setState({
        errors: 'Passwords are not matching'
      })
    }
  }

  render() {
    const { username, password1, password2, errors } = this.state
    return (
      <div
        style={{
          width: '30vw',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {errors}

        <div className={styles.heading}>Welcome to DELTA</div>
        <div className={styles.subheading}>
          An online opportunity portal for students of IIT-R
        </div>
        <form
          style={{
            height: '70%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          onSubmit={this.handleSubmit}
        >
          <Input
            type="text"
            placeholder="Username"
            className={styles.loginField}
            name="username"
            value={username}
            onChange={this.onChange}
          />
          <Input
            type="password"
            placeholder="Password"
            className={styles.loginField}
            name="password1"
            value={password1}
            onChange={this.onChange}
          />
          <Input
            type="password"
            placeholder="Renter Your Password"
            className={styles.loginField}
            name="password2"
            value={password2}
            onChange={this.onChange}
          />
          <SubmitButton
            buttonContent="SignUp"
            className={styles.loginSubmit}
            color="purple"
          />
        </form>
      </div>
    )
  }
}

RegisterStudent.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    registering: state.registering
  }
}

export default connect(mapStateToProps)(RegisterStudent)
