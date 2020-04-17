import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SideBarRow from '../../../../coreContainers/sideBarRow'
import styles_2 from './index.module.css'
class ProfileSidebar extends Component {
  state = {}
  render() {
    return (
      <div className={styles_2.profilesidebar}>
        <SideBarRow Icon="th list" Title="Posts" />
        <NavLink to="/profile/skills" activeClassName={styles_2.active}>
          <SideBarRow Icon="id card outline" Title="Skills" />
        </NavLink>
        <SideBarRow Icon="trophy" Title="Achievements" />
        <NavLink to="/profile/resume" activeClassName={styles_2.active}>
          <SideBarRow Icon="file alternate" Title="Resume" />
        </NavLink>
      </div>
    )
  }
}

export default ProfileSidebar
