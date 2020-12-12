import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Understanding extends Component {
    // state
    state = {
        showRequired: false,
        newUnderstanding: {
            understanding: ''
        }
    }

    // Using componentDidMount for the conditional render
    componentDidMount() {
        this.setState({
            showRequired: true
        })
    }

    // handleChange function to record input data
    handleChange = (propertyName, event) => {
        this.setState({
            showRequired: false
        })
        this.setState({
            newUnderstanding: {
                ...this.state.newUnderstanding,
                [propertyName]: event.target.value
            }
        })
        console.log(this.state)
    }
    // submit function to dispatch local state to understandingReducer
    // Validate form to require an input
    goToSupport = (event) => {
        event.preventDefault();
        if (this.state === ''){
            // Normally I would put an alert here but Chrome seems
            // to have a built in validation alert that I don't think
            // I can change
            // alert('Please enter a number between 1 and 10')
        }
        else {
            this.props.dispatch({type:'GET_UNDERSTANDING', payload: this.state.newUnderstanding})
            this.props.history.push("/support");
        }
    }

    render() {
        return(
        <div>
            <h1>How well are you understanding the content?</h1>
            <p className='plsEnterNum'>(Please enter a number between 1 and 10)</p>
            <form onSubmit={this.goToSupport}>
                <label>How well are you understanding? </label>
                <input required
                    placeholder="*"
                    value={this.state.newUnderstanding.understanding}
                    onChange={(event) => this.handleChange('understanding', event)}
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

export default connect()(withRouter(Understanding));
