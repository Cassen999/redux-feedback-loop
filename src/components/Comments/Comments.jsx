import React, {Component} from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    // state
    state = {
        newComment: {
            comment: ''
        }
    }
    // handleChange function to record input data
    // No conditional because input is not required
    handleChange = (propertyName, event) => {
        this.setState({
            newComment: {
                ...this.state.newComment,
                [propertyName]: event.target.value
            }
        })
        console.log(this.state)
    }

    // submit function to dispatch local state to feelingReducer
    goToSubmitReview = () => {
        this.props.dispatch({type:'GET_COMMENTS', payload: this.state.newComment})
        this.props.history.push("/submitReview");
    }

    render() {
        return(
            <div>
                <h1>Do you have any comments for us?</h1>
                <form onSubmit={this.goToSubmitReview}>
                    <textarea className="commentBox"
                        placeholder="Write comments here"
                        value={this.state.newComment.comment}
                        onChange={(event) => this.handleChange('comment', event)}
                        type="text"
                        maxLength="300"></textarea>
                    {/* Button will send dispatch and route to SubmitReview */}
                    <button className="commNext" type="submit">Next</button>
                </form>
            </div>
        )
    }
}

export default connect()(Comments);
