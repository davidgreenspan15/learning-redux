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
  switch(action.type){
    case "LIKE":
      return {...prevState, likes: prevState.likes + 1}
    case "DISLIKE":
      return {...prevState, likes: prevState.likes - 1}
    case "DARK_MODE":
      return {...prevState, darkMode: !prevState.darkMode}
    case "HANDLE_CHANGE":
      return {...prevState, text: action.payload}
    case "PRINT":
      return {...prevState, thangs: [...prevState.thangs, prevState.text], text: ""}
    case "DEPRINT":
      return {
        ...prevState,
        thangs: prevState.thangs.filter(thang => {
          return thang !== action.payload
        })}
    default:
      return prevState
  }

}


const store = createStore(reducer)

store.dispatch({Type: "LIKE"})
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
