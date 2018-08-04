import React, { Component } from "react";
import "./App.css";
import "./Board.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sudoku Game</h1>
        <Board />
        <div className="buttons">
          <button>Check</button>
          <button>New Game</button>
          <button>Solve</button>
          <button>Restart</button>
        </div>
      </div>
    );
  }
}

export default App;
