import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostComponent from 'coreContainers/post'
import { SelectFilter, RangeFilter } from 'coreContainers/filters'
import Loader from 'coreContainers/loading'
import { INTERNSHIP_POST_TYPE_KEY } from '../../constants'
import { fetchStudentOpportunities, fetchLocations, fetchSkills, setOpportunityFilter } from '../../actions'

import styles from './index.css'

export class Opportunities extends Component {
  componentDidMount() {
    const { fetchStudentOpportunitiesComponent, fetchLocationsComponent, fetchSkillsComponent } = this.props
    const filterObj = {
      post_type: INTERNSHIP_POST_TYPE_KEY,
    }
    fetchLocationsComponent()
    fetchSkillsComponent()
    fetchStudentOpportunitiesComponent(filterObj)
  }

  handleFilterChange = (filterKey, value) => {
    const { setOpportunityFilterComponent } = this.props
    const data = {}
    data[filterKey] = value
    setOpportunityFilterComponent(data)
  }

  getFilterOptions = (filterList) => {
    const resultArr = []
    filterList.forEach(filter => resultArr.push({ value: filter.slug, label: filter.name }))
    return resultArr
  }

  render() {
    const { opportunitiesObj, locations, locationsLoading, skillsLoading, skills } = this.props
    const { isLoading, opportunitiesList } = opportunitiesObj
    const { filtersApplied } = opportunitiesObj
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
              <SelectFilter
                options={this.getFilterOptions(locations)}
                loading={locationsLoading}
                placeholder="Select location"
                handleChange={this.handleFilterChange}
              />
            </div>
            <div className={styles["location-filter"]}>
              <div className={styles["filter-label"]}>Select skills</div>
              <SelectFilter
                options={this.getFilterOptions(skills)}
                loading={skillsLoading}
                placeholder="Select skills"
                handleChange={this.handleFilterChange}
              />
            </div>
            <div className={styles["range-filter"]}>
              <div className={styles["filter-label"]}>Duration</div>
              <div className={styles["range-filter-slider"]}>
                <RangeFilter
                  handleChange={(value) => this.handleFilterChange('duration', value)}
                  value={filtersApplied['duration']}
                  minValue={0}
                  maxValue={5}
                />
              </div>
            </div>
            <div className={styles["range-filter"]}>
              <div className={styles["filter-label"]}>Stipend</div>
              <div className={styles["range-filter-slider"]}>
                <RangeFilter
                  handleChange={(value) => this.handleFilterChange('stipend', value)}
                  value={filtersApplied['stipend']}
                  minValue={0}
                  maxValue={8000}
                />
              </div>
            </div>
            <div className={styles["range-filter"]}>
              <div className={styles["filter-label"]}>No. of Employees</div>
              <div className={styles["range-filter-slider"]}>
                <RangeFilter
                  handleChange={(value) => this.handleFilterChange('employeesCount', value)}
                  value={filtersApplied['employeesCount']}
                  minValue={0}
                  maxValue={500}
                />
              </div>
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
                      <div>
                        {opportunitiesList ?
                          <div className={styles['interns-found']}>
                            {`${opportunitiesList.length} interns found`}
                          </div> :
                          <></>}
                      </div>
                      <div>
                        {opportunitiesList &&
                          opportunitiesList.map((opportunity) => (
                            <PostComponent opportunity={opportunity} />
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
}

Opportunities.propTypes = {
  fetchStudentOpportunitiesComponent: PropTypes.func,
  fetchLocationsComponent: PropTypes.func,
  fetchSkillsComponent: PropTypes.func,
  setOpportunityFilterComponent: PropTypes.func
}

const mapActionToProps = (dispatch) => {
  return {
    fetchStudentOpportunitiesComponent: (filterObj) => {
      dispatch(fetchStudentOpportunities(filterObj))
    },
    fetchLocationsComponent: () => {
      dispatch(fetchLocations())
    },
    fetchSkillsComponent: () => {
      return dispatch(fetchSkills())
    },
    setOpportunityFilterComponent: (filter) => {
      return dispatch(setOpportunityFilter(filter))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    opportunitiesObj: state.student.opportunities,
    locations: state.student.filters.locations,
    locationsLoading: state.student.filters.locationsLoading,
    skillsLoading: state.student.skill.skillsLoading,
    skills: state.student.skill.skills,
  }
}

export default connect(mapStateToProps, mapActionToProps)(Opportunities)
