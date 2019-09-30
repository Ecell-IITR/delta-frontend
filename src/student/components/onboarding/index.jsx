import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import OnBoarding1 from './onboarding1'
import OnBoarding2 from './onboarding2'
import OnBoarding3 from './onboarding3'
import '../css/onboarding.css'
import mainbuilding from '../../../images/mainbuilding.svg'

var slideIndex = 1
class OnBoardingIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount = () => {
    this.showSlides(slideIndex)
  }
  Skip = n => {
    this.showSlides((slideIndex += n))
  }

  Next = n => {
    this.showSlides((slideIndex += n))
  }
  Current = n => {
    this.showSlides((slideIndex = n))
  }
  showSlides = n => {
    var i
    var slides = document.getElementsByClassName('slide')
    var dots = document.getElementsByClassName('dot')
    if (slideIndex > slides.length) {
      slideIndex = 1
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
    }
    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex - 1].className += ' active'
  }
  render() {
    return (
      <div className="onboardingContainer">
        <div className="onboarding">
          <div className="slider">
            <div className="slide fade">
              <OnBoarding1 />
            </div>
            <div className="slide fade">
              <OnBoarding2 />
            </div>
            <div className="slide fade">
              <OnBoarding3 />
            </div>
          </div>
          <div className="footer">
            <Button
              basic
              color="blue"
              onClick={() => {
                this.Skip(1)
              }}
            >
              Skip
            </Button>
            <div className="dots">
              <div
                className="dot"
                onClick={() => {
                  this.Current(1)
                }}
              ></div>
              <div
                className="dot"
                onClick={() => {
                  this.Current(2)
                }}
              ></div>
              <div
                className="dot"
                onClick={() => {
                  this.Current(3)
                }}
              ></div>
            </div>
            <Button
              primary
              onClick={() => {
                this.Next(1)
              }}
            >
              Next
            </Button>
          </div>
        </div>
        <div className="loginMainBuilding">
          <img src={mainbuilding} alt="main building" />
        </div>
      </div>
    )
  }
}

export default OnBoardingIndex
