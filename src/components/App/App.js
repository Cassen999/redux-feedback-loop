import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Home from '../Home/Home';
import SubmitReview from '../SubmitReview/SubmitReview';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/feeling" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/submitReview" component={SubmitReview} />
        </Router>
      </div>
    );
  }
}

export default App;
