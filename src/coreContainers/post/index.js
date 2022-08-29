/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-case-declarations */
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'
import Card from 'react-bootstrap/Card'
import {
  faChevronDown,
  faChevronUp,
  faBookmark,
  faUser,
  faCalendar,
  faClock,
  faCheckCircle,
  faTrash,
  // faMarker,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { STUDENT_ROLE, COMPANY_ROLE } from 'globalConstants'
import { getImageURL } from 'utils/getImageURL'
import { getTimeLeft } from 'utils/getTimeLeft'
import { kFormatter } from 'utils/numberFormatter'
import Popup from 'reactjs-popup'
import {
  INTERNSHIP_POST_TYPE_KEY,
  // COMPETITION_POST_TYPE_KEY,
  // PROJECT_POST_TYPE_KEY,
} from '../../student/constants'
import EditPost from './edit-popup'
import { fetchLocations, fetchSkills, fetchTags } from '../../student/actions'

import styles from './index.css'
console.log('opportunity.applicantsCount')
function CustomToggle({ eventKey }) {
  const [open, setOpen] = useState(false)
  const decoratedOnClick = useAccordionToggle(eventKey, () => setOpen(!open))

  return (
    <div
      onClick={decoratedOnClick}
      role="button"
      tabIndex="0"
      className={styles['view-more-button']}
    >
      <span>View {open ? 'less' : 'more'}</span>
      <FontAwesomeIcon
        icon={open ? faChevronUp : faChevronDown}
        className={styles['accordion-arrow-btn']}
      />
    </div>
  )
}

class PostComponent extends Component {
  getUserSection = (profile) => {
    const { person, companyDomain } = profile
    switch (person.roleType) {
      case STUDENT_ROLE:
        return (
          <div className={styles['user-section-wrapper']}>
            <div>
              <div>{person.username}</div>
              <div>{STUDENT_ROLE}</div>
            </div>
            <div className={styles['user-image']}>
              <img src={getImageURL(person.profileImage)} alt="profile-pic" />
            </div>
          </div>
        )
      case COMPANY_ROLE:
        return (
          <div className={styles['user-section-wrapper']}>
            <div>
              <div>{person.username}</div>
              <div>{companyDomain}</div>
            </div>
            <div className={styles['user-image']}>
              <img src={getImageURL(person.profileImage)} alt="profile-pic" />
            </div>
          </div>
        )
      default:
        return <></>
    }
  }

  getPostUpperSection = () => {
    const { opportunity } = this.props

    switch (opportunity.postType) {
      case INTERNSHIP_POST_TYPE_KEY:
        const {
          title,
          stipend,
          // workType,
          userMinProfile,
          // applicantsCount,
          // postExpiryDate,
        } = opportunity
        return (
          <div className={styles['post-upper-section']}>
            <div className={styles['post-uppermost-info-sec']}>
              <div className={styles['post-basic-info-wrapper']}>
                <div className={styles['post-title']}>{title}</div>
                <div
                  className={styles['post-sti-work']}
                >{`Stipend: ${kFormatter(stipend)}`}</div>
              </div>
              <div className={styles['post-user-section']}>
                {this.getUserSection(userMinProfile)}
              </div>
            </div>
            <div className={styles['post-some-info-section']}>
              <div>
                <FontAwesomeIcon icon={faUser} />
                <span>{opportunity.applicantsCount} Applicants</span>
              </div>
              {opportunity.location ? (
                <div>
                  <FontAwesomeIcon icon={faMapMarker} />
                  <span>{opportunity.location.name}</span>
                </div>
              ) : (
                <></>
              )}
              {opportunity.durationValue ? (
                <div>
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>
                    {`${opportunity.durationValue} day${
                      opportunity.durationValue > 1 ? 's' : ''
                    }`}
                  </span>
                </div>
              ) : (
                <></>
              )}
              <div>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  {new Date(opportunity.postExpiryDate) < Date.now()
                    ? 'Expired'
                    : `${getTimeLeft(opportunity.postExpiryDate)} left`}
                </span>
              </div>
            </div>
          </div>
        )
      default:
        return <></>
    }
  }

  getPostCollapseSection = () => {
    const { opportunity } = this.props

    switch (opportunity.postType) {
      case INTERNSHIP_POST_TYPE_KEY:
        const { description, requiredSkills, tags } = opportunity
        return (
          <div className={styles['post-collapse-section']}>
            {description ? (
              <div className={styles['work-description']}>
                <div className={styles['work-description-header']}>
                  Work Description
                </div>
                <div
                  className={styles['work-description-body']}
                  dangerouslySetInnerHTML={{ __html: opportunity.description }}
                ></div>
              </div>
            ) : (
              <></>
            )}
            {requiredSkills && requiredSkills.length > 0 ? (
              <div className={styles['skill-required']}>
                <div className={styles['skill-required-header']}>
                  Skill-set required
                </div>
                <div className={styles['skill-required-body']}>
                  {requiredSkills.map((skill) => (
                    <div key={skill.slug}>{skill.name}</div>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}
            {tags && tags.length > 0 ? (
              <div className={styles['skill-required']}>
                <div className={styles['skill-required-header']}>Tags</div>
                <div className={styles['tags-body']}>
                  {tags.map((tag) => (
                    <div className={styles.tag} key={tag.hash}>
                      {tag.title}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        )
      default:
        return <></>
    }
  }

  render() {
    const {
      opportunity,
      username,
      bookmarkPost,
      appliedLoadingSlug,
      isAppliedLoading,
      applyPost,
      deletePost,
      editPostComponent,
      skills,
      skillsLoading,
      fetchSkillsComponent,
      locations,
      locationsLoading,
      fetchLocationsComponent,
      fetchTagsComponent,
      tags,
      tagsLoading,
    } = this.props

    const ownUser = opportunity?.userMinProfile?.person?.username === username

    return (
      <div className={styles.post}>
        <div>{this.getPostUpperSection()}</div>
        <div>
          <Accordion defaultActiveKey="0">
            <Card className={styles['accordion-card']}>
            
            <div className={styles['post-upper-section']}>
            <div className={styles['post-uppermost-info-sec']}>
              <div className={styles['post-basic-info-wrapper']}>
                <div className={styles['post-title']}>{opportunity.title}</div>
                <div
                  className={styles['post-sti-work']}
                >{`Stipend: ${kFormatter(opportunity.stipend)}`}</div>
              </div>
              </div>
              <div className={styles['post-some-info-section']}>
              <div>
                <FontAwesomeIcon icon={faUser} />
                <span>{opportunity.applicantsCount} Applicants</span>
              </div>
             
                {/* <div>
                  <FontAwesomeIcon icon={faMapMarker} />
                  <span>{opportunity.location.name}</span>
                </div> */}
            
                 <div>
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>
                    {`${opportunity.durationValue} day${
                      opportunity.durationValue > 1 ? 's' : ''
                    }`}
                  </span>
                </div>
                <div>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  {new Date(opportunity.postExpiryDate) < Date.now()
                    ? 'Expired'
                    : `${getTimeLeft(opportunity.postExpiryDate)} left`}
                </span>
              </div>
              </div>
              </div>
             
            
              <Accordion.Collapse
                eventKey="1"
                className={styles['accordion-collapse']}
              >
                <Card.Body className={styles['accordion-card-body']}>
                  {this.getPostCollapseSection()}
                  <div className={styles['work-description']}>
                <div className={styles['work-description-header']}>
                  Work Description
                </div>
                <div
                  className={styles['work-description-body']}
                  dangerouslySetInnerHTML={{ __html: opportunity.description }}
                ></div>
              </div>
              <div className={styles['skill-required']}>
                <div className={styles['skill-required-header']}>
                  Skill-set required
                </div>
                <div className={styles['skill-required-body']}>
                  {opportunity.requiredSkills.map((skill) => (
                    <div key={skill.slug}>{skill.name}</div>
                  ))}
                </div>
              </div>
              <div className={styles['skill-required']}>
                <div className={styles['skill-required-header']}>Tags</div>
                <div className={styles['tags-body']}>
                  {opportunity.tags.map((tag) => (
                    <div className={styles.tag} key={tag.hash}>
                      {tag.title}
                    </div>
                  ))}
                </div>
              </div>
                  
{/*         
          <div className={styles['post-collapse-section']}>
            
              <div className={styles['work-description']}>
                <div className={styles['work-description-header']}>
                  Work Description
                </div>
                <div
                  className={styles['work-description-body']}
                  dangerouslySetInnerHTML={{ __html: description }}
                ></div>
              </div>
           
            
          
              <div className={styles['skill-required']}>
                <div className={styles['skill-required-header']}>
                  Skill-set required
                </div>
                <div className={styles['skill-required-body']}>
                  {requiredSkills.map((skill) => (
                    <div key={skill.slug}>{skill.name}</div>
                  ))}
                </div>
              </div>
           
           
              <div className={styles['skill-required']}>
                <div className={styles['skill-required-header']}>Tags</div>
                <div className={styles['tags-body']}>
                {tags.map((tag) => (
                    <div className={styles.tag} key={tag.hash}>
                      {tag.title}
                    </div>
                  ))}
                    </div>
                    </div>
                    </div> */}
                
                
              
            
              
                </Card.Body>
              </Accordion.Collapse>
              <div className={styles['post-lower-section']}>
                {!ownUser ? (
                  <EditPost
                    triggerElement={
                      <button
                        className={styles['edit-repost-button']}
                        type="button"
                      >
                        Edit and Repost
                      </button>
                    }
                    post={opportunity}
                    editPost={editPostComponent}
                    fetchLocations={fetchLocationsComponent}
                    locations={locations}
                    locationsLoading={locationsLoading}
                    fetchSkills={fetchSkillsComponent}
                    skills={skills}
                    skillsLoading={skillsLoading}
                    fetchTags={fetchTagsComponent}
                    tags={tags}
                    tagsLoading={tagsLoading}
                  />
                ) : (
                  <>
                    {isAppliedLoading &&
                    appliedLoadingSlug === opportunity.slug ? (
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      ></div>
                    ) : (
                      <>
                        {opportunity.isApplied ? (
                          <button
                            className={styles['applied-button']}
                            type="button"
                          >
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span className={styles['button-text']}>
                              Applied
                            </span>
                          </button>
                        ) : (
                          <button
                            className={styles['apply-now-button']}
                            type="button"
                            onClick={() =>
                              applyPost(
                                opportunity.slug,
                                !opportunity.isApplied,
                              )
                            }
                          >
                            Apply Now
                          </button>
                        )}
                      </>
                    )}
                  </>
                )}

                <div className={styles['bookmark-view-wrapper']}>
                  <CustomToggle eventKey="1" />
                  {ownUser ? (
                    <Popup
                      trigger={
                        <FontAwesomeIcon
                          className={styles['dustbin-icon']}
                          icon={faTrash}
                        />
                      }
                      modal
                    >
                      {(close) => (
                        <div className={styles['modal-container']}>
                          <div className={styles['modal-text']}>
                            Are you sure, you want to delete the post?
                          </div>
                          <div className={styles['modal-button-wrapper']}>
                            <button
                              type="button"
                              className={styles['negative-button']}
                              onClick={close}
                            >
                              No
                            </button>
                            <button
                              className={styles['positive-button']}
                              type="button"
                              onClick={() => {
                                close()
                                deletePost(opportunity.slug)
                              }}
                            >
                              Yes
                            </button>
                          </div>
                        </div>
                      )}
                    </Popup>
                  ) : (
                    <FontAwesomeIcon
                      icon={faBookmark}
                      className={
                        opportunity.isBookmark
                          ? styles['active-bookmark-button']
                          : styles['bookmark-button']
                      }
                      onClick={() =>
                        bookmarkPost(opportunity.slug, !opportunity.isBookmark)
                      }
                    />
                  )}
                </div>
              </div>
            </Card>
          </Accordion>
        </div>
      </div>
    )
  }
}

CustomToggle.propTypes = {
  eventKey: PropTypes.number,
}

PostComponent.propTypes = {
  opportunity: PropTypes.object,
  applyPost: PropTypes.func,
  username: PropTypes.string,
  bookmarkPost: PropTypes.func,
  appliedLoadingSlug: PropTypes.string,
  isAppliedLoading: PropTypes.bool,
  deletePost: PropTypes.func,
  editPostComponent: PropTypes.func,
  fetchLocationsComponent: PropTypes.func,
  fetchSkillsComponent: PropTypes.func,
  skillsLoading: PropTypes.bool,
  locationsLoading: PropTypes.bool,
  locations: PropTypes.array,
  skills: PropTypes.array,
  tags: PropTypes.array,
  tagsLoading: PropTypes.bool,
  fetchTagsComponent: PropTypes.func,
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLocationsComponent: () => {
      dispatch(fetchLocations())
    },
    fetchSkillsComponent: () => {
      return dispatch(fetchSkills())
    },
    fetchTagsComponent: () => {
      return dispatch(fetchTags())
    },
  }
}

function mapStateToProps(state) {
  return {
    locations: state.student.filters.locations,
    locationsLoading: state.student.filters.locationsLoading,
    skillsLoading: state.student.skill.skillsLoading,
    skills: state.student.skill.skills,
    tags: state.student.filters.tags,
    tagsLoading: state.student.filters.tagsLoading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent)
