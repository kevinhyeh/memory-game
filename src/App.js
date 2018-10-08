import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import characters from './characters.json'

class App extends Component {

  state = {
    characters,
    topScore: 0,
    score: 0
  };

  handleIncrement = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      data: this.shuffleCharacters(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  shuffleCharacters = data => {
    let a = characters.length - 1;
    while (a > 0) {
      const b = Math.floor(Math.random() * (a + 1));
      const newChar = characters[a];
      characters[a] = characters[b];
      characters[b] = newChar;
      a--;
    }
    return data;
  };

  render() {
    return (
      <div className="App">
        <header className="App-bg">
          <div className="container">
          <p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
          {this.state.characters.map(x => 
            <img onClick={this.handleIncrement} src={x.image} alt={x.name} />
          )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
