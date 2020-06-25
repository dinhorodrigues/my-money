import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'

import promisse from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/redurces'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const  store =applyMiddleware(multi,thunk,promisse) (createStore)(reducers, devTools)/// para dar tempo no ciclo entre react e redux
ReactDOM.render(
    <Provider store={store}>
        <App />

    </Provider>
,document.getElementById('app')) 