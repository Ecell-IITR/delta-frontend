import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SideBarRow from '../../../coreContainers/sideBarRow'
import styles_2 from "../css/profileSidebar.module.css"
class ProfileSidebar extends Component {
  state = {}
  render() {
    return (
      <div className={styles_2.profilesidebar}>
        <SideBarRow Icon="th list" Title="Posts" />
        <Link to="/profile/skills">
        <SideBarRow Icon="id card outline" Title="Skills" />
        </Link>
        <SideBarRow Icon="trophy" Title="Achievements" />
        <Link to="/profile/resume">
        <SideBarRow Icon="file alternate" Title="Resume" />
        </Link>
      </div>
    )
  }
}

export default ProfileSidebar
