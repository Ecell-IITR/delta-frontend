import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import CreatePost from '.'
import InputField from '../../../coreContainers/input'
import Dropdown from '../../../coreContainers/dropdown'
import { SubmitButton } from '../../../coreContainers'

class Project extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      options_skill: [
        { value: 'photoshop', label: 'Photoshop' },
        { value: 'illustrator', label: 'Illustrator' },
        { value: 'indesign', label: 'Indesign' },
      ],

      title: '',
      stipend: '',
      work_description: '',
      project_file: null,
      approx_duration: '',
      required_skills: [],
      post_exipry_date: '',
    }
  }

  render() {
    return (
      <div>
        <CreatePost />
        <Form.Group>
          <InputField label="Title" placeholder="Enter title of project" />
          <InputField label="Stipend" placeholder="Enter Stipend" />
          <InputField
            label="Work description"
            placeholder="Enter work description"
          />
          <InputField label="Project file" placeholder="Add file" type="file" />
          <InputField
            label="Approx Duration"
            placeholder="Enter approx duration"
          />
          <Dropdown options={this.state.options_skill} />
          <InputField
            label="Post expiry date"
            placeholder="Enter post expiry date"
            type="date"
          />
        </Form.Group>
        <SubmitButton buttonContent="Save" />
        <SubmitButton buttonContent="Publish" color="blue" />
      </div>
    )
  }
}

export default Project
