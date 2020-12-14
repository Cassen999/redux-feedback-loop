import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
  });

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
                <form>
                    <TextField className="commentBox"
                        label="Write comments here"
                        multiline
                        rowsMax="4"
                        value={this.state.newComment.comment}
                        onChange={(event) => this.handleChange('comment', event)}
                        type="text"
                        maxLength="300"></TextField>
                    {/* Button will send dispatch and route to SubmitReview */}
                </form>
                <Button className="commNext" 
                    onClick={this.goToSubmitReview} 
                    variant="contained" 
                    color="primary">
                    Next
                    </Button>
            </div>
        )
    }
}

export default connect(withStyles(styles))(Comments);
