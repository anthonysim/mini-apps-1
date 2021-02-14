import React, { Component } from 'react';
import Board from './Board.jsx';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1 className="display-4 mt-3 text-center text-info">CONNECT FOUR</h1>
        <br />
        <Board />
      </div>
    )
  }
}

export default App;