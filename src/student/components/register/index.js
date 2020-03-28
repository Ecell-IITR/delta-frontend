import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Input, SubmitButton } from '../../../core_containers'
import { Dropdown } from 'semantic-ui-react'
import { register } from '../../actions/index'
import validateInput from '../../../utils/validation/validation'
import styles from '../css/login.module.css'
import { Form, TextArea } from 'semantic-ui-react'

const branchOptions = [
  { key: 'ARN', value: 'ARN', text: 'B.Arch. Architecture' },
  { key: 'BTN', value: 'BTN', text: 'B. Tech. Biotechnology' },
  { key: 'CHN', value: 'CHN', text: 'B. Tech. Chemical Engineering' },
  { key: 'PEN', value: 'PEN', text: 'B. Tech. Polymer Science & Engineering' },
  { key: 'CEN', value: 'CEN', text: 'B. Tech. Civil Engineering' },
  { key: 'EEN', value: 'EEN', text: ' B. Tech. Electrical Engineering' },
  {
    key: 'ECN',
    value: 'ECN',
    text: ' B. Tech. Electronics & Communication Engineering'
  },
  { key: 'CSN', value: 'CSN', text: 'B. Tech. Computer Science & Engineering' },
  { key: 'MIN', value: 'MIN', text: ' B. Tech. Mechanical Engineering' },
  {
    key: 'IN',
    value: 'IN',
    text: 'B. Tech. Production & Industrial Engineering'
  },
  {
    key: 'MTN',
    value: 'MTN',
    text: ' B. Tech. Metallurgical & Materials Engineering'
  }
]
const socialLinkOptions = [
  { key: 'fb', text: 'Facebook', value: 'Facebook' },
  { key: 'likedin', text: 'linkedIn', value: 'linkedIn' },
  { key: 'tw', text: 'Twitter', value: 'Twitter' },
  { key: 'hk', text: 'HackerEarth', value: 'HackerEarth' },
  { key: 'gh', text: 'Github', value: 'Github' },
  { key: 'cf', text: 'CodeForce', value: 'CodeForce' },
  { key: 'cdechef', text: 'CodeChef', value: 'CodeChef' },
  { key: 'hr', text: 'HackerRank', value: 'HackerRank' }
]
const skillOptions = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'in', text: 'Industrial Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' }
]
export const SocialLinks = () => (
  <div style={{ display: 'inline-flex', marginRight: '20px' }}>
    <Dropdown
      placeholder="Select Social Links"
      search
      selection
      options={socialLinkOptions}
    />
    <Input placeholder="asd@mysite.com" />
  </div>
)
export const DropdownMultipleSelectionSkill = () => (
  <Dropdown
    placeholder=" Select Skills"
    search
    multiple
    selection
    options={skillOptions}
  />
)

export const Textarea = props => (
  <Form>
    <TextArea
      placeholder={props.placeholder}
      onChange={props.onChange}
      name={props.name}
    />
  </Form>
)
export const DropdownSelectionBranch = () => (
  <Dropdown
    placeholder="Select Branch"
    search
    selection
    options={branchOptions}
  />
)
class RegisterStudent extends Component {
  constructor() {
    super()
    this.state = {
      username: 'dsa',
      email: 'fdaks@kfa.ocm',
      password1: 'sheyansh',
      password2: 'sheyansh',
      errors: '',
      interest: '',
      Bio: 'alksjfchklerbcjrebcber',
      Achievements: 'jsfvwhebrc',
      resume: ''
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
    return (
      <div>
        {this.state.errors}
        <form onSubmit={this.handleSubmit}>
          <div>
            <Input
              type="text"
              placeholder="Name"
              name="username"
              onChange={this.onChange}
              value={this.state.username}
            />
          </div>
          <DropdownSelectionBranch />

          <Input
            type="number"
            placeholder="Year"
            name="Year"
            onChange={this.onChange}
            value={this.state.username}
          />
          <Input
            type="number"
            placeholder="Enrollment Number"
            name="enrollNo"
            onChange={this.onChange}
            value={this.state.username}
          />

          <Textarea
            value={this.state.Bio}
            placeholder="Write A short Bio about Yourself"
            onChange={this.onChange}
            name="Bio"
          />
          <DropdownMultipleSelectionSkill />
          <Textarea
            value={this.state.Achievements}
            placeholder="Write About your past Achievements.."
            onChange={this.onChange}
            name="Achievements"
          />
          <SocialLinks />
          <SocialLinks />
          <SocialLinks />
          <Input
            type="email"
            placeholder="Email ID"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
          />
          <div>
            Upload Resume
            <Input
              type="file"
              label="Upload Resume"
              placeholder="Upload Resume"
              name="resume"
              onChange={this.onChange}
              value={this.state.resume}
            />
          </div>
          <Input
            type="password"
            placeholder="password"
            name="password1"
            onChange={this.onChange}
            value={this.state.password1}
          />
          <Input
            type="password"
            placeholder="Reenter your password"
            name="password2"
            onChange={this.onChange}
            value={this.state.password2}
          />

          <SubmitButton />
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
