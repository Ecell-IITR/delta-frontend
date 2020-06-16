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
  searchSkills,
  removeAll,
  fetchSkills,
  setAddedSkills,
} from '../../../actions'

import styles from './index.css'

class Skill extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount = () => {
    const {
      studentSkills,
      setAddedSkillsComponent,
      fetchSkillsComponent,
    } = this.props
    setAddedSkillsComponent(studentSkills)
    fetchSkillsComponent()
  }

  handleChange = (e) => {
    const { searchSkillsComponent } = this.props
    searchSkillsComponent(e.target.value)
  }

  renderSkills = (skillsList) => {
    const { addSkillComponent, isSkillLoading, skillSlug } = this.props
    return (
      <>
        {skillsList.map((skill) => (
          <div key={skill.slug}>
            {skill.name}
            <button
              type="button"
              className={styles['add-button']}
              onClick={() => {
                addSkillComponent(skill.slug)
              }}
            >
              {isSkillLoading && skillSlug === skill.slug ? (
                <div class="spinner-border text-primary" role="status"></div>
              ) : (
                  <Icon name="add" />
                )}
            </button>
          </div>
        ))}
      </>
    )
  }

  render() {
    const {
      skills,
      removeAllComponent,
      removeSkillComponent,
      addedSkills,
      skillsLoading,
      renderSearchedSkills,
      isSkillLoading,
      skillSlug,
      removeAllLoading,
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
                    placeholder="Search Skills..."
                    onChange={this.handleChange}
                  />
                </div>
                <div className={styles.skills}>
                  {renderSearchedSkills && renderSearchedSkills.length
                    ? this.renderSkills(renderSearchedSkills)
                    : this.renderSkills(skills)}
                </div>
              </div>

              <div className={styles.addedSkills}>
                <div className={styles.selected}>
                  <div className={styles['selected-skills-title']}>
                    Selected Skills
                </div>
                  {addedSkills && addedSkills.length ? (
                    <button
                      type="button"
                      className={styles['clear-button']}
                      onClick={removeAllComponent}
                    >
                      <div className={styles['clear-all-text']}>Clear All</div>
                      <div>
                        {removeAllLoading ? (
                          <div
                            class="spinner-border text-primary"
                            role="status"
                          ></div>
                        ) : (
                            <Icon
                              size="large"
                              color="red"
                              // className={skills.removeAll}
                              name="remove circle"
                            />
                          )}
                      </div>
                    </button>
                  ) : (
                      <></>
                    )}
                </div>
                <div className={styles.skills}>
                  {addedSkills &&
                    addedSkills.map((skill) => (
                      <div key={skill.slug}>
                        {skill.name}
                        <button
                          type="button"
                          className={styles['remove-button']}
                          onClick={() => {
                            removeSkillComponent(skill.slug)
                          }}
                        >
                          {isSkillLoading && skillSlug === skill.slug ? (
                            <div
                              class="spinner-border text-primary"
                              role="status"
                            ></div>
                          ) : (
                              <Icon name="remove circle" />
                            )}
                        </button>
                      </div>
                    ))}
                  {addedSkills && addedSkills.length === 0 ? (
                    <div>No added skills</div>
                  ) : (
                      <></>
                    )}
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
  searchSkillsComponent: PropTypes.func.isRequired,
  skills: PropTypes.array.isRequired,
  addSkillComponent: PropTypes.func.isRequired,
  removeSkillComponent: PropTypes.func.isRequired,
  removeAllComponent: PropTypes.func,
  fetchSkillsComponent: PropTypes.func,
  skillsLoading: PropTypes.bool,
  setAddedSkillsComponent: PropTypes.func,
  renderSearchedSkills: PropTypes.array,
}

const mapStateToProps = (state) => {
  return {
    skillsLoading: state.student.skill.skillsLoading,
    skills: state.student.skill.skills,
    studentSkills: state.student.profile.profile.skills,
    addedSkills: state.student.skill.addedSkills,
    renderSearchedSkills: state.student.skill.renderSearchedSkills,
    isSkillLoading: state.student.skill.isSkillLoading,
    skillSlug: state.student.skill.skillSlug,
    removeAllLoading: state.student.skill.removeAllLoading,
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
    addSkillComponent: (slug) => {
      return dispatch(addSkill(slug))
    },
    removeSkillComponent: (slug) => {
      return dispatch(removeSkill(slug))
    },
    searchSkillsComponent: (query) => {
      return dispatch(searchSkills(query))
    },
    removeAllComponent: () => {
      return dispatch(removeAll())
    },
  }
}

export default connect(mapStateToProps, mapActionToProps)(Skill)
