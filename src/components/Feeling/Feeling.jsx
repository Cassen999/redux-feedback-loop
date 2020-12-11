import React, {Component} from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
    // state
    // handleChange function to record input data
    // submit function to dispatch local state to feelingReducer
    goToUnderstanding = () => {
        this.props.history.push("/understanding");
    }
    
    render() {
        return(
            <div>
                <h1>Hello from Feeling</h1>
                {/* Button will send dispatch and route to Understanding */}
                <button onClick={this.goToUnderstanding}>Next</button>
            </div>
        )
    }
}

export default connect()(Feeling);
