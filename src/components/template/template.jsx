import React, {Component} from 'react';
import { connect } from 'react-redux';

class template extends Component {
    render() {
        return(
            <div>
                <h1>Hello from Template</h1>
            </div>
        )
    }
}

export default connect()(template);