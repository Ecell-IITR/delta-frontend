import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchOrganizationsList, followUnfollowUser } from '../../actions'
import TabMenu from 'coreContainers/tab-menu'
import EmptyScreen from 'coreContainers/empty-screen'

import styles from './index.css'

export function OrganizationList({
  fetchOrganizationsComponent,
  organizations,
  organizationsListLoading,
  followUnfollowUserComponent
}) {
  const [currentTab, setCurrentTab] = useState('all')

  useEffect(() => {
    fetchOrganizationsComponent(currentTab)
  }, [currentTab])

  const tabProps = {
    tabItems: [
      { slug: 'all', title: 'All' },
      { slug: 'following-list', title: 'Following' },
    ],
    currentTab,
    handleClick: setCurrentTab,
  }
  return (
    <div className={styles['organization-container']}>
      <div className={styles['organization-tabs']}>
        <TabMenu {...tabProps} />
      </div>
      <div className={styles['organization-main']}>
        {organizationsListLoading ? <div>Loading.....</div> :
          <>
            {organizations && organizations.length === 0 ? <EmptyScreen /> :
              <div className={styles['organization-cards-container']}>
                {organizations && organizations.map(organization => (
                  <div className={styles['organization-card']}>
                    <div className={styles['card-info']}>
                      <div className={styles['card-profile-image']} style={{
                        backgroundImage: `url(${organization.person.profileImage})`
                      }}>
                      </div>
                      <div className={styles['card-info-desc']}>
                        <div className={styles['card-title']}>
                          {organization.companyName}
                        </div>
                        <div className={styles['card-text']}>
                          {organization.companyDomain}
                        </div>
                        <div className={styles['card-text']}>
                          <span className={styles['card-title']}>{organization.followersCount}</span>{` Follower${organization.followersCount > 1 ? 's' : ''}`}
                        </div>
                      </div>
                    </div>
                    <div className={styles['card-lower-section']}>
                      <button type='button' className={styles['action-button']}
                        onClick={() => {
                          followUnfollowUserComponent(organization.person.username, organization.isFollow ? 2 : 1)
                        }}
                      >
                        {organization.isFollow ? 'Unfollow' : 'Follow'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>}
          </>}
      </div>
    </div>
  )
}


OrganizationList.propTypes = {
  fetchOrganizationsComponent: PropTypes.func.isRequired,
  organizations: PropTypes.array.isRequired,
  organizationsListLoading: PropTypes.bool,
  followUnfollowUserComponent: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    organizations: state.student.organizations.organizationsList,
    organizationsListLoading: state.student.organizations.organizationsListLoading
  }
}

const mapActionToProps = (dispatch) => {
  return {
    fetchOrganizationsComponent: (filterValue) => {
      dispatch(fetchOrganizationsList(filterValue))
    },
    followUnfollowUserComponent: (username, value) => {
      dispatch(followUnfollowUser(username, value))
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(OrganizationList)
