import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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
        <Home />
        <Route path='/' component={Home}></Route>
        <Route path='/feeling' component={Feeling}></Route>
        <Route path='/understanding' component={Understanding}></Route>
        <Route path='/support' component={Support}></Route>
        <Route path='/comments' component={Comments}></Route>
        <Route path='/submitReview' component={SubmitReview}></Route>
      </div>
    );
  }
}

export default App;
