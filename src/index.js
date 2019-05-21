import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// REDUX 
import ProductReducer from './Redux/reducers/ProductReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]
const store = createStore(
 ProductReducer, composeEnhancers(
  applyMiddleware(...middleware)
 ));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
