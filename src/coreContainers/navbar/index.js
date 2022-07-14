/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TOKEN_TYPE } from 'globalConstants'
// import logo from '../../images/logo.svg'
// import Searchbar from '../searchbar/index'
import { getImageURL } from 'utils/getImageURL'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import styles from './navbar.css'
// import PropTypes from 'prop-types'
class Navbar extends React.PureComponent {
  render() {
    const { user, location, userLoading } = this.props
    const activeRoute = location.pathname
    const isLoggedIn = localStorage.getItem(TOKEN_TYPE)
    return isLoggedIn ? (
      <div className={styles.navbar}>
        <div className={styles.startnav}>
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#2964ee">
        <CDBSidebarHeader prefix={<div className={styles.title} style={{paddingTop:"1rem"}}>&#9776; </div>}>
        <div style={{paddingTop:"1rem"}} className={styles.title}>Delta</div>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
          <div className={styles.title}>Delta</div>
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
              {/* <li>
              <Link to="/">More</Link>
            </li> */}
              {/* <li>
              <Link to="/">
                <Icon name="bell" />
              </Link>
            </li> */}
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
