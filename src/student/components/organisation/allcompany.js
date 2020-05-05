import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './index.css'
import { followUser, unfollowUser } from '../../actions/index'
class allcompany extends Component {

    followUser(user){
        const { followUser } = this.props
        followUser(user)
    }
    unfollowUser(user) {
        const { unfollowUser } = this.props
        unfollowUser(user)
    }
    renderFollowUnfollow = (org,f) => {
        for (let i = 0; i < f.length; i++) {
            if (f[i].person.username == org.person.username) {
                return (
                    <div>
                        <a href='#' onClick={ () => {this.unfollowUser(org.person.username)}} className={styles.follow}>
                            {' '}
                            Unfollow
                            
                        </a>
                    </div>
                )
            }
        }
        return (
            <div>
                <a href="#" onClick={ () => {this.followUser(org.person.username)}} className={styles.follow}>
                    {' '}
                            Follow
                        </a>
            </div>
        )
    }
    render() {
        let { organisations, followinglist, match } = this.props
        
        return <div>
            {organisations.map((org, index) => (
                <div key={index}>
                    <div className={styles.cardsCol}>
                        <div className={styles.card}>
                            <div className={styles.cardDetails}>
                                <div className={styles.cardImg}>
                                    <img src={org.person.profileImage} alt="" />
                                </div>
                                <h4>{org.companyDomain}</h4>
                                <p>
                                    {org.categoryOfCompany} <br />
                                    <b>X</b> Followers
                                </p>
                            </div>
                            <hr />
                            {this.renderFollowUnfollow(org,followinglist)}
                            
                        </div>
                    </div>
                </div>

            ))}
        </div>
    }
}
allcompany.propTypes = {
    organisations: PropTypes.array.isRequired,
    followinglist: PropTypes.array.isRequired,
}
const mapStateToProps = (state) => {
    return {
        organisations: state.student.organisations.organisations.results,
        followinglist: state.student.followinglist.followinglist,
    }
}

const mapActionToProps = (dispatch) => {
    return {
        followUser: (user) => {
            return dispatch(followUser(user))
        },
        unfollowUser: (user) => {
            return dispatch(unfollowUser(user))
        },
    }
}

export default connect(mapStateToProps, mapActionToProps)(allcompany)


