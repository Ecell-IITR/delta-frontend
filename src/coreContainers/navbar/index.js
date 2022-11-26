/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TOKEN_TYPE } from 'globalConstants'
// import logo from '../../images/logo.svg'
// import Searchbar from '../searchbar/index'
import { getImageURL } from 'utils/getImageURL'
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact'

import HeaderMobile from './mobile' 

import styles from './navbar.css'
// import PropTypes from 'prop-types'
class Navbar extends React.PureComponent {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     Nav: true,
  //   }
  // }

  render() {
    const { user, location, userLoading } = this.props
    const activeRoute = location.pathname
    const isLoggedIn = localStorage.getItem(TOKEN_TYPE)
    // const { state } = this
    // const setState = (Newstate) => this.setState(Newstate)
    return isLoggedIn ? (
      <div className={styles.navbar}>
        <div
         
          className={styles.navController}
        >
          {/* <CDBSidebar
            textColor="#fff"
            backgroundColor={state.Nav ? '#2964ee' : 'transparent'}
          >
            <CDBSidebarHeader
              prefix={
                <div
                  aria-hidden="true"
                  onClick={() => {
                    setState({ Nav: !state.Nav })
                  }}
                  className={styles.title}
                  style={{ paddingTop: '1rem' }}
                >
                  {state.Nav ? <> &#10006; </> : <>&#9776;</>}
                </div>
              }
            >
              <div style={{ paddingTop: '1rem' }} className={styles.title}>
                Delta
              </div>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <CDBSidebarMenuItem icon="columns">
                  <li
                    className={
                      activeRoute.includes('/opportunities')
                        ? styles['active-nav-link']
                        : styles['nav-link']
                    }
                  >
                    <Link to="/opportunities">Opportunities</Link>
                  </li>
                </CDBSidebarMenuItem>

                <CDBSidebarMenuItem icon="columns">
                  <li
                    className={
                      activeRoute.includes('/user')
                        ? styles['active-nav-link']
                        : styles['nav-link']
                    }
                  >
                    {user && user.username ? (
                      <Link to={`/user/${user.username}`}>Profile</Link>
                    ) : (
                      <></>
                    )}
                  </li>
                </CDBSidebarMenuItem>

                <CDBSidebarMenuItem icon="columns">
                  <li
                    className={
                      activeRoute.includes('/create-post')
                        ? styles['active-nav-link']
                        : styles['nav-link']
                    }
                  >
                    <Link to="/create-post">Create Post</Link>
                  </li>
                </CDBSidebarMenuItem>

                <CDBSidebarMenuItem icon="columns">
                  <li className={styles['nav-link']}>
                    <Link to="/logout">Logout</Link>
                  </li>
                </CDBSidebarMenuItem>
              </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }} />
          </CDBSidebar> */}
          <HeaderMobile user={user} />
         </div>
        <div className={styles.startnav}>
          <div className={styles.title + ' ' + styles.titleRespon}>Delta</div>
          {/* <div>
            <img src={logo} className={styles.logo} alt="logo" />
          </div> */}
          {/* <div className={styles.searchBar}>
            <Searchbar />
          </div> */}
        </div>
        {userLoading ? (
          <div></div>
        ) : (
          <div className={styles.subnavbar}>
            <ul>
              <li
                className={
                  activeRoute.includes('/opportunities')
                    ? styles['active-nav-link']
                    : styles['nav-link']
                }
              >
                <Link to="/opportunities">Opportunities</Link>
              </li>
              <li
                className={
                  activeRoute.includes('/user')
                    ? styles['active-nav-link']
                    : styles['nav-link']
                }
              >
                {user && user.username ? (
                  <Link to={`/user/${user.username}`}>Profile</Link>
                ) : (
                  <></>
                )}
              </li>
              <li
                className={
                  activeRoute.includes('/create-post')
                    ? styles['active-nav-link']
                    : styles['nav-link']
                }
              >
                <Link to="/create-post">Create Post</Link>
              </li>

              <li className={styles['nav-link']}>
                <Link to="/logout">Logout</Link>
              </li>
              {user.profileImage ? (
                <li>
                  <img
                    src={getImageURL(user.profileImage)}
                    className={styles['profile-pic']}
                    alt="profile"
                  />
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        )}
      </div>
    ) : (
      <></>
    )
  }
}

Navbar.propTypes = {
  user: PropTypes.object,
  location: PropTypes.object,
  userLoading: PropTypes.bool,
}

function mapStateToProps(state) {
  return {
    user: state.student.user.user,
    userLoading: state.student.user.isLoading,
  }
}

export default connect(mapStateToProps, null)(Navbar)
