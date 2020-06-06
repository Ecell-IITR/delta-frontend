import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  faLightbulb, faTrophy, faBriefcase
} from '@fortawesome/free-solid-svg-icons'
import { setCreatePostTab } from '../../actions'
import SidebarMenu from "coreContainers/sidebar-menu"
import InternshipComponent from './internship'
import ProjectComponent from './project'
import CompetitionComponent from './competition'

import styles from './index.css'

export class CreatePost extends Component {
  componentDidMount() {
    const { location, setCreatePostTabComponent } = this.props
    const searchParams = new URLSearchParams(location.search)

    if (searchParams && searchParams.get('tab')) {
      setCreatePostTabComponent(searchParams.get('tab'))
    }
  }

  setActiveTab = (value) => {
    const { history, setCreatePostTabComponent, location } = this.props
    history.push({
      pathname: location.pathname,
      search: `?tab=${value}`
    })
    setCreatePostTabComponent(value)
  }

  render() {
    const { currentTab } = this.props
    const sidebarProps = {
      rowItems: [
        { slug: 'internship', title: 'Internship', icon: faBriefcase },
        { slug: 'project', title: 'Project', icon: faLightbulb },
        { slug: 'competition', title: 'Competition', icon: faTrophy },

      ],
      currentTab: currentTab,
      handleClick: this.setActiveTab
    }
    return (
      <div className={styles['create-post-container']}>
        <div className={styles.sidebar}>
          <SidebarMenu {...sidebarProps} />
        </div>
        <div className={styles.contentBox}>
          {currentTab === 'internship' ? <InternshipComponent /> : <></>}
          {currentTab === 'project' ? <ProjectComponent /> : <></>}
          {currentTab === 'competition' ? <CompetitionComponent /> : <></>}
        </div>
      </div>
    )
  }
}

CreatePost.propTypes = {
  match: PropTypes.object,
  setCreatePostComponent: PropTypes.func
}


function mapDispatchToProps(dispatch) {
  return {
    setCreatePostTabComponent: (value) => {
      dispatch(setCreatePostTab(value))
    }
  }
}

function mapStateToProps(state) {
  return {
    currentTab: state.student.createPost.currentTab
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
