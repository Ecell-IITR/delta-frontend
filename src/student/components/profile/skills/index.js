/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Input } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import {
  showSkills,
  addSkill,
  removeSkill,
  handleSkills,
  removeAll,
} from '../../../actions'

import styles from './index.css'

const constantList = [
  'web developer',
  'Competitive coder',
  'blockchain developer',
  'machine learning',
  'designer',
  'deep learning',
  'finance',
  'quant',
]

class Skill extends Component {
  componentDidMount = () => {
    const { showSkillsComponent } = this.props
    showSkillsComponent()
  }

  handleChange = (e) => {
    const { addedSkills, handleSkillsComponent } = this.props
    const toRemove = addedSkills
    let newList = []
    const currentList = constantList.filter((item) => {
      return toRemove.indexOf(item) < 0
    })
    if (e.target.value !== '') {
      newList = currentList.filter((item) => {
        const lc = item.toLowerCase()
        const filter = e.target.value.toLowerCase()
        return lc.includes(filter)
      })
    } else newList = currentList
    handleSkillsComponent(newList)
  }

  render() {
    const {
      skills,
      addSkillComponent,
      removeAllComponent,
      removeSkillComponent,
      addedSkills,
    } = this.props
    return (
      <div className={styles['skills-container']}>
        <div className={styles.filterSkills}>
          <div className={styles.searchBox}>
            <Input
              className={styles.searchBoxinput}
              icon="search"
              placeholder="Add Skills..."
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.skills}>
            {skills.map((skill, index) => (
              <div key={index}>
                {skill}
                <span
                  onClick={() => {
                    addSkillComponent(skill, index)
                  }}
                >
                  <Icon name="add" />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.addedSkills}>
          <div className={styles.selected}>
            <div>
              <p> Selected skills</p>
            </div>
            <span
              onClick={() => {
                removeAllComponent()
              }}
            >
              <p>Clear All</p>
              <Icon
                size="large"
                color="red"
                // className={skills.removeAll}
                name="remove circle"
              />
            </span>
          </div>
          <div className={styles.skills}>
            {addedSkills.map((skill, index) => (
              <div key={index}>
                {skill}
                <span
                  onClick={() => {
                    removeSkillComponent(skill, index)
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
  showSkillsComponent: PropTypes.func.isRequired,
  addedSkills: PropTypes.array.isRequired,
  handleSkillsComponent: PropTypes.func.isRequired,
  skills: PropTypes.array.isRequired,
  addSkillComponent: PropTypes.func.isRequired,
  removeSkillComponent: PropTypes.func.isRequired,
  removeAllComponent: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    skills: state.student.skill.skills,
    addedSkills: state.student.skill.addedSkills,
  }
}

const mapActionToProps = (dispatch) => {
  return {
    showSkillsComponent: () => {
      return dispatch(showSkills())
    },
    addSkillComponent: (skill) => {
      return dispatch(addSkill(skill))
    },
    removeSkillComponent: (skill) => {
      return dispatch(removeSkill(skill))
    },
    handleSkillsComponent: (newArray) => {
      return dispatch(handleSkills(newArray))
    },
    removeAllComponent: () => {
      return dispatch(removeAll())
    },
  }
}

export default connect(mapStateToProps, mapActionToProps)(Skill)
