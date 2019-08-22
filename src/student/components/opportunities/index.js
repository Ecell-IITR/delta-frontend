import React, { Component } from 'react'
import styles from '../css/opportunities.module.css'
import Post from '../../../core_containers/post/index'
import Label from '../../../core_containers/label/label'
import Input from '../../../core_containers/input/index'
export default class Opportunities extends Component {
  render() {
    return (
      <div className={styles['opportunities-container']}>
        <div className={styles['filter-container']}>
          <h2 className={styles['filter-heading']}>Filters</h2>
          <hr />
          <Input
            className={styles['opportunities-filter-search']}
            placeholder="Add keyword"
          />
          <div className={styles['filter-opportunityType']} />
          <div className={['filter-searchLocation']} />
        </div>
        <div className={['list-post-container']}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    )
  }
}
