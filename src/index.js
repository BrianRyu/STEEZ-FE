import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// REDUX 
import reducer from './Redux/reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

