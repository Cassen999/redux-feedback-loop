import React, {Component} from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
    // state
    state = {
        showRequired: false,
        newFeeling: {
            feeling: ''
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
            newFeeling: {
                ...this.state.newFeeling,
                [propertyName]: event.target.value
            }
        })
        console.log(this.state)
    }

    // submit function to dispatch local state to feelingReducer
    // Validate form to require an input
    goToUnderstanding = (event) => {
        event.preventDefault();
        if (this.state === '') {
            // Normally I would put an alert here but Chrome seems
            // to have a built in validation alert that I don't think
            // I can change
            // alert('Please enter a number between 1 and 10')
        }
        else {
            this.props.dispatch({type:'GET_FEELING', payload: this.state.newFeeling})
            this.props.history.push("/understanding");
        }
    }
    
    render() {
        return(
            <div>
                <h1>How are you feeling today?</h1>
                <p className='plsEnterNum'>(Please enter a number between 1 and 10)</p>
                <form onSubmit={this.goToUnderstanding}>
                    <label>Feeling? </label>
                    <input required
                        placeholder="*"
                        value={this.state.newFeeling.feeling}
                        onChange={(event) => this.handleChange('feeling', event)}
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

export default connect()(Feeling);
