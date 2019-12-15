import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {like, dislike, toggleDark, handleChange, hold} from './action.js'
class App extends React.Component {

  state = {
      pokeID: 1
    }

  componentDidMount(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokeID}`)
   .then(res => res.json())
   .then(data => this.props.hold(data.sprites.front_default))
  }

  next = () => {
     this.setState({
       pokeID: this.state.pokeID + 1 
     }, () => this.props.choosePokemon(this.state.pokeID))
   }

  render(){
    return (
      <div className={"App" + (this.props.darkMode ? " dark" : "")}>
        <button onClick={this.props.toggleDark}>Dark mode</button>
        <img src={this.props.pokimon}/>
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
    likes: state.key.likes,
    darkMode: state.key.darkMode,
    text: state.key.text,
    thangs: state.key.thangs
    pokimon: state.key.pokimon
  }
}




export default connect(mapStateToProps,
  {
    like,
    dislike,
    toggleDark,
    handleChange,
    hold
  })(App) ;
