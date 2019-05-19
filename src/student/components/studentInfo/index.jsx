import React, { Component } from "react";
import { Progress, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { ShowInfo } from "../../action/index";
import "./studentinfo.css";
import PropTypes from "prop-types";
import ImageIndex from "../../../core_containers/image/index";

class StudentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: this.props
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.props.ShowInfo();
  }
  render() {
    const Student = this.props.info;
    return (
      <div className="info">
        <div className="student-img">
          <ImageIndex
            className="image"
            src={Student.img_src}
            size={Student.img_size}
          />
        </div>
        <div className="student-info">
          <div className="student-personal-info">
            <span className="student-name">{Student.name}</span>
            <span className="student-branch">
              {Student.branch + "    ." + Student.year}
            </span>
            <span className="roll">{Student.course + ". " + Student.roll}</span>
            <div className="icon1">
              <Icon name="circle" size="huge" />
            </div>
          </div>
          <div className="student-qualities">{Student.qualities}</div>
          <div className="icons">
            <Icon name="circle" size="big" />
            <Icon name="circle" size="big" />
            <Icon name="circle" size="big" />
          </div>
        </div>
        <div className="profile-status">
          <div className="profile-percent">
            <span>{Student.profilePercentage}% profile completed</span>
            <Progress
              percent={Student.profilePercentage}
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
    );
  }
}

StudentInfo.propTypes = {
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
};

function mapDispatchToProps(dispatch) {
  return {
    ShowInfo: () => {
      dispatch(ShowInfo());
    }
  };
}

function mapStateToProps(state) {
  return {
    info: state
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentInfo);
