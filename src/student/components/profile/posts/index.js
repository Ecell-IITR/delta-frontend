/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TabMenu from 'coreContainers/tab-menu'
import ButtonGroup from 'coreContainers/button-group'
import Post from 'coreContainers/post'
import EmptyScreen from 'coreContainers/empty-screen'
import PostLoading from 'coreContainers/post/loading'
import { fetchStudentPost, deleteStudentPost, editPost } from '../../../actions'
import {
  INTERNSHIP_POST_TYPE_KEY,
  COMPETITION_POST_TYPE_KEY,
  PROJECT_POST_TYPE_KEY,
} from '../../../constants'

import styles from './index.css'

export function PostContainer({
  fetchStudentPostComponent,
  postList,
  postListLoading,
  user,
  deleteStudentPostComponent,
  editPostComponent,
}) {
  const [currentTab, setCurrentTab] = useState('your-post')
  const [postType, setPostType] = useState(INTERNSHIP_POST_TYPE_KEY)

  useEffect(() => {
    const filterObj = {
      post_type: postType,
    }
    switch (currentTab) {
      case 'your-post':
        Object.assign(filterObj, { my_post: true })
        break
      case 'unpublished-post':
        Object.assign(filterObj, { unpublished_my_post: true })
        break
      case 'expired-post':
        Object.assign(filterObj, { expired_my_post: true })
        break
      default:
        break
    }
    fetchStudentPostComponent(filterObj)
  }, [currentTab, postType])

  const tabProps = {
    tabItems: [
      { slug: 'your-post', title: 'Your Post' },
      { slug: 'unpublished-post', title: 'Unpublished Post' },
      { slug: 'expired-post', title: 'Expired Post' },
    ],
    currentTab,
    handleClick: setCurrentTab,
  }

  const buttonGroupProps = {
    buttons: [
      { key: INTERNSHIP_POST_TYPE_KEY, title: 'Intern' },
      { key: COMPETITION_POST_TYPE_KEY, title: 'Competition' },
      { key: PROJECT_POST_TYPE_KEY, title: 'Project' },
    ],
    currentButton: postType,
    handleClick: setPostType,
  }

  return (
    <div>
      <div>
        <TabMenu {...tabProps} />
      </div>
      <div className={styles['filter-container']}>
        <div className={styles['filter-heading']}>Filters</div>
        <ButtonGroup {...buttonGroupProps} />
      </div>
      <div className={styles['post-container']}>
        {postListLoading ? (
          <PostLoading count={2} />
        ) : (
          <>
            {postList && postList.length === 0 ? (
              <EmptyScreen />
            ) : (
              <>
                <div>
                  {postList &&
                    postList.map((post) => (
                      <Post
                        key={post.slug}
                        opportunity={post}
                        username={user.username}
                        deletePost={deleteStudentPostComponent}
                        editPostComponent={editPostComponent}
                      />
                    ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

PostContainer.propTypes = {
  fetchStudentPostComponent: PropTypes.func,
  postList: PropTypes.array,
  postListLoading: PropTypes.bool,
  user: PropTypes.object,
  deleteStudentPostComponent: PropTypes.func,
  editPostComponent: PropTypes.func,
}

function mapDispatchToProps(dispatch) {
  return {
    fetchStudentPostComponent: (filterObj) => {
      dispatch(fetchStudentPost(filterObj))
    },
    deleteStudentPostComponent: (postSlug) => {
      dispatch(deleteStudentPost(postSlug))
    },
    editPostComponent: (postSlug, body, callback) => {
      dispatch(editPost(postSlug, body, callback))
    },
  }
}

function mapStateToProps(state) {
  return {
    postList: state.student.profile.postList,
    postListLoading: state.student.profile.postListLoading,
    user: state.student.user.user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
