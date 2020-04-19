import React, { Component } from 'react'
import CreatePostSidebar from './sidebar'
import Internship from './internship'

export class CreatePost extends Component {
    render() {
        return (
            <>
                <div>
                <CreatePostSidebar />
                </div>
                <div>
                    <Internship />
                </div>
            </>
        )
    }
}

export default CreatePost
