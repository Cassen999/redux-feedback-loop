import React, {Component} from 'react';
import { connect } from 'react-redux';

class Support extends Component {
    render() {
        return(
            <div>
                <h1>Hello from Support</h1>
            </div>
        )
    }
}

export default connect()(Support)