import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import InputField from '../../../../coreContainers/input'
// import Dropdown from 'coreContainers/dropdown'
import { createPostInternship } from '../../../actions'
import styles from './index.css'
import { Button } from '../../../../coreContainers'

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

  jobPositionHandler = (e) => {
    this.setState = {
      jobPosition: e.target.value,
    }
  }

  typeOfWorkHandler = (e) => {
    this.setState = {
      typeOfWork: e.target.value,
    }
  }

  workDescriptionHandler = (e) => {
    this.setState = {
      workDescription: e.target.value,
    }
  }

  durationOfInternHandler = (e) => {
    this.setState = {
      durationOfIntern: e.target.value,
    }
  }

  stipendHandler = (e) => {
    this.setState = {
      stipend: e.target.value,
    }
  }

  requiredSkillsHandler = (e) => {
    this.setState = {
      requiredSkills: e.target.value,
    }
  }
  postExpiryDateHandler = (e) => {
    this.setState = {
      postExpiryDate: e.target.value,
    }
  }

  onSubmit(e) {
    e.preventDefault()

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
      <div>
        <Form.Group className={styles.container} onSubmit={this.onSubmit}>
          <div className={styles.element1}>
            <label for="job">Job Position</label>
            <InputField
              name="job"
              onChange={this.jobPositionHandler}
              placeholder="Enter job position"
            />
          </div>
          <div className={styles.element1}>
            <label for="drop">Type of work</label>
            <Dropdown name="drop" options={this.state.optionsWork} />
          </div>
          <div className={styles.element2}>
            <label for="work">Work Description</label>
            <textarea
              name="work"
              className={styles.textarea}
              onChange={this.workDescriptionHandler}
              placeholder="Enter work description"
            />
          </div>
          <div className={styles.element1}>
            <label for="duration">Duration of Intern</label>
            <InputField
              name="duration"
              onChange={this.durationOfInternHandler}
              placeholder="Enter duration of intern"
            />
          </div>
          <div className={styles.element1}>
            <label for="stipend">Stipend</label>
            <InputField
              name="stipend"
              onChange={this.stipendHandler}
              placeholder="Enter stipend"
            />
          </div>
          <div className={styles.element1}>
            <label for="work">Required skill-set</label>
            {/* <Dropdown options={this.state.optionsSkill} isMulti={true} /> */}
          </div>
          <div className={styles.element1}>
            <label for="work">Post expiry date</label>
            <InputField
              name="Post expiry date"
              onChange={this.postExpiryDateHandler}
              placeholder="Select post expiry date"
              type="date"
            />
          </div>
          <Button
            customClassName={styles.button1}
            type="submit"
            buttonContent="Save"
          />
          <Button
            customClassName={styles.button2}
            buttonContent="Publish"
            color="blue"
          />
        </Form.Group>
      </div>
    )
  }
}

export default Internship
