import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Dropdown from '../../../core_containers/dropdown/index'
import { Header, Input } from 'semantic-ui-react'
import '../css/onboarding.css'

const socialLinkOptions = [
  { label: 'Facebook', value: 'Facebook' },
  { label: 'linkedIn', value: 'linkedIn' },
  { label: 'Twitter', value: 'Twitter' },
  { label: 'HackerEarth', value: 'HackerEarth' },
  { label: 'Github', value: 'Github' },
  { label: 'CodeForce', value: 'CodeForce' },
  { label: 'CodeChef', value: 'CodeChef' },
  { label: 'HackerRank', value: 'HackerRank' }
]

class onBoarding3 extends Component {
  handleChange = selectedOption => {
    console.log(selectedOption.label)
    this.props.dispatch({
      type: 'ADD_PROFILE_SOCIAL_LINKS',
      payload: selectedOption.label
    })
  }
  render() {
    return (
      <div className="onboarding3">
        <Header className="question" as="h1">
          Add Social Links
        </Header>
        <Dropdown
          placeholder=" Select name of Website"
          selection
          options={socialLinkOptions}
          handleChange={this.handleChange}
        />
        <input className="onboarding3Input" placeholder="Enter Website Url" />
      </div>
    )
  }
}

onBoarding3.propTypes = {
  dispatch: PropTypes.func
}
export default connect(
  null,
  null
)(onBoarding3)
