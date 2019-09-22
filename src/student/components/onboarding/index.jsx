import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import OnBoarding1 from './onboarding1'
import Onboarding2 from './onboarding2'
import OnBoarding3 from './onboarding3'
import '../css/onboarding.css'

class OnBoardingIndex extends Component {
  constructor(orops) {
    super(props)
    this.state = {}
  }
  handleClick = () => {}
  render() {
    return (
      <div className="onboarding">
        <OnBoarding1 />
        <footer>
          <Button basic color="blue" onClick={this.handleClick}>
            Skip
          </Button>
          <div className="dots">
            <div className="dot1"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
          </div>
          <Button primary onClick={this.handleClick}>
            Next
          </Button>
        </footer>
      </div>
    )
  }
}

export default OnBoardingIndex
