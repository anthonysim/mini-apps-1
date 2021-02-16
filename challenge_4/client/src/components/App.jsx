import React, { Component } from 'react';
import Board from './Board.jsx';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTurn: 'X',
      X_Win: ['X', 'X', 'X', 'X'],
      O_Win: ['O', 'O', 'O', 'O'],
      board: [
        ['?', '?', '?', '?', '?', '?', '?'],
        ['?', '?', '?', '?', '?', '?', '?'],
        ['?', '?', '?', '?', '?', '?', '?'],
        ['?', '?', '?', '?', '?', '?', '?'],
        ['?', '?', '?', '?', '?', '?', '?'],
        ['?', '?', '?', '?', '?', '?', '?']
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('The link was clicked.');
  }

  render() {
    return (
      <div>
        <h1 className="display-4 mt-3 text-center text-info">CONNECT FOUR</h1>
        <br />
        <Board pieces={this.state.board} />
        <button onClick={() => alert("Hello!")}>Say Hello</button>
        <button onClick={this.handleClick}>gdfgfdgfd</button>
      </div>
    );
  }
}

export default App;