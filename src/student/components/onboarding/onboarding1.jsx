import React, { Component } from 'react'
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

class OnBoarding1 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="onboarding1">
        <Header className="question" as="h1">
          What are your fields of Interest?
        </Header>
        <FilterLabel options={skillOptions} />
      </div>
    )
  }
}

export default OnBoarding1
