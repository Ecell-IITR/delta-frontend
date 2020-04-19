import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SideBarRow from 'coreContainers/sideBarRow'
// import styles from './createPost.module.css'

class CreatePostSidebar extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <Link className={styles.eachrow} to={`${match.path}internship`}>
            <SideBarRow
              className={styles.eachrow}
              Icon="briefcase"
              Title="Internship"
            />
          </Link>
          <Link className={styles.eachrow} to={`${match.path}project`}>
            <SideBarRow
              className={styles.eachrow}
              Icon="lightbulb outline"
              Title="Project"
            />
          </Link>
          <Link className={styles.eachrow} to={`${match.path}competition`}>
            <SideBarRow 
              Icon="trophy" 
              Title="Competition" 
              />
          </Link>
        </div>
      </div>
    )
  }
}

export default CreatePostSidebar
