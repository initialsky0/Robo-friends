import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// Anything not export by default requires bracket
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { searchRobots, getRobots } from './reducer';

// const logger = createLogger();
// logging middleware

const rootReducer = combineReducers({ searchRobots, getRobots });
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
