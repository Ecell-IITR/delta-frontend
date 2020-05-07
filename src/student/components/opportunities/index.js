import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostComponent from 'coreContainers/post'
import Input from 'coreContainers/input'
import FilterLabel from 'coreContainers/filterLabel'
import Loader from 'coreContainers/loading'
import { fetchStudentOpportunities } from '../../actions'

import './index.css'

export class Opportunities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [
        { label: 'ecell', value: 'rocks' },
        { label: 'delta', value: 'also rocks' },
        { label: 'edc', value: ' rocks' },
      ],
    }
  }

  componentDidMount() {
    const { fetchStudentOpportunitiesComponent } = this.props
    const filterObj = {
      post_type: 1,
    }
    fetchStudentOpportunitiesComponent(filterObj)
  }

  render() {
    const { isLoading, opportunitiesList } = this.props.opportunitiesObj
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
        {isLoading ? (
          <Loader />
        ) : (
            <>
              {opportunitiesList && opportunitiesList.length === 0 ? (
                <div>Opportunities list is empty!</div>
              ) : (
                  <>
                    {opportunitiesList &&
                      opportunitiesList.map((opportunity) => (
                        <PostComponent opportunity={opportunity} />
                      ))}
                  </>
                )}
            </>
          )}
      </div>
    )
  }
}

Opportunities.propTypes = {
  fetchStudentOpportunitiesComponent: PropTypes.func,
}

const mapActionToProps = (dispatch) => {
  return {
    fetchStudentOpportunitiesComponent: (filterObj) => {
      dispatch(fetchStudentOpportunities(filterObj))
    },
  }
}

const mapStateToProps = (state) => {
  return {
    opportunitiesObj: state.student.opportunities,
  }
}

export default connect(mapStateToProps, mapActionToProps)(Opportunities)
