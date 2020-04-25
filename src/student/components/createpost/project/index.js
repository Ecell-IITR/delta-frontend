import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import CreatePost from '.'
import InputField from '../../../../coreContainers/input'
import Dropdown from '../../../../coreContainers/dropdown'
import { SubmitButton } from '../../../../coreContainers'
import { createPostProject } from '../../../actions'

class Project extends Component {
  constructor(prop) {
    super(prop)
    this.onSubmit = this.onSubmit.bind(this)
    this.titleHandler = this.titleHandler.bind(this)
    this.stipendHandler = this.stipendHandler.bind(this)
    this.workDescriptionHandler = this.workDescriptionHandler.bind(this)
    this.projectHandler = this.projectHandler.bind(this)
    this.approxDurationHandler = this.approxDurationHandler.bind(this)
    this.requiredSkillsHandler = this.requiredSkillsHandler.bind(this)
    this.postExipryDateHandler = this.postExipryDateHandler.bind(this)

    this.state = {
      optionsSkill: [
        { value: 'photoshop', label: 'Photoshop' },
        { value: 'illustrator', label: 'Illustrator' },
        { value: 'indesign', label: 'Indesign' },
      ],
      title: '',
      stipend: '',
      workDescription: '',
      projectFile: null,
      approxDuration: '',
      requiredSkills: [],
      postExipryDate: '',
    }
  }

  titleHandler = (e) => {
    this.setState = {
      title: e.target.value,
    }
  }
  stipendHandler = (e) => {
    this.setState = {
      stipend: e.target.value,
    }
  }
  workDescriptionHandler = (e) => {
    this.setState = {
      workDescription: e.target.value,
    }
  }
  projectHandler = (e) => {
    this.setState = {
      projectFile: e.target.file,
    }
  }
  approxDurationHandler = (e) => {
    this.setState = {
      approxDuration: e.target.value,
    }
  }
  // titleHandler = e =>{
  //   this.setState = {
  //     title: e.target.value
  //   }
  // }
  postExipryDateHandler = (e) => {
    this.setState = {
      postExipryDate: e.target.value,
    }
  }
  onSubmit(e) {
    e.preventDefault()

    const data = {
      title: this.state.title,
      stipend: this.state.stipend,
      workDescription: this.state.workDescription,
      projectFile: this.state.projectFile,
      approxDuration: this.state.approxDuration,
      requiredSkills: this.state.requiredSkills,
      postExipryDate: this.state.postExipryDate,
    }

    createPostProject(data)
  }

  render() {
    return (
      <div>
        <Form.Group onSubmit={this.onSubmit}>
          <InputField
            label="Title"
            onChange={this.titleHandler}
            placeholder="Enter title of project"
          />
          <InputField
            label="Stipend"
            onChange={this.stipendHandler}
            placeholder="Enter Stipend"
          />
          <InputField
            label="Work description"
            onChange={this.workDescriptionHandler}
            placeholder="Enter work description"
          />
          <InputField label="Project file" placeholder="Add file" type="file" />
          <InputField
            label="Approx Duration"
            onChange={this.approxDurationHandler}
            placeholder="Enter approx duration"
          />
          <Dropdown options={this.state.optionsSkill} />
          <InputField
            label="Post expiry date"
            onChange={this.postExipryDateHandler}
            placeholder="Enter post expiry date"
            type="date"
          />

          <SubmitButton type="submit" buttonContent="Save" />
          <SubmitButton buttonContent="Publish" color="blue" />
        </Form.Group>
      </div>
    )
  }
}

export default Project
