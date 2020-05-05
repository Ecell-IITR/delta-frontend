import React, { Component } from 'react'
import FilterLabel from '../../../coreContainers/filterLabel/index'
import styles from "./opportunities.module.css"
import SideBarRow from '../../../coreContainers/sideBarRow'
import { DateInput } from  'semantic-ui-calendar-react'
import Slider from '@material-ui/core/Slider';
import { Label,Icon, Input } from 'semantic-ui-react'
import { Switch, Route, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import FilterOpportunities from './filter'
// import { KeyboardDatePicker, DatePicker } from "@material-ui/pickers";

export default class Opportunites extends Component {

  render() {
    const { match } = this.props
    return (
      <div className={styles['opportunities-container']}>
        <div className={styles['side-container']}>
          <div className={styles['opportunities-sidebar']}>
            <NavLink to={"/opportunities/applied-post"} activeClassName={styles.active}>
              <SideBarRow Icon="check circle" Title="Applied Post" />
            </NavLink>
            <NavLink to={"/opportunities/bookmark"} activeClassName={styles.active}>
              <SideBarRow Icon="bookmark" Title="Bookmarks" />
            </NavLink>
            <NavLink to={"/opportunities/companies"} activeClassName={styles.active}>
              <SideBarRow Icon="building" Title="Companies" />
            </NavLink>
          </div>
          <FilterOpportunities/>
          <Switch>
            <Route
              exact
              // path={`${match.path}/applied-posts`}
              component={React.lazy(() => import('./posts'))}
            />
          </Switch>
        
      </div>
    </div>
    )
  }
}

Opportunites.propTypes = {
  match: PropTypes.object
}
