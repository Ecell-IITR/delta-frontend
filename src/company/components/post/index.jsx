import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SubmitButton } from '../../../core_containers'
import '../css/post.css'

export default class post extends Component {
  render() {
    return (
      <div className="post">
        <div className="leftc">
          <div className="heading">
            <div className="square" />
            Internship
          </div>
          <div className="heading">
            <div className="square" />
            Project
          </div>
          <div className="heading">
            <div className="square" />
            Competition
          </div>
        </div>
        <div className="rightc">
          <form onSubmit={this.handleSubmit}>
            <div className="c1">
              <div className="jobpos">
                <span className="fieldTitle">
                  Job Position
                  <br />
                  <input type="text" className="positionField" />
                </span>
              </div>
              <div className="workloc">
                <span className="fieldTitle">
                  Location of Work
                  <br />
                  <input type="text" className="locationField" />
                </span>
              </div>
            </div>

            <div className="c2">
              <div className="fieldTitle">Job Description</div>
              <input type="text" className="descriptionField" />
            </div>

            <div className="c3">
              <div className="duration">
                <div className="fieldTitle">Duration of Intern</div>
                <input type="text" className="durationField" />
              </div>
              <div className="stipend">
                <div className="fieldTitle">Stipend</div>
                <input type="text" className="stipendField" />
              </div>
            </div>

            <div className="c4">
              <div className="expiry">
                <div className="fieldTitle">Post Expiry Date</div>
                <input type="text" className="expiryField" />
              </div>

              <div className="type">
                <div className="fieldTitle">Type of Work</div>
                <select name="Type of Work" className="dropDown">
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Wfh">Work from Home</option>
                </select>
              </div>
            </div>

            <div className="c5">
              <div className="fieldTitle">Required Skill-set</div>
              <input type="text" className="skillField" />
            </div>

            <div className="c6">
              <div className="fieldTitle">Product Details</div>
              <input type="text" className="detailsField" />
              <br />
            </div>

            <div className="c7">
              <input type="submit" className="savePost" value="Save" />
              <input type="submit" value="Publish" className="publishPost" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
