/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchUser } from '../../student/actions/fetch-user'
// import { Icon } from 'semantic-ui-react'
import Searchbar from '../searchbar/index'
import ImageIndex from '../image/index'

import styles from './navbar.css'
// import PropTypes from 'prop-types'
class Navbar extends React.PureComponent {
  componentDidMount() {
    const { fetchUserComponent } = this.props
    fetchUserComponent()
  }

  render() {
    const { user } = this.props
    return (
      <div className={styles.navbar}>
        <div className={styles.startnav}>
          <div className={styles.title}>Delta</div>
          <div className={styles.searchBar}>
            <Searchbar />
          </div>
        </div>
        <div className={styles.subnavbar}>
          <ul>
            <li>
              <Link to={`/user/${user.username}`}>Profile</Link>
            </li>
            <li>
              <Link to="/opportunities">Opportunities</Link>
            </li>
            <li>
              <Link to="/">Create Post</Link>
            </li>
            <li>
              <Link to="/">More</Link>
            </li>
            {/* <li>
              <Link to="/">
                <Icon name="bell" />
              </Link>
            </li> */}
            <li>
              <ImageIndex
                image="https://3.bp.blogspot.com/-iRUC5QuV8Bc/XM8aQxSkntI/AAAAAAAAB64/k4Dcl-z0GhYjP7oHUUPO5XsSw3tWeyNlgCEwYBhgL/s1600/summer_of_code_15yrs_square_PS_400px_RGB.png"
                size="mini"
                shape="circular"
                className={styles.profilepic}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

Navbar.propTypes = {
  user: PropTypes.object,
  fetchUserComponent: PropTypes.func,
}

const mapActionToProps = (dispatch) => {
  return {
    fetchUserComponent: () => {
      return dispatch(fetchUser())
    },
  }
}

function mapStateToProps(state) {
  return {
    user: state.student.user.user,
  }
}

export default connect(mapStateToProps, mapActionToProps)(Navbar)
