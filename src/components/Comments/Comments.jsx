import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Comments extends Component {
    // state
    // handleChange function to record input data
    // submit function to dispatch local state to feelingReducer
    render() {
        return(
            <div>
                <h1>Hello from Comments</h1>
                {/* Button will dispatch to commentsReducer and nav to submitReview */}
            </div>
        )
    }
}

export default connect()(withRouter(Comments));
