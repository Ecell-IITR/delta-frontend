import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import CreatePost from '.'
import InputField from '../../../../coreContainers/input'
import Dropdown from '../../../../coreContainers/dropdown'
import { SubmitButton } from '../../../../coreContainers'
import { createPostInternship } from '../../../actions'

class Internship extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.jobPositionHandler = this.jobPositionHandler.bind(this)
    this.typeOfWorkHandler = this.typeOfWorkHandler.bind(this)
    this.workDescriptionHandler = this.workDescriptionHandler.bind(this)
    this.durationOfInternHandler = this.durationOfInternHandler.bind(this)
    this.stipendHandler = this.stipendHandler.bind(this)
    this.requiredSkillsHandler = this.requiredSkillsHandler.bind(this)
    this.postExpiryDateHandler = this.postExpiryDateHandler.bind(this)


    this.state = {
      optionsWork: [
        { value: 'ft', label: 'Full-Time' },
        { value: 'ht', label: 'Half-Time' },
      ],
      optionsSkill: [
        { value: 'photoshop', label: 'Photoshop' },
        { value: 'illustrator', label: 'Illustrator' },
        { value: 'indesign', label: 'Indesign' },
      ],
      jobPosition: '',
      typeOfWork: '',
      workDescription: '',
      durationOfIntern: '',
      stipend: '',
      requiredSkills: [],
      postExpiryDate: '',
    }
  }


  jobPositionHandler = e =>{
    this.setState = {
      jobPosition: e.target.value
    }
  }
  typeOfWorkHandler = e =>{
    this.setState = {
      typeOfWork: e.target.value
    }
  }
  workDescriptionHandler = e =>{
    this.setState = {
      workDescription: e.target.value
    }
  }
  durationOfInternHandler = e =>{
    this.setState = {
      durationOfIntern: e.target.value
    }
  }
  stipendHandler = e =>{
    this.setState = {
      stipend: e.target.value
    }
  }
  // requiredSkillsHandler = e =>{
  //   this.setState = {
  //     requiredSkills: e.target.value
  //   }
  // }
  postExpiryDateHandler = e =>{
    this.setState = {
      postExpiryDate: e.target.value
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const data = {
      jobPosition: this.state.jobPosition,
      typeOfWork: this.state.typeOfWork,
      workDescription: this.state.workDescription,
      durationOfIntern: this.state.durationOfIntern,
      stipend: this.state.stipend,
      requiredSkills: this.state.requiredSkills,
      postExpiryDate: this.state.postExpiryDate,
    }

    createPostInternship(data)
  }



  render() {
    return (
      <div className="internship-container">
        <div>
          <Form.Group onSubmit={this.onSubmit} widths="equal">
            <InputField label="Job Position" onChange={this.jobPositionHandler} placeholder="Enter job position" />
            <Dropdown options={this.state.optionsWork} />
            <InputField
              label="Work description"
              onChange={this.workDescriptionHandler}
              placeholder="Enter work description"
            />
            <InputField
              label="Duration of Intern"
              onChange={this.durationOfInternHandler}
              placeholder="Enter duration of intern"
            />
            <InputField label="Stipend" onChange={this.stipendHandler} placeholder="Enter stipend" />
            <Dropdown options={this.state.optionsSkill} isMulti={true} />
            <InputField
              label="Post expiry date"
              onChange={this.postExpiryDateHandler}
              placeholder="Select post expiry date"
              type="date"
            />
            <SubmitButton type='submit' buttonContent="Save" />
            <SubmitButton buttonContent="Publish" color="blue" />
          </Form.Group>
        </div>
      </div>
    )
  }
}

export default Internship
