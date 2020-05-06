import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import SideBarRow from 'coreContainers/sideBarRow'
import styles from './index.css'

class CreatePostSidebar extends Component {
  render() {
    return (
      <div className={styles.sideContainer}>
        <div className={styles.container}>
          <NavLink to="/create-post/internship">
            <SideBarRow
              customClassName={styles.row}
              titleClass={styles.titlerow}
              Icon="briefcase"
              Title="Internship"
            />
          </NavLink>
          <NavLink to="/create-post/project">
            <SideBarRow
              customClassName={styles.row}
              titleClass={styles.titlerow}
              Icon="lightbulb outline"
              Title="Project"
            />
          </NavLink>
          <NavLink to="/create-post/competition">
            <SideBarRow
              customClassName={styles.row}
              titleClass={styles.titlerow}
              Icon="trophy"
              Title="Competition"
            />
          </NavLink>
        </div>
      </div>
    )
  }
}

export default CreatePostSidebar
