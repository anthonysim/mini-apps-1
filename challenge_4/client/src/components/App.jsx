import React, { Component } from 'react';
import Board from './Board.jsx';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTurn: 'X',
      location: {
        0: '?', 1: '?', 2: '?', 3: '?', 4: '?', 5: '?', 6: '?', 7: '?', 8: '?', 9: '?', 10: '?', 11: '?',
        12: '?', 13: '?', 14: '?', 15: '?', 16: '?', 17: '?', 18: '?', 19: '?', 20: '?', 21: '?',
        22: '?', 23: '?', 24: '?', 25: '?', 26: '?', 27: '?', 28: '?', 29: '?', 30: '?', 31: '?',
        32: '?', 33: '?', 34: '?', 35: '?', 36: '?', 37: '?', 38: '?', 39: '?', 40: '?', 41: '?',
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault;

    let item = document.querySelector(`.${e.target.classList[0]}`)
    console.log(item.dataset)

  }

  render() {
    return (
      <div>
        <h1 className="display-4 mt-3 text-center text-info">CONNECT FOUR</h1>
        <br />
        <Board board={this.state.location} select={this.handleClick} />
      </div>
    );
  }
}

export default App;