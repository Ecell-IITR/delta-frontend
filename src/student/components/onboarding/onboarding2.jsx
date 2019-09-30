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
        <div class="onboarding2File">
          <label className="labelUploadFile" htmlFor="uploadFile">
            <div></div>
            Select File
          </label>
          <input id="uploadFile" type="file" />
        </div>
      </div>
    )
  }
}

export default OnBoarding2
