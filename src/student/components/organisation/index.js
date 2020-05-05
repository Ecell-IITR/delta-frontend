import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styles from './index.css'
import PropTypes from 'prop-types'
import { fetchOrganisations, fetchFollowingList } from '../../actions/index'
import Allcompany from './allcompany'
import Followingcompany from './followingcompany'
class Organisation extends Component {
  componentDidMount = () => {
    const { fetchOrganisations, fetchFollowingList } = this.props
    fetchOrganisations()
    fetchFollowingList()
  }

  render() {
    let { organisations,followinglist,match } = this.props
    return (
      <div className={styles.org}>
        <div className={styles.sidebar}>Sidebar</div>
        <div className={styles.contentBox}>
          <div className={styles.tabs}>
            <div className={styles.tabsCol}>
              <div
                className={
                  match.path == '/more/organisations/following'
                    ? `${styles.tabActive}`
                    : null
                }
              >
                <a href="/more/organisations/following">Following</a>
              </div>
              <div
                className={
                  match.path == '/more/organisations'
                    ? `${styles.tabActive}`
                    : null
                }
              >
                <a href="/more/organisations">All</a>
              </div>
            </div>
            <div className="allCards">
              {organisations && organisations[0] && followinglist ? (
                <div>
                  {match.path == '/more/organisations' ? <Allcompany /> : null}
                  {match.path == '/more/organisations/following' ? (
                    <Followingcompany />
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
Organisation.propTypes = {
  fetchOrganisations: PropTypes.func.isRequired,
  organisations: PropTypes.array.isRequired,
  fetchFollowingList: PropTypes.func.isRequired,
  followinglist: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,

}

const mapStateToProps = (state) => {
  return {
    organisations: state.student.organisations.organisations.results,
    followinglist: state.student.followinglist.followinglist,
  }
}

const mapActionToProps = (dispatch) => {
  return {
    fetchOrganisations: () => {
      return dispatch(fetchOrganisations())
    },
    fetchFollowingList: () => {
      return dispatch(fetchFollowingList())
    },
  }
}

export default connect(mapStateToProps, mapActionToProps)(Organisation)
