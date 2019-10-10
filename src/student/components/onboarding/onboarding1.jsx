import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Header } from 'semantic-ui-react'
import '../css/onboarding.css'
import FilterLabel from '../../../core_containers/filterLabel/index'

const skillOptions = [
  { label: 'angular', value: 'angular' },
  { label: 'css', value: 'css' },
  { label: 'design', value: 'design' },
  { label: 'ember', value: 'ember' },
  { label: 'html', value: 'html' },
  { label: 'ia', value: 'ia' },
  { label: 'javascript', value: 'javascript' },
  { label: 'mech', value: 'mech' },
  { label: 'in', value: 'mech' },
  { label: 'meteor', value: 'meteor' },
  { label: 'node', value: 'node' },
  { label: 'plumbing', value: 'plumbing' },
  { label: 'python', value: 'python' },
  { label: 'rails', value: 'rails' },
  { label: 'react', value: 'react' },
  { label: 'repair', value: 'repair' },
  { label: 'ruby', value: 'ruby' },
  { label: 'ui', value: 'ui' },
  { label: 'ux', value: 'ux' }
]

class onBoarding1 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  updateSelectedSkills = selectedSkills => {
    this.props.dispatch({
      type: 'ADD_PROFILE_SKILLS',
      payload: selectedSkills
    })
  }

  render() {
    return (
      <div className="onboarding1">
        <Header className="question" as="h1">
          What are your fields of Interest?
        </Header>
        <FilterLabel
          options={skillOptions}
          callback={this.updateSelectedSkills}
        />
      </div>
    )
  }
}

onBoarding1.propTypes = {
  addProfileSkills: PropTypes.func.isRequired,
  dispatch: PropTypes.func
}

export default connect(
  null,
  null
)(onBoarding1)