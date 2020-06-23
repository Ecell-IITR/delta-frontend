/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import InternshipForm from 'coreContainers/forms/internship-form'
import { notify } from 'react-notify-toast'
import { NOTIF_SUCCESS_TYPE } from 'globalConstants'
import {
  fetchLocations,
  fetchSkills,
  fetchTags,
  createPost,
} from '../../../actions'

import styles from './index.css'

export function CreateInternshipComponent({
  skills,
  skillsLoading,
  fetchSkillsComponent,
  locations,
  locationsLoading,
  fetchLocationsComponent,
  tags,
  tagsLoading,
  fetchTagsComponent,
  createPostComponent,
}) {
  const createPostWrapper = (obj, callback) => {
    createPostComponent(obj, (status) => {
      if (status === 200) {
        notify.show(
          'Successfully created a internship!',
          NOTIF_SUCCESS_TYPE,
          1000,
        )
      }
      callback()
    })
  }

  return (
    <div className={styles['form-container']}>
      <InternshipForm
        skills={skills}
        skillsLoading={skillsLoading}
        fetchSkills={fetchSkillsComponent}
        locations={locations}
        locationsLoading={locationsLoading}
        fetchLocations={fetchLocationsComponent}
        tags={tags}
        tagsLoading={tagsLoading}
        fetchTags={fetchTagsComponent}
        onAction={createPostWrapper}
        publishButton
        action="create"
      />
    </div>
  )
}

CreateInternshipComponent.propTypes = {
  fetchLocationsComponent: PropTypes.func,
  fetchSkillsComponent: PropTypes.func,
  locations: PropTypes.array,
  locationsLoading: PropTypes.bool,
  skills: PropTypes.array,
  skillsLoading: PropTypes.bool,
  tags: PropTypes.array,
  tagsLoading: PropTypes.bool,
  fetchTagsComponent: PropTypes.func,
  createPostComponent: PropTypes.func,
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLocationsComponent: () => {
      dispatch(fetchLocations())
    },
    fetchSkillsComponent: () => {
      return dispatch(fetchSkills())
    },
    fetchTagsComponent: () => {
      return dispatch(fetchTags())
    },
    createPostComponent: (obj, callback) => {
      dispatch(createPost(obj, callback))
    },
  }
}

function mapStateToProps(state) {
  return {
    locations: state.student.filters.locations,
    locationsLoading: state.student.filters.locationsLoading,
    skillsLoading: state.student.skill.skillsLoading,
    skills: state.student.skill.skills,
    tags: state.student.filters.tags,
    tagsLoading: state.student.filters.tagsLoading,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateInternshipComponent)
