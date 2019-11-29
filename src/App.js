import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    likes: 0,
    text: "",
    darkMode: false,
    thangs: []
  }

  dispatch = (type, payload) => {
    const newState = this.reducer(type, payload)
    this.setState(newState)
  }

  reducer = (type, payload) => {
    switch(type){
      case "LIKE":
        return {...this.state, likes: this.state.likes + 1}
      case "DISLIKE":
        return {...this.state, likes: this.state.likes - 1}
      case "DARK_MODE":
        return {...this.state, darkMode: !this.state.darkMode}
      case "HANDLE_CHANGE":
        return {...this.state, text: payload}
      case "PRINT":
        return {...this.state, text: "", thangs: [...this.state.thangs, this.state.text]}
    }
  }

  render(){
    return (
      <div className={"App" + (this.state.darkMode ? " dark" : "")}>
        <button onClick={() => this.dispatch("DARK_MODE")}>Dark mode</button>
        <h3>{this.state.text}</h3>
        <input
          name="text"
          value={this.state.text}
          onChange={(e) => this.dispatch("HANDLE_CHANGE", e.target.value)}/>
        <button onClick={() => this.dispatch("PRINT")}>Add!</button>

        <h4>{this.state.likes} likes</h4>
        <button onClick={() => this.dispatch("LIKE")}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        <button onClick={() => this.dispatch("DISLIKE")}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        {
          this.state.thangs.map(thang => <h1>{thang}</h1>)
        }
      </div>
    );
  }
}

export default App;
