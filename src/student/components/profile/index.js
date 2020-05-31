/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchStudentProfile, setCurrentTab } from '../../actions'
import { SELF_PROFILE, PUBLIC_PROFILE } from '../../constants'
import styles from '../css/profile.module.css'
// import Sidebar from './sidebar'
import {
  faTable, faLightbulb, faFile, faTrophy
} from '@fortawesome/free-solid-svg-icons'
import SidebarMenu from "coreContainers/sidebar-menu"
import StudentInfoSection from './student-info-section'
import SkillsComponent from './skills'
import ResumeComponent from './resume'

import stylesNew from '../css/profile2.module.css'

class StudentProfile extends Component {
  componentDidMount() {
    const { fetchStudentProfileComponent, match, user, location, setCurrentTabComponent } = this.props
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
      search: `?tab=${value}`
    })
    setCurrentTabComponent(value)
  }

  render() {
    const { user, match, studentProfile, studentProfileLoading, currentTab } = this.props
    const sidebarProps = {
      rowItems: [
        { slug: 'post', title: 'Post', icon: faTable },
        { slug: 'skills', title: 'Skills', icon: faLightbulb },
        { slug: 'achievements', title: 'Achievements', icon: faTrophy },
        { slug: 'resume', title: 'Resume', icon: faFile },

      ],
      currentTab: currentTab,
      handleClick: this.setActiveTab
    }
    return (
      <>
        {Object.keys(user).length === 0 || studentProfileLoading ? (
          <div>Loading....</div>
        ) : (
            <div className={styles.info}>
              <StudentInfoSection
                user={user}
                studentProfile={studentProfile}
              />
              <div className={stylesNew.profile2}>
                <div className={stylesNew.sidebar}>
                  <SidebarMenu {...sidebarProps} />
                </div>
                <div className={stylesNew.contentBox}>
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
  studentProfile: PropTypes.object,
  user: PropTypes.object,
  match: PropTypes.object.isRequired,
  fetchStudentProfileComponent: PropTypes.func,
  params: PropTypes.object,
  studentProfileLoading: PropTypes.bool,
  currentTab: PropTypes.string,
  setCurrentTabComponent: PropTypes.func
}

function mapDispatchToProps(dispatch) {
  return {
    fetchStudentProfileComponent: (profileType) => {
      dispatch(fetchStudentProfile(profileType))
    },
    setCurrentTabComponent: (value) => {
      dispatch(setCurrentTab(value))
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.student.user.user,
    studentProfileLoading: state.student.profile.isLoading,
    studentProfile: state.student.profile.profile,
    currentTab: state.student.profile.currentTab
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile)
