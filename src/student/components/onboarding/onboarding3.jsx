import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProfileSocialLinks } from '../../actions/index'
import { Header, Input, Dropdown } from 'semantic-ui-react'
import '../css/onboarding.css'

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

class onBoarding3 extends Component {
  handleChange = selectedOption => {
    addProfileSocialLinks(selectedOption)
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
          onChange={this.handleChange}
        />
        <Input placeholder="Enter Website Url" />
      </div>
    )
  }
}

export default connect(
  null,
  null
)(onBoarding3)
