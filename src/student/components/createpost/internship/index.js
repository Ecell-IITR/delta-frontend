import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import CreatePost from '.'
import InputField from '../../../../coreContainers/input'
import Dropdown from '../../../../coreContainers/dropdown'
import { SubmitButton } from '../../../../coreContainers'

class Internship extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options_work: [
        { value: 'ft', label: 'Full-Time' },
        { value: 'ht', label: 'Half-Time' },
      ],
      options_skill: [
        { value: 'photoshop', label: 'Photoshop' },
        { value: 'illustrator', label: 'Illustrator' },
        { value: 'indesign', label: 'Indesign' },
      ],
      job_position: '',
      type_of_work: '',
      work_description: '',
      duration_of_intern: '',
      stipend: '',
      required_skills: [],
      post_expiry_date: '',
    }
  }

  render() {
    return (
      <div className="internship-container">
        <div>
          <Form.Group widths="equal">
            <InputField label="Job Position" placeholder="Enter job position" />
            <Dropdown options={this.state.options_work} />
            <InputField
              label="Work description"
              placeholder="Enter work description"
            />
            <InputField
              label="Duration of Intern"
              placeholder="Enter duration of intern"
            />
            <InputField label="Stipend" placeholder="Enter stipend" />
            <Dropdown options={this.state.options_skill} isMulti={true} />
            <InputField
              label="Post expiry date"
              placeholder="Select post expiry date"
              type="date"
            />
          </Form.Group>
          <SubmitButton buttonContent="Save" />

          <SubmitButton buttonContent="Publish" color="blue" />
        </div>
      </div>
    )
  }
}

export default Internship
