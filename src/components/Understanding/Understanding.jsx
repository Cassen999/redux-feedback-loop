import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Understanding extends Component {
    // state
    // handleChange function to record input data
    // submit function to dispatch local state to understandingReducer

    goToSupport = () => {
        this.props.history.push("/support");
    }

    render() {
        return(
            <div>
                <h1>Hello from Understanding</h1>
                {/* Button press will send dispatch and nav to support*/}
                <button onClick={this.goToSupport}>Next</button>
            </div>
        )
    }
}

export default connect()(withRouter(Understanding));
