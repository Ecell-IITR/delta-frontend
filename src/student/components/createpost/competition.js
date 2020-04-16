import React, { Component } from 'react'
import CreatePost from '.'
import { Form } from 'semantic-ui-react'
import InputField from '../../../coreContainers/input'
import Dropdown from '../../../coreContainers/dropdown'
import { SubmitButton } from '../../../coreContainers'

export class Competition extends Component {
    
    constructor(prop){
        super(prop)
        this.state = {
            options_skill: [
            { value:'photoshop' , label: 'Photoshop' },
            { value:'illustrator' , label: 'Illustrator' },
            { value:'indesign' , label: 'Indesign' },
            ],
            title: '',
            type_of_competition: '',
            competition_description: '',
            poster: null,
            date_of_competition: '',
            post_expiry_date: '',
            link: '',
            prize: [],
            required_skills: []

        }
    }

    render() {
        return (
            <div>
                <CreatePost/>
                <Form.Group>
                    <InputField
                        label='Title'
                        placeholder='Enter title of project'
                    />
                    <InputField
                        label='Type of competition'
                        placeholder='Select type of competition'
                    />
                    <InputField
                        label='Competition description'
                        placeholder='Enter competition description'
                    />
                    <InputField
                        label='Poster'
                        placeholder='Add file'
                        type='file'
                    />
                    <InputField
                        label='Date of Competition'
                        placeholder='Select date of competition'
                        type='date'
                    />
                    <InputField
                        label='Post expiry date'
                        placeholder='Select post expiry date'
                        type='date'
                    />
                    <InputField
                        label='Link to apply for Competition'
                        placeholder='Enter URL'
                    />
                    <Dropdown
                        options={this.state.options_skill}
                    />
                </Form.Group>
                <SubmitButton
                    buttonContent='Save'
                />
                <SubmitButton
                    buttonContent='Publish'
                    color='blue'
                />
                {/* <FilterLabel
                    options={this.state.options_skill}    
                    
                /> */}
            </div>
        )
    }
}

export default Competition
