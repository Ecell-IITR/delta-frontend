/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  faTable,
  faLightbulb,
  faFile,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons'
import SidebarMenu from 'coreContainers/sidebar-menu'
import { fetchStudentProfile, setCurrentTab } from '../../actions'
import { SELF_PROFILE, PUBLIC_PROFILE } from '../../constants'
import StudentInfoSection from './student-info-section'
import SkillsComponent from './skills'
import ResumeComponent from './resume'

import styles from './index.css'

class StudentProfile extends Component {
  componentDidMount() {
    const {
      fetchStudentProfileComponent,
      match,
      user,
      location,
      setCurrentTabComponent,
    } = this.props
    const { params } = match
    const searchParams = new URLSearchParams(location.search)
    if (Object.keys(user).length > 0 && user.username) {
      fetchStudentProfileComponent(
        user.username === params.username ? SELF_PROFILE : PUBLIC_PROFILE,
      )
    }
    if (searchParams && searchParams.get('tab')) {
      setCurrentTabComponent(searchParams.get('tab'))
    }
  }

  setActiveTab = (value) => {
    const { history, setCurrentTabComponent, location } = this.props
    history.push({
      pathname: location.pathname,
      search: `?tab=${value}`,
    })
    setCurrentTabComponent(value)
  }

  render() {
    const {
      user,
      studentProfile,
      studentProfileLoading,
      currentTab,
    } = this.props
    const sidebarProps = {
      rowItems: [
        { slug: 'post', title: 'Post', icon: faTable },
        { slug: 'skills', title: 'Skills', icon: faLightbulb },
        { slug: 'achievements', title: 'Achievements', icon: faTrophy },
        { slug: 'resume', title: 'Resume', icon: faFile },
      ],
      currentTab,
      handleClick: this.setActiveTab,
    }
    return (
      <>
        {Object.keys(user).length === 0 || studentProfileLoading ? (
          <div>Loading....</div>
        ) : (
            <div>
              <div className={styles.info}>
                <StudentInfoSection user={user} studentProfile={studentProfile} />
              </div>
              <div className={styles['main-container']}>
                <div className={styles.sidebar}>
                  <SidebarMenu {...sidebarProps} />
                </div>
                <div className={styles.contentBox}>
                  {currentTab === 'skills' ? <SkillsComponent /> : <></>}
                  {currentTab === 'resume' ? <ResumeComponent /> : <></>}
                </div>
              </div>
            </div>
          )}
      </>
    )
  }
}

StudentProfile.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  studentProfile: PropTypes.object,
  user: PropTypes.object,
  match: PropTypes.object.isRequired,
  fetchStudentProfileComponent: PropTypes.func,
  params: PropTypes.object,
  studentProfileLoading: PropTypes.bool,
  currentTab: PropTypes.string,
  setCurrentTabComponent: PropTypes.func,
}

function mapDispatchToProps(dispatch) {
  return {
    fetchStudentProfileComponent: (profileType) => {
      dispatch(fetchStudentProfile(profileType))
    },
    setCurrentTabComponent: (value) => {
      dispatch(setCurrentTab(value))
    },
  }
}

function mapStateToProps(state) {
  return {
    user: state.student.user.user,
    studentProfileLoading: state.student.profile.isLoading,
    studentProfile: state.student.profile.profile,
    currentTab: state.student.profile.currentTab,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile)
