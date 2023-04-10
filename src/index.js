import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';

import {createStore} from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './Services/Reducers/index'

const store = createStore(rootReducer)

console.log(store)

const root  = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>

        <App  />

    </Provider>,
    root
)