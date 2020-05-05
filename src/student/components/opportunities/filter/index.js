import React, { Component } from 'react'
import { DateInput } from  'semantic-ui-calendar-react'
//import 'react-input-range/lib/css/index.css';
import Slider from '@material-ui/core/Slider';
// import Labeltag from "../../../coreContainers/label";
import { Label,Icon, Input } from 'semantic-ui-react'
import FilterLabel from '../../../../coreContainers/filterLabel/index'
import styles from "../opportunities.module.css"
export class FilterOpportunities extends Component {  
    constructor(props) {
    super(props)
    this.state = {
      optionsLocation: [
        { label: 'Bangalore', value: 'location1' },
        { label: 'Delhi', value: 'location2' },
        { label: 'Mumbai', value: 'location3' },
      ],
      optionsWorkType: [
        { label: 'Half-time', value: 'ht' },
        { label: 'Full-time', value: 'ft' },
      ],
      optionsSkills: [
        { label: 'Django', value: 'skill1' },
        { label: 'React', value: 'skill2' },
        { label: 'JavaScript', value: 'skill3' },
      ],
    }
  }
  // tag.push("banglore");   
    render() {
      const tag = [
        "Banglore", "20-30k","full-time" 
      ]
        return (
            <div>
              <div className={styles['filter-container']}>
                <h2 >Filters</h2>
                <div className={styles['filter-element']}>
                  {tag.map((tagItem,index) =><Label key={index}>{tagItem}<Icon name='delete' /></Label>)}
                </div>
                <hr />
                <div className={styles['filter-element']}>
                  <Input
                    icon="search"
                    iconPosition="left"
                    placeholder="Add keyword"
                    className={styles["input-element"]}
                  />
                </div>
                <div className={styles['filter-element']}>
                  <span>Select location</span>
                  <FilterLabel options={this.state.optionsLocation} />
                </div>
                <div className={styles['filter-element']}>
                  <span>Select work type</span>
                  <FilterLabel options={this.state.optionsWorkType} />
                </div>
                <div className={styles['filter-element']}>
                  <span>Select skill set</span>
                  <FilterLabel options={this.state.optionsSkills} />
                </div>
                <div className={styles['filter-element']}>
                  <span>Select date</span>
                  <DateInput 
                    name="date"
                    placeholder="Date"
                    value={this.state.date}
                    iconPosition="right"
                    pickerWidth="100px"
                    // pickerStyle={"width:100%"}
                  />
                </div>
                <div className={styles['filter-element']}>
                  <span>Duration</span>
                  <Slider
                    className={styles.slider}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                  />
                </div>
                <div className={styles['filter-element']}>
                  <span>Stipend</span>
                  <Slider 
                    aria-labelledby="range-slider"
                  />
                </div>
                <div className={styles['filter-element']}>
                  <span>No. of Employees</span>
                  <Slider 
                    aria-labelledby="range-slider"
                  />
                </div>
        </div>
      </div>    
        )
    }
}

export default FilterOpportunities




          