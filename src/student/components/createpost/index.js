import React, { Component } from 'react'
import SideBarRow from '../../../coreContainers/sideBarRow'
import { Link } from 'react-router-dom'
import styles from './createPost.module.css'
import { Navbar } from "../../../coreContainers/navbar";


export class CreatePost extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className={styles.container}>
                    <Link className={styles.eachrow} to={`/student/createPost/internship`}>
                        <SideBarRow className={styles.eachrow} Icon='briefcase' Title="Internship"/>
                    </Link>
                    <Link className={styles.eachrow} to={`/student/createPost/project`}>
                        <SideBarRow className={styles.eachrow} Icon='lightbulb outline' Title="Project"/>
                    </Link>
                    <Link className={styles.eachrow} to={`/student/createPost/competition`}>
                        <SideBarRow Icon='trophy' Title="Competition"/>
                    </Link>
                </div>
            </div>
        )
    }
}

export default CreatePost
