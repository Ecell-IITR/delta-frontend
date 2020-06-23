// /* eslint-disable jsx-a11y/click-events-have-key-events */
// /* eslint-disable jsx-a11y/no-static-element-interactions */
// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
// // import SubmitButton from '../../../coreContainers/button/submit'
// // import { viewResume } from '../../../actions'

// class ViewResume extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }

//   handleClick = () => {
//     const { viewResumeComponent } = this.props
//     viewResumeComponent()
//   }

//   render() {
//     return (
//       <div className="viewResume" onClick={this.handleClick}>
//         {/* <SubmitButton color="white" buttonContent="View Resume" /> */}
//       </div>
//     )
//   }
// }

// ViewResume.propTypes = {
//   viewResumeComponent: PropTypes.func,
// }

// function mapdispatchToProps(dispatch) {
//   return {
//     viewResumeComponent: () => {
//       // dispatch(viewResume())
//     },
//   }
// }

// export default connect(null, mapdispatchToProps)(ViewResume)
