import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './index.css'
import PropTypes from 'prop-types'
import {
    fetchOrganisations
} from '../../actions/index'
class Organisation extends Component {
    componentDidMount = () => {
        const { fetchOrganisations } = this.props
        fetchOrganisations()
    }

    render() {
        let {
            organisations,
        } = this.props
        return <div className={styles.org}>
            <div className={styles.sidebar}>Sidebar</div>
            <div className={styles.contentBox}>
                <div className={styles.tabs}>
                    <div className={styles.tabsCol}>
                        <div>
                            <p>Following</p>
                        </div>
                        <div className={styles.tabActive}>
                            <p>All</p>
                        </div>
                    </div>
                    <div className="allCards">
                        {organisations && organisations[0] ? (
                            <div>
                                {organisations.map((org, index) => (
                                    <div key={index}>
                                        <div className={styles.cardsCol}>
                                            <div className={styles.card}>
                                                <div className={styles.cardDetails}>
                                                    <div className={styles.cardImg}>
                                                        <img src={org.person.profileImage} alt="" />
                                                    </div>
                                                    <h4>{org.companyDomain}</h4>
                                                    <p>{org.categoryOfCompany} <br />
                                                        <b>X</b> Followers</p>
                                                </div>
                                                <hr />
                                                <a href="" className={styles.follow}> Follow</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                                null
                            )}
                    </div>
                </div>
            </div>
        </div>
    }
}
Organisation.propTypes = {
    fetchOrganisations: PropTypes.func.isRequired,
    organisations: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
    return {
        organisations: state.student.organisations.organisations.results,
    }
}

const mapActionToProps = (dispatch) => {
    return {
        fetchOrganisations: () => {
            return dispatch(fetchOrganisations())
        },
    }
}

export default connect(mapStateToProps, mapActionToProps)(Organisation)
