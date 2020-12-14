import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

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
                <Button 
                    onClick={this.beginFeedback}
                    variant="contained" 
                    color="primary">
                    Begin
                </Button>
            </div>
        )
    }
}

export default Home;
