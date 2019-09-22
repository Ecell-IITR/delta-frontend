import React, { Component } from 'react'
import { Header, Input } from 'semantic-ui-react'
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

export const SocialLinks = () => (
  <Dropdown
    placeholder=" Select name of Website"
    selection
    options={socialLinkOptions}
  />
)

class OnBoarding3 extends Component {
  render() {
    return (
      <div className="onboarding3">
        <Header className="question" as="h1">
          Add Social Links
        </Header>
        <SocialLinks />
        <Input placeholder="Enter Website Url" />
      </div>
    )
  }
}

export default OnBoarding3
