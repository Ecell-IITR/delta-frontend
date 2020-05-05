import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import CreatePost from '.'
import InputField from '../../../../coreContainers/input'
import Dropdown from '../../../../coreContainers/dropdown'
import { Button } from '../../../../coreContainers'

class Competition extends Component {
  constructor(prop) {
    super(prop)

    this.onSubmit = this.onSubmit.bind(this)
    this.titleHandler = this.titleHandler.bind(this)
    this.typeOfCompetitionHandler = this.typeOfCompetitionHandler.bind(this)
    this.competitionDescription = this.competitionDescription.bind(this)
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

  titleHandler = e =>{
    this.setState = {
      title: e.target.value
    }
  }
  typeOfCompetitionHandler = e =>{
    this.setState = {
      typeOfCompetition: e.target.value
    }
  }
  competitionDescriptionHandler = e =>{
    this.setState = {
      competitionDescription: e.target.value
    }
  }
  posterHandler = e =>{
    this.setState = {
      postExpiryDate: e.target.file
    }
  }
  dateOfCompetitionHandler = e =>{
    this.setState = {
      dateOfCompetition: e.target.value
    }
  }
  postExpiryDateHandler = e =>{
    this.setState = {
      postExpiryDate: e.target.value
    }
  }
  linkHandler = e =>{
    this.setState = {
      link: e.target.value
    }
  }

  prizeHandler = e =>{
    this.setState = {
      postExpiryDate: e.target.value
    }
  }
  requiredSkillsHandler = e =>{
    this.setState = {
      postExpiryDate: e.target.value
    }
  }
  onSubmit(e) {
    e.preventDefault();

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
        <Form.Group onSubmit={this.onSubmit}>
          <InputField 
            label="Title" 
            placeholder="Enter title of project" 
            onChange = {this.titleHandler}
          />
          <InputField
            label="Type of competition"
            placeholder="Select type of competition"
            onChange = {this.typeOfCompetitionHandler}
          />
          <InputField
            label="Competition description"
            placeholder="Enter competition description"
            onChange = {this.competitionDescriptionHandler}
          />
          <InputField label="Poster" placeholder="Add file" type="file" />
          <InputField
            label="Date of Competition"
            placeholder="Select date of competition"
            onChange = {this.dateOfCompetitionHandler}
            type="date"
          />
          <InputField
            label="Post expiry date"
            placeholder="Select post expiry date"
            onChange = {this.postExpiryDateHandler}
            type="date"
          />
          <InputField
            label="Link to apply for Competition"
            placeholder="Enter URL"
            onChange = {this.linkHandler}
          />
          <Dropdown options={this.state.optionsSkill} />
          <Button type='submit' buttonContent="Save" />
          <Button buttonContent="Publish" color="blue" />
        </Form.Group>
      </div>
    )
  }
}

export default Competition
