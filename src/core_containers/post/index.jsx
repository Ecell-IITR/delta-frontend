import React, { Component } from 'react'
import { BrowserRouter as Router,  Route, Link } from 'react-router-dom';
import {Container,Header,Checkbox,Divider,Dropdown} from 'semantic-ui-react'
import "../css/post.css"
import ImageIndex from '../image'


export default class Post extends Component {
  render() 
  {  let {designation,stipend,duration,imginfo}=this.props
       let info =['9 Applicants','Bangalore','2 weeks','2 months']
    return (
      <div className="post">
          <Container>
            <div className="div1">
                <div className="div1-1">
                    <Header className="header1" as='h1'>{designation+' '}</Header>
                    <Header className="header2" as='h1'>{stipend+'.'+duration}</Header>
                </div>
                <div className="div1-2">
                    <ImageIndex/>
                </div>
            </div>
            <div className="div2">
                <ul>
                    {info.map(a=>(
                        <li><Checkbox className="checkbox" label={a}/></li>
                    ))}
                    
                </ul> 
            </div>
            <Divider/>
            <div className="div3">
                <div className="div3-1">
                    <Router>
                        <ul>
                            <li><Link to={'/Edit'}>Edit</Link></li>
                            <li><Link to={'/Repost'}>Repost</Link></li>
                        </ul>
                        
                    </Router>
                </div>
                <div className="div3-2">
                <Dropdown text='View More'>
                    <Dropdown.Menu>
                    <Dropdown.Item text='New' />
                    <Dropdown.Item text='Open...' description='ctrl + o' />
                    <Dropdown.Item text='Save as...' description='ctrl + s' />
                    <Dropdown.Item text='Rename' description='ctrl + r' />
                    </Dropdown.Menu>
                </Dropdown>      
                </div>
            </div>
          </Container>
      </div>
    )
  }
}
