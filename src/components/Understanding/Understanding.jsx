import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Understanding extends Component {
    // state
    // handleChange function to record input data
    // submit function to dispatch local state to understandingReducer
    render() {
        return(
            <div>
                <h1>Hello from Understanding</h1>
                {/* Button press will send dispatch and nav to support*/}
            </div>
        )
    }
}

export default connect()(withRouter(Understanding));
