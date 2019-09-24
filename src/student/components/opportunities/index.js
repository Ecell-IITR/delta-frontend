import React, { Component } from 'react'
import '../css/opportunities.css'
import Post from '../../../core_containers/post/index'
/*import Label from '../../../core_containers/label/label'*/
import Input from '../../../core_containers/input/index'
import FilterLabel from '../../../core_containers/filterLabel/index'

export default class Opportunites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [
        { label: 'ecell', value: 'rocks' },
        { label: 'delta', value: 'also rocks' },
        { label: 'edc', value: ' rocks' }
      ]
    }
  }

  render() {
    return (
      <div className="opportunities-container">
        <div className="filter-container">
          <h2 className="filter-heading">Filters</h2>
          <hr />
          <Input
            className="opportunities-filter-search"
            placeholder="Add keyword"
          />
          <div className="filter-opportunityType">
            <FilterLabel options={this.state.options} />
          </div>
          <div></div>
          <div className="filter-searchLocation"></div>
        </div>
        <div className="list-post-container">
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
