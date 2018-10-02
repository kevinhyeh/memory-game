import React, { Component } from "react";
import Characters from "./components/Characters";
import characters from "./characters.json";

class App extends Component {
    state = {
        characters
    };

  render() {
  return (
      {this.state.characters.map(family => (
        <Characters
        name={family.name}
        image={family.image}
        />
        ))}
    );
  }
}

export default App;
