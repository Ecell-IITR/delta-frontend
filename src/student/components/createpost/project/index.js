import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import CreatePost from '.'
import InputField from '../../../../coreContainers/input'
import Dropdown from '../../../../coreContainers/dropdown'
import Button from '../../../../coreContainers/button'
import { createPostProject } from '../../../actions'
import styles from './index.css'

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
  requiredSkillsHandler = (e) => {
    this.setState = {
      title: e.target.value,
    }
  }
  postExipryDateHandler = (e) => {
    this.setState = {
      postExipryDate: e.target.value,
    }
  }
  onSubmit = (e) => {
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
        <Form.Group className={styles.container} onSubmit={this.onSubmit}>
          <div className={styles.element1}>
            <label>Title</label>
            <InputField
              onChange={this.titleHandler}
              placeholder="Enter title of project"
            />
          </div>
          <div className={styles.element1}>
            <label>Stipend</label>
            <InputField
              onChange={this.stipendHandler}
              placeholder="Enter Stipend"
            />
          </div>
          <div className={styles.element2}>
            <label>Work description</label>
            <textarea
              className={styles.textarea}
              onChange={this.workDescriptionHandler}
              placeholder="Enter work description"
            />
          </div>
          <div className={styles.element1}>
            <label>Project file</label>
            <InputField placeholder="Add file" type="file" />
          </div>
          <div className={styles.element1}>
            <label>Approx Duration</label>
            <InputField
              onChange={this.approxDurationHandler}
              placeholder="Enter approx duration"
            />
          </div>
          <div className={styles.element1}>
            <label>Required skill-set</label>
            <Dropdown options={this.state.optionsSkill} />
          </div>
          <div className={styles.element1}>
            <label>Post expiry date</label>
            <InputField
              onChange={this.postExipryDateHandler}
              placeholder="Enter post expiry date"
              type="date"
            />
          </div>
        </Form.Group>
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
      </div>
    )
  }
}

export default Project
