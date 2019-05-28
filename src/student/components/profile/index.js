import React, { Component } from "react"
import { Progress, Icon } from "semantic-ui-react"
import { connect } from "react-redux"
import { showInfo } from "../../actions/index"
import "../css/profile.css"
import PropTypes from "prop-types"
import { Image } from "../../../core_containers"

class StudentProfile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			// student: this.props
		}
	}

	componentDidMount() {
		console.log(this.props)
		this.props.showInfo()
	}
	render() {
		const student = this.props.info
		return (
			<div className="info">
				<div className="student-img">
					<Image
						className="image"
						src={student.img_src}
						size={student.img_size}
					/>
				</div>
				<div className="student-info">
					<div className="student-personal-info">
						<span className="student-name">{student.name}</span>
						<span className="student-branch">
							{student.branch + "    ." + student.year}
						</span>
						<span className="roll">{student.course + ". " + student.roll}</span>
						<div className="icon1">
							<Icon name="circle" size="huge" />
						</div>
					</div>
					<div className="student-qualities">{student.qualities}</div>
					<div className="icons">
						<Icon name="circle" size="big" />
						<Icon name="circle" size="big" />
						<Icon name="circle" size="big" />
					</div>
				</div>
				<div className="profile-status">
					<div className="profile-percent">
						<span>{student.profilePercentage}% profile completed</span>
						<Progress
							percent={student.profilePercentage}
							progress
							color="blue"
						/>
					</div>
					<div className="label">
						<div className="label_1">
							<span>Following 36</span>
							<Icon name="circle" size="big" />
						</div>
						<div className="label_2">
							<span>Available</span>
							<Icon name="circle" size="big" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

StudentProfile.propTypes = {
	info: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			branch: PropTypes.string,
			year: PropTypes.string,
			course: PropTypes.string,
			roll: PropTypes.number,
			src: PropTypes.string,
			profilePercentage: PropTypes.number
		})
	)
}

function mapDispatchToProps(dispatch) {
	return {
		showInfo: () => {
			dispatch(showInfo())
		}
	}
}

function mapStateToProps(state) {
	return {
		info: state.studentReducer.profile
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StudentProfile)
