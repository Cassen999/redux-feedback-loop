import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Feeling extends Component {
    // state
    // handleChange function to record input data
    // submit function to dispatch local state to feelingReducer
    render() {
        return(
            <div>
                <h1>Hello from Feeling</h1>
                {/* Button will send dispatch and route to Understanding */}
            </div>
        )
    }
}

export default connect()(Feeling);
