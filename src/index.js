import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// REDUX 
import ProductReducer from './Redux/reducers/ProductReducer'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

let store = createStore(ProductReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

