import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import CreatePost from '.'
import InputField from '../../../../coreContainers/input'
import Dropdown from '../../../../coreContainers/dropdown'
import Button from '../../../../coreContainers/button'
import styles from './index.css'

class Competition extends Component {
  constructor(prop) {
    super(prop)

    this.onSubmit = this.onSubmit.bind(this)
    this.titleHandler = this.titleHandler.bind(this)
    this.typeOfCompetitionHandler = this.typeOfCompetitionHandler.bind(this)
    this.competitionDescriptionHandler = this.competitionDescriptionHandler.bind(
      this,
    )
    this.posterHandler = this.posterHandler.bind(this)
    this.dateOfCompetitionHandler = this.dateOfCompetitionHandler.bind(this)
    this.postExpiryDateHandler = this.postExpiryDateHandler.bind(this)
    this.linkHandler = this.linkHandler.bind(this)

    this.state = {
      optionsSkill: [
        { value: 'photoshop', label: 'Photoshop' },
        { value: 'illustrator', label: 'Illustrator' },
        { value: 'indesign', label: 'Indesign' },
      ],
      title: '',
      typeOfCompetition: '',
      competitionDescription: '',
      poster: null,
      dateOfCompetition: '',
      postExpiryDate: '',
      link: '',
      prize: [],
      requiredSkills: [],
    }
  }

  titleHandler = (e) => {
    this.setState = {
      title: e.target.value,
    }
  }
  typeOfCompetitionHandler = (e) => {
    this.setState = {
      typeOfCompetition: e.target.value,
    }
  }
  competitionDescriptionHandler = (e) => {
    this.setState = {
      competitionDescription: e.target.value,
    }
  }
  posterHandler = (e) => {
    this.setState = {
      postExpiryDate: e.target.file,
    }
  }
  dateOfCompetitionHandler = (e) => {
    this.setState = {
      dateOfCompetition: e.target.value,
    }
  }
  postExpiryDateHandler = (e) => {
    this.setState = {
      postExpiryDate: e.target.value,
    }
  }
  linkHandler = (e) => {
    this.setState = {
      link: e.target.value,
    }
  }

  prizeHandler = (e) => {
    this.setState = {
      postExpiryDate: e.target.value,
    }
  }
  requiredSkillsHandler = (e) => {
    this.setState = {
      postExpiryDate: e.target.value,
    }
  }
  onSubmit(e) {
    e.preventDefault()

    const data = {
      title: this.state.title,
      typeOfCompetition: this.state.typeOfCompetition,
      competitionDescription: this.state.competitionDescription,
      poster: this.state.poster,
      dateOfCompetition: this.state.dateOfCompetition,
      postExpiryDate: this.state.postExpiryDate,
      link: this.state.link,
      prize: this.state.prize,
      requiredSkills: this.state.requiredSkills,
    }

    createPostCompetition(data)
  }

  render() {
    return (
      <div>
        <Form.Group className={styles.container} onSubmit={this.onSubmit}>
          <div className={styles.element1}>
            <label>Title</label>
            <InputField
              placeholder="Enter title of project"
              onChange={this.titleHandler}
            />
          </div>
          <div className={styles.element1}>
            <label>Type of competition</label>
            <InputField
              placeholder="Select type of competition"
              onChange={this.typeOfCompetitionHandler}
            />
          </div>
          <div className={styles.element2}>
            <label>Competition Description</label>
            <textarea
              className={styles.textarea}
              placeholder="Enter competition description"
              onChange={this.competitionDescriptionHandler}
            />
          </div>
          <div className={styles.element1}>
            <label>Poster</label>
            <InputField placeholder="Add file" type="file" />
          </div>
          <div className={styles.element1}>
            <label>Date of Competition</label>
            <InputField
              placeholder="Select date of competition"
              onChange={this.dateOfCompetitionHandler}
              type="date"
            />
          </div>
          <div className={styles.element1}>
            <label>Post expiry date</label>
            <InputField
              placeholder="Select post expiry date"
              onChange={this.postExpiryDateHandler}
              type="date"
            />
          </div>
          <div className={styles.element1}>
            <label>Link to apply for Competition</label>
            <InputField
              type="link"
              placeholder="Enter URL"
              onChange={this.linkHandler}
            />
          </div>
          <div className={styles.element1}>
            <label>Required skill-set</label>
            <Dropdown options={this.state.optionsSkill} />
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

export default Competition
