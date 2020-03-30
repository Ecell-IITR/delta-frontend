import React, { Component } from 'react'
import { hasToken } from '../../utils'
import { TOKEN_TYPE } from '../../constants/index'
import { fetchUser } from '../../actions/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
class StudentDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    if (!hasToken(TOKEN_TYPE)) {
      this.props.history.push('/student/')
    } else {
      this.props.fetchUser()
    }
  }
  render() {
    return <div>Welcome!</div>
  }
}

const mapActionToProps = dispatch => {
  return {
    fetchUser: () => {
      return dispatch(fetchUser())
    }
  }
}
StudentDashboard.propTypes = {
  history: PropTypes.object.isRequired,
  fetchUser: PropTypes.func
}

export default connect(
  null,
  mapActionToProps
)(StudentDashboard)
