import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import { createProfile } from '../../actions/index'
import OnBoarding1 from './onboarding1'
import OnBoarding2 from './onboarding2'
import OnBoarding3 from './onboarding3'
import RegisterStudent from './onboarding0'
import '../css/onboarding.css'

let slideIndex = 1

class onBoardingIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount = () => {
    this.showSlides(slideIndex)
  }

  skip = (n) => {
    this.showSlides((slideIndex += n))
  }

  next = (n) => {
    // if (slideIndex === 3) {
    //   this.props.createProfile(this.props.info)
    // }
    this.showSlides((slideIndex += n))
  }

  current = (n) => {
    this.showSlides((slideIndex = n))
  }

  showSlides = (n) => {
    let i
    const slides = document.getElementsByClassName('slide')
    const dots = document.getElementsByClassName('dot')
    const onboarding = document.getElementById('onboarding')
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    if (slideIndex === 1) {
      onboarding.style.height = '60vh'
    } else onboarding.style.height = '45vh'
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
        <div className="onboarding" id="onboarding">
          <div className="slider">
            <div className="slide fade">
              <RegisterStudent />
            </div>
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
                this.skip(1)
              }}
            >
              Skip
            </Button>
            <div className="dots">
              <div
                className="dot"
                onClick={() => {
                  this.current(1)
                }}
              ></div>
              <div
                className="dot"
                onClick={() => {
                  this.current(2)
                }}
              ></div>
              <div
                className="dot"
                onClick={() => {
                  this.current(3)
                }}
              ></div>
              <div
                className="dot"
                onClick={() => {
                  this.current(4)
                }}
              ></div>
            </div>
            <Button
              primary
              onClick={() => {
                this.next(1)
              }}
            >
              Next
            </Button>
          </div>
        </div>
        <div className="loginMainBuilding"></div>
      </div>
    )
  }
}

onBoardingIndex.propTypes = {
  info: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    info: state.studentReducer.profile.info,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProfile: (info) => {
      return dispatch(createProfile(info))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(onBoardingIndex)
