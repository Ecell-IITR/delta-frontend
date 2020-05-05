import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './index.css'
class followingcompany extends Component {

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
                            <a href="" className={styles.follow}>
                                {' '}
                            Follow
                        </a>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    }
}
followingcompany.propTypes = {
    organisations: PropTypes.array.isRequired,
    followinglist: PropTypes.array.isRequired,
}
const mapStateToProps = (state) => {
    return {
        organisations: state.student.organisations.organisations.results,
        followinglist: state.student.followinglist.followinglist,
    }
}

export default connect(mapStateToProps, null)(followingcompany)


