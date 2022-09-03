import './App.css';
import React from 'react';

class StarWars extends React.Component{
  constructor(){
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films:[],
      img: null,
    }
  }

  randomizeCharacter(){
    const randNum = Math.ceil(Math.random()*88)
    const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randNum}.json`
  
    fetch(url)
      .then(request => request.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          img: data.image,
          loadedCharacter: true,
        })
      })
    
  }

  render(){
    return(
      <div>
        <h1>Star Wars API</h1>
        {
        this.state.loadedCharacter &&
        <div>
          <img src={this.state.img} alt=''></img>
          <h2>{this.state.name}</h2>
          <p>{this.state.height} cm</p>
          <p><a href={this.state.homeworld} target='blank'> Homeworld </a></p>
        </div>
      }
        <button className='btn' onClick={() => this.randomizeCharacter() }>Randomize a new character</button>
      </div>
    )}
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars/>
      </header>
    </div>
  );
}

export default App;
