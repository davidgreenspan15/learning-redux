import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux'

const defaultState ={
  likes: 0,
  text: "",
  darkMode: false,
  thangs: []
}

function reducer (prevState=defaultState, action){
  return prevState
}


const store = createStore(reducer)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
