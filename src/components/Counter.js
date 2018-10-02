import React from "react";
import Characters from "./Characters";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
        </div>
        <Characters 
        count={this.state.count}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;