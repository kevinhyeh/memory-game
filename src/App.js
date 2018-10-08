import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import characters from './characters.json'

class App extends Component {

  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-bg">
          <div className="container">
          <p>Count: {this.state.count}</p>
          {characters.map(x => 
            <img onClick={this.handleIncrement} src={x.image} alt={x.name} />
          )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
