import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostComponent from 'coreContainers/post'
import { SelectFilter } from 'coreContainers/filters'
import Loader from 'coreContainers/loading'
import { INTERNSHIP_POST_TYPE_KEY } from '../../constants'
import { fetchStudentOpportunities, fetchLocations } from '../../actions'

import styles from './index.css'

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
    const { fetchStudentOpportunitiesComponent, fetchLocationsComponent } = this.props
    const filterObj = {
      post_type: INTERNSHIP_POST_TYPE_KEY,
    }
    fetchStudentOpportunitiesComponent(filterObj)
    fetchLocationsComponent()
  }

  handleLocationChange = (value, action) => {
    console.log(value, action)
  }

  getLocationOptions = (locationsList) => {
    const resultArr = []
    locationsList.forEach(location => resultArr.push({ value: location.slug, label: location.name }))
    return resultArr
  }

  render() {
    const { opportunitiesObj, locations, locationsLoading } = this.props
    const { isLoading, opportunitiesList } = opportunitiesObj

    return (
      <div className={styles["opportunities-container"]}>
        <div className={styles["filter-container"]}>
          <div className={styles["filter-heading"]}>Filters</div>
          {/* <div className={styles["filter-opportunityType"]}>
            <FilterLabel options={this.state.options} />
          </div> */}
          <div className={styles["filter-main-container"]}>
            <div className={styles["location-filter"]}>
              <div className={styles["filter-label"]}>Select location</div>
              <SelectFilter options={this.getLocationOptions(locations)} loading={locationsLoading} placeholder="Select location" handleChange={this.handleLocationChange} />
            </div>
          </div>
        </div>
        <div className={styles['opportunities-main-container']}>
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
      </div>
    )
  }
}

Opportunities.propTypes = {
  fetchStudentOpportunitiesComponent: PropTypes.func,
  fetchLocationsComponent: PropTypes.func
}

const mapActionToProps = (dispatch) => {
  return {
    fetchStudentOpportunitiesComponent: (filterObj) => {
      dispatch(fetchStudentOpportunities(filterObj))
    },
    fetchLocationsComponent: () => {
      dispatch(fetchLocations())
    },
  }
}

const mapStateToProps = (state) => {
  return {
    opportunitiesObj: state.student.opportunities,
    locations: state.student.filters.locations,
    locationsLoading: state.student.filters.locationsLoading
  }
}

export default connect(mapStateToProps, mapActionToProps)(Opportunities)
