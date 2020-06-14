/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostComponent from 'coreContainers/post'
import SidebarMenu from 'coreContainers/sidebar-menu'
import { SelectFilter, RangeFilter } from 'coreContainers/filters'
import Loader from 'coreContainers/loading'
import {
  faBookmark,
  faBuilding,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'
import { INTERNSHIP_POST_TYPE_KEY } from '../../constants'
import {
  fetchStudentOpportunities,
  fetchLocations,
  fetchSkills,
  setOpportunityFilter,
  setOpportunityFilterTab,
  applyPost,
} from '../../actions'

import styles from './index.css'

export function Opportunities({
  fetchSkillsComponent,
  fetchLocationsComponent,
  fetchStudentOpportunitiesComponent,
  currentTab,
  history,
  location,
  setCurrentTabComponent,
  opportunitiesObj,
  locations,
  locationsLoading,
  setOpportunityFilterComponent,
  skillsLoading,
  skills,
  applyPostComponent,
}) {
  useEffect(() => {
    const filterObj = {
      post_type: INTERNSHIP_POST_TYPE_KEY,
    }
    fetchLocationsComponent()
    fetchSkillsComponent()
    fetchStudentOpportunitiesComponent(filterObj)
  }, [])

  const handleFilterChange = (filterKey, value) => {
    const data = {}
    data[filterKey] = value
    setOpportunityFilterComponent(data)
  }

  const getFilterOptions = (filterList) => {
    const resultArr = []
    filterList.forEach((filter) =>
      resultArr.push({ value: filter.slug, label: filter.name }),
    )
    return resultArr
  }

  const setActiveTab = (value) => {
    history.push({
      pathname: location.pathname,
      search: `?tab=${value}`,
    })
    setCurrentTabComponent(value)
  }

  const sidebarProps = {
    rowItems: [
      {
        slug: 'applied-posts',
        title: 'Applied Posts',
        icon: faCheckCircle,
      },
      { slug: 'bookmarks', title: 'Bookmarks', icon: faBookmark },
      { slug: 'companies', title: 'Companies', icon: faBuilding },
    ],
    currentTab,
    handleClick: setActiveTab,
  }

  const { opportunitiesList, isLoading, filtersApplied } = opportunitiesObj

  return (
    <div className={styles['opportunities-container']}>
      <div className={styles['side-container']}>
        <div>
          <SidebarMenu {...sidebarProps} />
        </div>
        <div className={styles['filter-container']}>
          <div className={styles['filter-heading']}>Filters</div>
          {/* <div className={styles["filter-opportunityType"]}>
          <FilterLabel options={this.state.options} />
        </div> */}
          <div className={styles['filter-main-container']}>
            <div className={styles['location-filter']}>
              <div className={styles['filter-label']}>Select location</div>
              <SelectFilter
                options={getFilterOptions(locations)}
                loading={locationsLoading}
                placeholder="Select location"
                handleChange={handleFilterChange}
              />
            </div>
            <div className={styles['location-filter']}>
              <div className={styles['filter-label']}>Select skills</div>
              <SelectFilter
                options={getFilterOptions(skills)}
                loading={skillsLoading}
                placeholder="Select skills"
                handleChange={handleFilterChange}
              />
            </div>
            <div className={styles['range-filter']}>
              <div className={styles['filter-label']}>Duration</div>
              <div className={styles['range-filter-slider']}>
                <RangeFilter
                  handleChange={(value) =>
                    handleFilterChange('duration', value)
                  }
                  value={filtersApplied.duration}
                  minValue={0}
                  maxValue={5}
                />
              </div>
            </div>
            <div className={styles['range-filter']}>
              <div className={styles['filter-label']}>Stipend</div>
              <div className={styles['range-filter-slider']}>
                <RangeFilter
                  handleChange={(value) => handleFilterChange('stipend', value)}
                  value={filtersApplied.stipend}
                  minValue={0}
                  maxValue={8000}
                />
              </div>
            </div>
            <div className={styles['range-filter']}>
              <div className={styles['filter-label']}>No. of Employees</div>
              <div className={styles['range-filter-slider']}>
                <RangeFilter
                  handleChange={(value) =>
                    handleFilterChange('employeesCount', value)
                  }
                  value={filtersApplied.employeesCount}
                  minValue={0}
                  maxValue={500}
                />
              </div>
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
                      {opportunitiesList ? (
                        <div className={styles['interns-found']}>
                          {`${opportunitiesList.length} interns found`}
                        </div>
                      ) : (
                          <></>
                        )}
                    </div>
                    <div>
                      {opportunitiesList &&
                        opportunitiesList.map((opportunity) => (
                          <PostComponent
                            opportunity={opportunity}
                            applyPost={applyPostComponent}
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

Opportunities.propTypes = {
  opportunitiesObj: PropTypes.shape({
    isLoading: PropTypes.bool,
    opportunitiesList: PropTypes.array,
    filtersApplied: PropTypes.shape({
      employeesCount: PropTypes.array,
      stipend: PropTypes.array,
      duration: PropTypes.array,
    }),
  }),
  fetchStudentOpportunitiesComponent: PropTypes.func,
  fetchLocationsComponent: PropTypes.func,
  fetchSkillsComponent: PropTypes.func,
  setOpportunityFilterComponent: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  setCurrentTabComponent: PropTypes.func,
  currentTab: PropTypes.string,
  locations: PropTypes.array,
  locationsLoading: PropTypes.bool,
  skills: PropTypes.array,
  skillsLoading: PropTypes.bool,
  applyPostComponent: PropTypes.func,
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
    },
    setCurrentTabComponent: (value) => {
      return dispatch(setOpportunityFilterTab(value))
    },
    applyPostComponent: (postSlug, callback) => {
      return dispatch(applyPost(postSlug, callback))
    },
  }
}

const mapStateToProps = (state) => {
  return {
    opportunitiesObj: state.student.opportunities,
    locations: state.student.filters.locations,
    locationsLoading: state.student.filters.locationsLoading,
    skillsLoading: state.student.skill.skillsLoading,
    skills: state.student.skill.skills,
    currentTab: state.student.opportunities.currentFilterTab,
  }
}

export default connect(mapStateToProps, mapActionToProps)(Opportunities)
