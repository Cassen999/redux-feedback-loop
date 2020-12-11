import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Comments extends Component {
    // state
    // handleChange function to record input data
    // submit function to dispatch local state to feelingReducer

    goToSubmitReview = () => {
        this.props.history.push("/submitReview");
    }

    render() {
        return(
            <div>
                <h1>Hello from Comments</h1>
                {/* Button will dispatch to commentsReducer and nav to submitReview */}
                <button onClick={this.goToSubmitReview}>Next</button>
            </div>
        )
    }
}

export default connect()(withRouter(Comments));
