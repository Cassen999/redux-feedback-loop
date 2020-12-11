import React, {Component} from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
    render() {
        return(
            <div>
                <h1>Hello from Feeling</h1>
            </div>
        )
    }
}

export default connect()(Feeling);