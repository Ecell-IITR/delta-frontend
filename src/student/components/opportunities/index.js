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
  bookmarkPost,
} from '../../actions'
import OrganizationListComponent from '../organisation'

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
  bookmarkPostComponent,
  isAppliedLoading,
  appliedLoadingSlug,
  filtersApplied
}) {
  const getFilterObject = (tabValue = '') => {
    const data = {}
    data['post_type'] = INTERNSHIP_POST_TYPE_KEY
    const tab = tabValue ? tabValue : currentTab
    if (tab === 'applied-posts') {
      data['applied_posts'] = true
    }
    if (tab === 'bookmarks') {
      data['bookmark'] = true
    }
    if (filtersApplied.hasOwnProperty('duration')) {
      data['duration_value_ll'] = filtersApplied.duration[0]
      data['duration_value_ul'] = filtersApplied.duration[1]
    }
    if (filtersApplied.hasOwnProperty('stipend')) {
      data['stipend_ll'] = filtersApplied.stipend[0]
      data['stipend_ul'] = filtersApplied.stipend[1]
    }
    data['duration_unit'] = filtersApplied.duration_unit
    return data
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    if (searchParams && searchParams.get('tab')) {
      setCurrentTabComponent(searchParams.get('tab'))
    }
    fetchLocationsComponent()
    fetchSkillsComponent()
    fetchStudentOpportunitiesComponent(getFilterObject(searchParams.get('tab')))
    return function cleanup() {
      setCurrentTabComponent('')
    }
  }, [])

  const handleFilterChange = (filterKey, value) => {
    const data = {}
    if (filterKey === 'skill_slug') {
      let tempArr = []
      if (value) {
        value.forEach(obj => tempArr.push(obj.value))
        data[filterKey] = tempArr
      }
      else {
        data[filterKey] = []
      }
    }
    else {
      data[filterKey] = value
    }
    setOpportunityFilterComponent(data)
    fetchStudentOpportunitiesComponent(getFilterObject())
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

  const { opportunitiesList, isLoading } = opportunitiesObj

  return (
    <div className={styles['opportunities-container']}>
      <div className={styles['side-container']}>
        <div>
          <SidebarMenu {...sidebarProps} />
        </div>
        {currentTab !== 'companies' ?
          <div className={styles['filter-container']}>
            <div className={styles['filter-heading']}>Filters</div>
            {/* <div className={styles["filter-opportunityType"]}>
          <FilterLabel options={this.state.options} />
        </div> */}
            <div className={styles['filter-main-container']}>
              <div className={styles['location-filter']}>
                <div className={styles['filter-label']}>Select location</div>
                <SelectFilter
                  options={locations ? getFilterOptions(locations) : []}
                  loading={locationsLoading}
                  placeholder="Select location"
                  handleChange={(loc) =>
                    handleFilterChange('location', loc ? loc.value : '')
                  }
                />
              </div>
              <div className={styles['location-filter']}>
                <div className={styles['filter-label']}>Select skills</div>
                <SelectFilter
                  options={skills ? getFilterOptions(skills) : []}
                  loading={skillsLoading}
                  placeholder="Select skills"
                  isMulti={true}
                  handleChange={(valueArr) => handleFilterChange('skill_slug', valueArr)}
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
                    maxValue={100}
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
              {/* <div className={styles['range-filter']}>
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
            </div> */}
            </div>
          </div>
          : <></>}
      </div>
      <div className={styles['opportunities-main-container']}>
        {currentTab === 'companies' ? <OrganizationListComponent /> :
          <>
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
                                key={opportunity.slug}
                                opportunity={opportunity}
                                applyPost={applyPostComponent}
                                bookmarkPost={bookmarkPostComponent}
                                isAppliedLoading={isAppliedLoading}
                                appliedLoadingSlug={appliedLoadingSlug}
                              />
                            ))}
                        </div>
                      </>
                    )}
                </>
              )}
          </>}
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
  bookmarkPostComponent: PropTypes.func,
  isAppliedLoading: PropTypes.bool,
  appliedLoadingSlug: PropTypes.string,
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
    applyPostComponent: (postSlug, value) => {
      return dispatch(applyPost(postSlug, value))
    },
    bookmarkPostComponent: (postSlug, value) => {
      return dispatch(bookmarkPost(postSlug, value))
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
    isAppliedLoading: state.student.opportunities.isAppliedLoading,
    appliedLoadingSlug: state.student.opportunities.appliedLoadingSlug,
    filtersApplied: state.student.filters.filtersApplied
  }
}

export default connect(mapStateToProps, mapActionToProps)(Opportunities)
