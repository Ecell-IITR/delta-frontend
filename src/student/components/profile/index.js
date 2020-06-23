/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  faTable,
  faLightbulb,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons'
import SidebarMenu from 'coreContainers/sidebar-menu'
import {
  fetchStudentProfile,
  setCurrentTab,
  editStudentProfile,
  avatarUpload,
} from '../../actions'
import { SELF_PROFILE, PUBLIC_PROFILE } from '../../constants'
import StudentInfoSection from './student-info-section'
import PostComponent from './posts'
import SkillsComponent from './skills'
import ResumeComponent from './resume'
import AchievementsComponent from './achievements'
import StudentInfoLoading from './student-info-section/loading'
import styles from './index.css'

export function StudentProfile({
  fetchStudentProfileComponent,
  match,
  user,
  location,
  setCurrentTabComponent,
  currentTab,
  studentProfile,
  studentProfileLoading,
  history,
  editStudentProfileComponent,
  avatarUploadComponent,
  // profileImageLoading,
}) {
  useEffect(() => {
    const { params } = match
    const searchParams = new URLSearchParams(location.search)
    if (searchParams && searchParams.get('tab')) {
      setCurrentTabComponent(searchParams.get('tab'))
      if (Object.keys(user).length > 0 && user.username) {
        fetchStudentProfileComponent(
          user.username === params.username ? SELF_PROFILE : PUBLIC_PROFILE,
        )
      }
    } else {
      history.push({
        pathname: location.pathname,
        search: `?tab=post`,
      })
    }
  }, [])

  const setActiveTab = (value) => {
    history.push({
      pathname: location.pathname,
      search: `?tab=${value}`,
    })
    setCurrentTabComponent(value)
  }

  const sidebarProps = {
    rowItems: [
      { slug: 'post', title: 'Post', icon: faTable },
      { slug: 'skills', title: 'Skills', icon: faLightbulb },
      { slug: 'achievements', title: 'Achievements', icon: faTrophy },
      // { slug: 'resume', title: 'Resume', icon: faFile },
    ],
    currentTab,
    handleClick: setActiveTab,
  }
  return (
    <>
      {studentProfileLoading ? (
        <StudentInfoLoading />
      ) : (
        <>
          {studentProfile ? (
            <div className={styles.info}>
              <StudentInfoSection
                user={user}
                studentProfile={studentProfile}
                editStudentProfile={editStudentProfileComponent}
                avatarUploadFunc={avatarUploadComponent}
              />
            </div>
          ) : (
            <></>
          )}
        </>
      )}
      <div className={styles['main-container']}>
        <div className={styles.sidebar}>
          <SidebarMenu {...sidebarProps} />
        </div>
        <div className={styles.contentBox}>
          {currentTab === 'post' ? <PostComponent /> : <></>}
          {currentTab === 'skills' ? (
            <>
              {studentProfileLoading ? (
                <div>Loading......</div>
              ) : (
                <>{studentProfile ? <SkillsComponent /> : <></>}</>
              )}
            </>
          ) : (
            <></>
          )}
          {currentTab === 'resume' ? <ResumeComponent /> : <></>}
          {currentTab === 'achievements' ? (
            <>
              {studentProfileLoading ? (
                <div>Loading......</div>
              ) : (
                <>
                  {studentProfile ? (
                    <AchievementsComponent
                      editStudentProfile={editStudentProfileComponent}
                      achievements={studentProfile.achievements}
                    />
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  )
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
  editStudentProfileComponent: PropTypes.func,
  avatarUploadComponent: PropTypes.func,
  // profileImageLoading: PropTypes.bool,
}

function mapDispatchToProps(dispatch) {
  return {
    fetchStudentProfileComponent: (profileType) => {
      dispatch(fetchStudentProfile(profileType))
    },
    setCurrentTabComponent: (value) => {
      dispatch(setCurrentTab(value))
    },
    editStudentProfileComponent: (body, callback = () => {}) => {
      dispatch(editStudentProfile(body, callback))
    },
    avatarUploadComponent: (image, callback) => {
      dispatch(avatarUpload(image, callback))
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
