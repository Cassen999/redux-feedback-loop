import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class SubmitReview extends Component {
    // Create local state
    state = {
        newFeedback: {
            feeling: this.props.reduxState.feelingReducer.feeling,
            understanding: this.props.reduxState.understandingReducer.understanding,
            support: this.props.reduxState.supportReducer.support,
            comments: this.props.reduxState.commentsReducer.comment
        }
    }
    // Pass each reducer as the object values
    // POST request to send local state to database on click

    submitAndGoHome = (event) => {
        alert('Thank you for submitting your feedback! You will now be redirected to the home page')
        event.preventDefault();
        console.log(`Adding book`, this.state.newFeedback);
        // TODO - axios request to server to add book
        axios.post('/feedback', this.state.newFeedback)
        .then((response) => {
            console.log('back from POST in App:', response.data)
            this.props.history.push("/");
        })
        .catch((error) => {
          console.log(error);
          alert('ERROR from POST in App')
        })
    }

    render() {
        return(
            <div>
                {/* getting for submission cancelled becuase the form is not connected error */}
                <h1>Please Review Your Feedback</h1>
                {/* Render values of state so user can confirm */}
                {/* Confirm submission button will call the 
                function with POST in it and nav back to home screen */}
                <p className="reviewQuestion">How are you feeling today?</p>
                <p className="reviewScore">{this.props.reduxState.feelingReducer.feeling}</p>
                <p className="reviewQuestion">How well are you understanding the content?</p>
                <p className="reviewScore">{this.props.reduxState.understandingReducer.understanding}</p>
                <p className="reviewQuestion">How well do you feel you are being supported?</p>
                <p className="reviewScore">{this.props.reduxState.supportReducer.support}</p>
                <p className="reviewQuestion">Do you have any comments for us?</p>
                <p className="reviewScore">{this.props.reduxState.commentsReducer.comment}</p>
                <h3>If everything looks good click the button below to submit your feedback</h3>
                <button type="button" onClick={this.submitAndGoHome}>Submit Feedback</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(SubmitReview);