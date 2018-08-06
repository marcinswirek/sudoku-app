import React from "react";
import "./Nav.css";

const Nav = props => {
  return (
    <div className="nav">
      <div className="game-menu">
        <button onClick={() => props.newGameHandler()}>New Game</button>
        <button onClick={() => props.restartNewGame()}>Restart</button>
        <button onClick={() => props.solveSudoku()}>Solve</button>
        <button onClick={() => props.checkSudoku()}>Check</button>
      </div>
      {props.error ? (
        <div>
          <p className="error-msg">{props.error}</p>
        </div>
      ) : null}
      {props.newGameClicked ? (
        <div className="level">
          <h1 className="level-title">Select difficulty level:</h1>
          <button onClick={e => props.startNewGame(e.target.textContent)}>
            Easy
          </button>
          <button onClick={e => props.startNewGame(e.target.textContent)}>
            Medium
          </button>
          <button onClick={e => props.startNewGame(e.target.textContent)}>
            Hard
          </button>
          <button onClick={e => props.startNewGame(e.target.textContent)}>
            Very-hard
          </button>
          <button onClick={e => props.startNewGame(e.target.textContent)}>
            Insane
          </button>
          <button onClick={e => props.startNewGame(e.target.textContent)}>
            Inhuman
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Nav;
