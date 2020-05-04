/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import SideBarRow from '../../../../coreContainers/sideBarRow'
import styles from './index.css'

class ProfileSidebar extends Component {
  render() {
    const { user } = this.props
    return (
      <div className={styles.profilesidebar}>
        <NavLink to={`/user/${user.username}/`} activeClassName={styles.active}>
          <SideBarRow Icon="th list" Title="Posts" />
        </NavLink>
        <NavLink
          to={`/user/${user.username}/skills`}
          activeClassName={styles.active}
        >
          <SideBarRow Icon="id card outline" Title="Skills" />
        </NavLink>
        <SideBarRow Icon="trophy" Title="Achievements" />
        <NavLink
          to={`/user/${user.username}/resume`}
          activeClassName={styles.active}
        >
          <SideBarRow Icon="file alternate" Title="Resume" />
        </NavLink>
      </div>
    )
  }
}

ProfileSidebar.propTypes = {
  user: PropTypes.object,
}

export default ProfileSidebar
