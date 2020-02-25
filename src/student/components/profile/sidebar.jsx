import React, { Component } from 'react'
import SideBarRow from '../../../core_containers/sideBarRow'
import "../css/profileSidebar.css"
class ProfileSidebar extends Component {
  state = {}
  render() {
    return (
      <div className="profile-sidebar">
        <SideBarRow Icon="th list" Title="Posts" />
        <SideBarRow Icon="id card outline" Title="Posts" />
        <SideBarRow Icon="trophy" Title="Achievements" />
        <SideBarRow Icon="file alternate" Title="Resume" />
      </div>
    )
  }
}

export default ProfileSidebar
