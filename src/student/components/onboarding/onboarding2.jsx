import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import '../css/onboarding.css'

class OnBoarding2 extends Component {
  render() {
    return (
      <div className="onboarding2">
        <Header className="question" as="h1">
          Select Resume file to Upload
        </Header>
        <input type="file" placeholder="Select file" />
      </div>
    )
  }
}

export default OnBoarding2
