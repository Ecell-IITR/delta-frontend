import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducer from '../reducers/index'
const store = createStore(reducer);
class CompanyIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Provider store={store}></Provider>
            </div>
         );
    }
}
 
export default CompanyIndex;