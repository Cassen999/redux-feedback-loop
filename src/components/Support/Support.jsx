import React, {Component} from 'react';
import { connect } from 'react-redux';

class Support extends Component {
    // state
    state = {
        showRequired: false,
        newSupport: {
            support: ''
        }
    }

     // Using componentDidMount for the conditional render
     componentDidMount() {
        this.setState({
            showRequired: true
        })
    }

    // handleChange function to record input data
    // Added a conditional to render a required field text if 
    // input is empty
    handleChange = (propertyName, event) => {
        this.setState({
            showRequired: false
        })
        this.setState({
            newSupport: {
                ...this.state.newSupport,
                [propertyName]: event.target.value
            }
        })
        console.log(this.state)
    }

    // submit function to dispatch local state to supportReducer
    // Validate form to require an input
    goToComments = (event) => {
        event.preventDefault();
        if (this.state === '') {
            // Normally I would put an alert here but Chrome seems
            // to have a built in validation alert that I don't think
            // I can change
            // alert('Please enter a number between 1 and 10')
        }
        else {
            this.props.dispatch({type:'GET_SUPPORT', payload: this.state.newSupport})
            this.props.history.push("/comments");
        }
    }

    render() {
        return(
            <div>
                <h1>How well do you feel you are being supported?</h1>
                <p className='plsEnterNum'>(Please enter a number between 1 and 10)</p>
                <form onSubmit={this.goToComments}>
                    <label>How supported do you feel? </label>
                    <input required
                        placeholder="*"
                        value={this.state.newSupport.support}
                        onChange={(event) => this.handleChange('support', event)}
                        type="number"
                        min="1"
                        max="10"></input>
                    {/* Button will send dispatch and route to Understanding */}
                    <button type="submit">Next</button>
                    <p className="fieldRequired">{this.state.showRequired ? '*This field is required' : ''}</p>
                </form>
            </div>
        )
    }
}

export default connect()(Support);
