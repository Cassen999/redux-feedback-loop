import React, {Component} from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    render() {
        return(
            <div>
                <h1>Hello from Understanding</h1>
            </div>
        )
    }
}

export default connect()(Understanding);