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

  handleClick(e) {
    e.preventDefault;
    console.log(e.target)
    // console.log(this.state.playerTurn ? 'O' : 'X');
  }

  render() {
    return (
      <div>
        <h1 className="display-4 mt-3 text-center text-info">CONNECT FOUR</h1>
        <br />
        <Board pieces={this.state.board} select={this.handleClick} />
      </div>
    );
  }
}

export default App;