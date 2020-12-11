import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SubmitReview extends Component {
    // Create local state
    // Pass each reducer as the object values
    // POST request to send local state to database on click

    submitAndGoHome = () => {
        alert('Thank you for submitting your feedback! You will now be redirected to the home page')
        this.props.history.push("/");
    }

    render() {
        return(
            <div>
                <h1>Hello from SubmitReview</h1>
                {/* Render values of state so user can confirm */}
                {/* Confirm submission button will call the 
                function with POST in it and nav back to home screen */}
                <button onClick={this.submitAndGoHome}>Submit Feedback</button>
            </div>
        )
    }
}

export default connect()(withRouter(SubmitReview));
