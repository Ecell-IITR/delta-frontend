import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Accordion } from 'react-bootstrap'
import { STUDENT_ROLE, COMPANY_ROLE } from 'globalConstants'
import {
  INTERNSHIP_POST_TYPE_KEY,
  COMPETITION_POST_TYPE_KEY,
  PROJECT_POST_TYPE_KEY,
} from '../../student/constants'

import styles from './index.css'

class PostComponent extends Component {
  getUserSection = (profile) => {
    const { person } = profile
    switch (person.roleType) {
      case STUDENT_ROLE:
        return (
          <div>
            <div>
              <div>{person.username}</div>
              <div>{person.roleType}</div>
            </div>
            <div>Profile Pic</div>
          </div>
        )
      case COMPANY_ROLE:
        return (
          <div>
            <div>
              <div>{person.username}</div>
              <div>{person.companyDomain}</div>
            </div>
            <div>Profile Pic</div>
          </div>
        )
    }
  }

  getPostUpperSection = () => {
    const { opportunity } = this.props
    switch (opportunity.postType) {
      case INTERNSHIP_POST_TYPE_KEY:
        const { title, stipend, workType, userMinProfile } = opportunity
        return (
          <div className={styles['post-upper-section']}>
            <div className={styles['post-basic-info-wrapper']}>
              <div className={styles['post-title']}>{title}</div>
              <div className={styles['post-sti-work']}>
                {`${stipend} . ${workType}`}
              </div>
            </div>
            <div className={styles['post-user-section']}>
              {this.getUserSection(userMinProfile)}
            </div>
          </div>
        )
    }
  }
  render() {
    const { opportunity } = this.props
    return (
      <div className={styles.post}>
        <div>{this.getPostUpperSection()}</div>
      </div>
    )
  }
}

PostComponent.propTypes = {
  opportunity: PropTypes.object,
}

export default PostComponent
