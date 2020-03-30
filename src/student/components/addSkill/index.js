/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  showSkills,
  addSkill,
  removeSkill,
  handleSkills,
  removeAll
} from '../../actions/index'
import { Icon, Input } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import skills from '../css/skill.css'

const constantList = [
  'web developer',
  'Competitive coder',
  'blockchain developer',
  'machine learning',
  'designer',
  'deep learning',
  'finance',
  'quant'
]

class Skill extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount = () => {
    this.props.showSkills()
  }

  handleChange = e => {
    let toRemove = this.props.addedSkills
    let newList = []
    let currentList = constantList.filter(function(item) {
      return toRemove.indexOf(item) < 0
    })
    if (e.target.value !== '') {
      newList = currentList.filter(item => {
        const lc = item.toLowerCase()
        const filter = e.target.value.toLowerCase()
        return lc.includes(filter)
      })
    } else newList = currentList
    this.props.handleSkills(newList)
  }
  render() {
    console.log(this.props)
    return (
      <div styleName="skills.skills_container">
        <div styleName="skills.filterSkills">
          <div styleName="skills.searchBox">
            <Input
              icon="search"
              placeholder="Add Skills..."
              onChange={this.handleChange}
            />
          </div>
          <div styleName="skills.skills">
            {this.props.skills.map((skill, index) => (
              <div key={index}>
                {skill}
                <span
                  onClick={() => {
                    this.props.addSkill(skill, index)
                  }}
                >
                  <Icon name="add" />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div styleName="skills.addedSkills">
          <div styleName="skills.selected">
            <div>
              <p> Selected skills</p>
            </div>
            <span
              onClick={() => {
                this.props.removeAll()
              }}
            >
              <p>Clear All</p>
              <Icon
                size="large"
                color="red"
                // styleName="skills.removeAll"
                name="remove circle"
              />
            </span>
          </div>
          <div styleName="skills.skills">
            {this.props.addedSkills.map((skill, index) => (
              <div key={index}>
                {skill}
                <span
                  onClick={() => {
                    this.props.removeSkill(skill, index)
                  }}
                >
                  <Icon name="remove circle" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
Skill.propTypes = {
  showSkills: PropTypes.func.isRequired,
  addedSkills: PropTypes.array.isRequired,
  handleSkills: PropTypes.func.isRequired,
  skills: PropTypes.array.isRequired,
  addSkills: PropTypes.func.isRequired,
  removeSkill: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    skills: state.studentReducer.skill.skills,
    addedSkills: state.studentReducer.skill.addedSkills
  }
}

const mapActionToProps = dispatch => {
  return {
    showSkills: () => {
      return dispatch(showSkills())
    },
    addSkill: skill => {
      return dispatch(addSkill(skill))
    },
    removeSkill: skill => {
      return dispatch(removeSkill(skill))
    },
    handleSkills: newArray => {
      return dispatch(handleSkills(newArray))
    },
    removeAll: () => {
      return dispatch(removeAll())
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(Skill)
