import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Support extends Component {
    // state
    // handleChange function to record input data
    // submit function to dispatch local state to supportReducer
    render() {
        return(
            <div>
                <h1>Hello from Support</h1>
                {/* Button will dispatch to reducer and nav to comments */}
            </div>
        )
    }
}

export default connect()(withRouter(Support));
