import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import App from './App';

// Global Styles
import './styles/animations.css';
import './styles/fonts.css';
import './styles/index.css';
import './styles/media-queries.css';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


ReactDOM.render(
  
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
