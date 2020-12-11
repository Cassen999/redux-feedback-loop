import React, {Component} from 'react';
import { connect } from 'react-redux';

class SubmitReview extends Component {
    render() {
        return(
            <div>
                <h1>Hello from SubmitReview</h1>
            </div>
        )
    }
}

export default connect()(SubmitReview);