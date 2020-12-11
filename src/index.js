import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = [], action) => {
    if (action.type === 'GET_FEELING') {
      return action.payload;
    }
    return state;
}

const understandingReducer = (state = [], action) => {
    if (action.type === 'GET_UNDERSTANDING') {
      return action.payload;
    }
    return state;
}

const supportReducer = (state = [], action) => {
    if (action.type === 'GET_SUPPORT') {
      return action.payload;
    }
    return state;
}

const commentsReducer = (state = [], action) => {
    if (action.type === 'GET_COMMENTS') {
      return action.payload;
    }
    return state;
}

const reduxState = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
    }),
    applyMiddleware(logger)
);

registerServiceWorker();
ReactDOM.render(<Provider store={reduxState}><App /></Provider>, document.getElementById('root'));
