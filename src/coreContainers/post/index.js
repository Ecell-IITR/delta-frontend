/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-case-declarations */
import React, { Component, useState } from 'react'
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
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { STUDENT_ROLE, COMPANY_ROLE } from 'globalConstants'
import {
  INTERNSHIP_POST_TYPE_KEY,
  COMPETITION_POST_TYPE_KEY,
  PROJECT_POST_TYPE_KEY,
} from '../../student/constants'
import { getImageURL } from 'utils/getImageURL'
import { getTimeLeft } from 'utils/getTimeLeft'

import styles from './index.css'

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

export default class PostComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isBookmark: props.opportunity.isBookmark,
    }
  }

  handleBookmarkClick = () => {
    const { isBookmark } = this.state
    this.setState({
      isBookmark: !isBookmark,
    })
  }

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
          workType,
          userMinProfile,
          applicantsCount,
          postExpiryDate,
        } = opportunity
        return (
          <div className={styles['post-upper-section']}>
            <div className={styles['post-uppermost-info-sec']}>
              <div className={styles['post-basic-info-wrapper']}>
                <div className={styles['post-title']}>{title}</div>
                <div className={styles['post-sti-work']}>
                  {`${stipend}`}
                </div>
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
              <div>
                <FontAwesomeIcon icon={faCalendar} />
                <span>{opportunity.duration}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faClock} />
                <span>{getTimeLeft(opportunity.postExpiryDate)} left</span>
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
        const { description, requiredSkill } = opportunity
        return (
          <div className={styles['post-collapse-section']}>
            {description ? (
              <div className={styles['work-description']}>
                <div className={styles['work-description-header']}>
                  Work Description
                </div>
                <div className={styles['work-description-body']}>
                  {description}
                </div>
              </div>
            ) : (
                <></>
              )}
            {requiredSkill ? (
              <div className={styles['skill-required']}>
                <div className={styles['skill-required-header']}>
                  Skill-set required
                </div>
                <div className={styles['skill-required-body']}>
                  {requiredSkill}
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

  handleApplyNow = (e) => {
    e.preventDefault()
  }

  render() {
    const { isBookmark } = this.state
    return (
      <div className={styles.post}>
        <div>{this.getPostUpperSection()}</div>
        <div>
          <Accordion defaultActiveKey="0">
            <Card className={styles['accordion-card']}>
              <Accordion.Collapse
                eventKey="1"
                className={styles['accordion-collapse']}
              >
                <Card.Body className={styles['accordion-card-body']}>
                  {this.getPostCollapseSection()}
                </Card.Body>
              </Accordion.Collapse>
              <div className={styles['post-lower-section']}>
                <button
                  className={styles['apply-now-button']}
                  type="button"
                  onClick={this.handleApplyNow}
                >
                  Apply Now
                </button>
                <div className={styles['bookmark-view-wrapper']}>
                  <CustomToggle eventKey="1" />
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className={
                      isBookmark
                        ? styles['active-bookmark-button']
                        : styles['bookmark-button']
                    }
                    onClick={this.handleBookmarkClick}
                  />
                </div>
              </div>
            </Card>
          </Accordion>
        </div>
      </div>
    )
  }
}

PostComponent.propTypes = {
  opportunity: PropTypes.object,
}
