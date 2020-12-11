import React, {Component} from 'react';

class Home extends Component {

    beginFeedback = () => {
        this.props.history.push("/feeling");
    }

    render() {
        return(
            <div>
                <h1>Thank you for taking the time to give us your
                    feedback! To begin, click the button below
                </h1>
                {/* Button to route to feeling */}
                <button onClick={this.beginFeedback}>Begin</button>
            </div>
        )
    }
}

export default Home;
