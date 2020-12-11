import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SubmitReview extends Component {
    // Create local state
    // Pass each reducer as the object values
    // POST request to send local state to database on click
    render() {
        return(
            <div>
                <h1>Hello from SubmitReview</h1>
                {/* Render values of state so user can confirm */}
                {/* Confirm submission button will call the 
                function with POST in it and nav back to home screen */}
            </div>
        )
    }
}

export default connect()(withRouter(SubmitReview));
