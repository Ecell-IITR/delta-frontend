import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import SideBarRow from '../../../../coreContainers/sideBarRow'
import styles from './index.css'

class ProfileSidebar extends Component {
  render() {
    return (
      <div className={styles.profilesidebar}>
        <SideBarRow Icon="th list" Title="Posts" />
        <NavLink to={'/user/' + this.props.User + '/skills'} activeClassName={styles.active}>
          <SideBarRow Icon="id card outline" Title="Skills" />
        </NavLink>
        <SideBarRow Icon="trophy" Title="Achievements" />
        <NavLink to={'/user/' + this.props.User + '/resume'} activeClassName={styles.active}>
          <SideBarRow Icon="file alternate" Title="Resume" />
        </NavLink>
      </div>
    )
  }
}

export default ProfileSidebar
