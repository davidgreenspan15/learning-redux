import React from 'react';
import './App.css';
import {connect} from 'react-redux'
class App extends React.Component {




  render(){
    return (
      <div className={"App" + (this.props.darkMode ? " dark" : "")}>
        <button onClick={this.props.toggleDark}>Dark mode</button>
        <h3>{this.props.text}</h3>
        <input
          name="text"
          value={this.props.text}
          onChange={(e) => this.props.handleChange(e.target.value)}/>
        <button onClick={this.props.print}>Add!</button>

        <h4>{this.props.likes} likes</h4>
        <button onClick={this.props.like}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        <button onClick={this.props.dislike}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        {
          this.props.thangs.map(thang => <h1>{thang}</h1>)
        }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    likes: state.likes,
    darkMode: state.darkMode,
    text: state.text,
    thangs: state.thangs
  }
}

function mapDispatchToProps(dispatch){
  return{
    like: ()=>{
      dispatch({type: "LIKE"})
    },
    dislike: ()=>{
      dispatch({type: "DISLIKE"})
    },
    toggleDark: ()=>{
      dispatch({type: "DARK_MODE"})
    },
    handleChange: (text)=>{
      dispatch({type: "HANDLE_CHANGE", payload: text})
    },
    print: ()=>{
      dispatch({type: "PRINT"})
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App) ;
