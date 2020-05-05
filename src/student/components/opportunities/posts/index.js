import React, { Component } from 'react'
import Post from "../../../../coreContainers/post"
import styles from "../opportunities.module.css"
import fetchPostData from '../../../actions/index'

class Posts extends Component {
    
    render() {
        // const post = fetchPostData()
        return (
            <div>
                <div className={styles.div3}>
                    <h2>43 Posts Found</h2>
                </div>
                <div className={styles['post-container']}>
                <Post />
                {/* <ul>
                  {post.map(postList => 
                  <li>
                    <Post
                    designation={post.designation}
                    stipend={post.stipend}
                    duration={post.duration}
                    workDespription={post.workDescription}
                    skillsRequired={post.skillsRequired}
                    additionalInformation={post.additionalInformation}
                    />
                </li>)}
                </ul> */}
                </div>
            </div>
        )
    }
}

export default Posts
