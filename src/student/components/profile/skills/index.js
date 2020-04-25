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
  fetchSkills,
  setAddedSkills,
} from '../../../actions'

import styles from './index.css'

class Skill extends Component {
  componentDidMount = () => {
    const {
      studentSkills,
      setAddedSkillsComponent,
      fetchSkillsComponent,
    } = this.props
    fetchSkillsComponent()
    setAddedSkillsComponent(studentSkills)
  }

  handleChange = (e) => {
    const { skills, addedSkills, handleSkillsComponent } = this.props
    const toRemove = addedSkills
    let newList = []
    const currentList = skills.filter((item) => {
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
      skillsLoading,
    } = this.props
    return (
      <>
        {skillsLoading ? (
          <div>Loading...</div>
        ) : (
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
                    <button
                      type="button"
                      onClick={() => {
                        addSkillComponent(skill, index)
                      }}
                    >
                      <Icon name="add" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.addedSkills}>
              <div className={styles.selected}>
                <div className={styles['selected-skills-title']}>
                  Selected skills
                </div>
                <button
                  type="button"
                  className={styles['clear-button']}
                  onClick={() => {
                    removeAllComponent()
                  }}
                >
                  <div className={styles['clear-all-text']}>Clear All</div>
                  <div>
                    <Icon
                      size="large"
                      color="red"
                      // className={skills.removeAll}
                      name="remove circle"
                    />
                  </div>
                </button>
              </div>
              <div className={styles.skills}>
                {addedSkills.length > 0 &&
                  addedSkills.map((skill, index) => (
                    <div key={index}>
                      {skill}
                      <button
                        type="button"
                        onClick={() => {
                          removeSkillComponent(skill, index)
                        }}
                      >
                        <Icon name="remove circle" />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}
Skill.propTypes = {
  addedSkills: PropTypes.array,
  handleSkillsComponent: PropTypes.func.isRequired,
  skills: PropTypes.array.isRequired,
  addSkillComponent: PropTypes.func.isRequired,
  removeSkillComponent: PropTypes.func.isRequired,
  removeAllComponent: PropTypes.func,
  fetchSkillsComponent: PropTypes.func,
  skillsLoading: PropTypes.bool,
  setAddedSkillsComponent: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    skillsLoading: state.student.skill.skillsLoading,
    skills: state.student.skill.skills,
    studentSkills: state.student.profile.profile.skills,
    addedSkills: state.student.skill.addedSkills,
  }
}

const mapActionToProps = (dispatch) => {
  return {
    fetchSkillsComponent: () => {
      return dispatch(fetchSkills())
    },
    setAddedSkillsComponent: (studentSkills) => {
      return dispatch(setAddedSkills(studentSkills))
    },
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
