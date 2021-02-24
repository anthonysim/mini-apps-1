import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../styles.css'
import colTest from '../../../helpers/colTest.js';
import rowTest from '../../../helpers/rowTest.js';
import leftDiagTest from '../../../helpers/leftDiagTest.js';
import rightDiagTest from '../../../helpers/rightDiagTest.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
      ],
      playerTurn: true,
      winnerFound: false,
      winner: ''
    };
    this.refreshHandler = this.refreshHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  refreshHandler(e) {
    e.preventDefault();

    this.setState(prevState => {
      return {
        location: [
          ['', '', '', '', '', '', ''],
          ['', '', '', '', '', '', ''],
          ['', '', '', '', '', '', ''],
          ['', '', '', '', '', '', ''],
          ['', '', '', '', '', '', ''],
          ['', '', '', '', '', '', ''],
        ],
        winnerFound: false,
        winner: ''
      }
    })
  }

  handleClick(e) {
    e.preventDefault();
    let y = e.target.dataset.y;

    if (y === '0') {
      for (let x = 5; x >= 0; x--) {
        if (this.state.location[x][y] === '') {
          let loc = this.state.location.slice();
          loc[x][y] = this.state.playerTurn ? 'black' : 'red';

          this.setState(prevState => {
            return {
              location: loc,
              playerTurn: !prevState.playerTurn
            }
          })
          break;
        }
      }
    }

    if (y === '1') {
      for (let x = 5; x >= 0; x--) {
        if (this.state.location[x][y] === '') {
          let loc = this.state.location.slice();
          loc[x][y] = this.state.playerTurn ? 'black' : 'red';

          this.setState(prevState => {
            return {
              location: loc,
              playerTurn: !prevState.playerTurn
            }
          })
          break;
        }
      }
    }

    if (y === '2') {
      for (let x = 5; x >= 0; x--) {
        if (this.state.location[x][y] === '') {
          let loc = this.state.location.slice();
          loc[x][y] = this.state.playerTurn ? 'black' : 'red';

          this.setState(prevState => {
            return {
              location: loc,
              playerTurn: !prevState.playerTurn
            }
          })
          break;
        }
      }
    }

    if (y === '3') {
      for (let x = 5; x >= 0; x--) {
        if (this.state.location[x][y] === '') {
          let loc = this.state.location.slice();
          loc[x][y] = this.state.playerTurn ? 'black' : 'red';

          this.setState(prevState => {
            return {
              location: loc,
              playerTurn: !prevState.playerTurn
            }
          })
          break;
        }
      }
    }

    if (y === '4') {
      for (let x = 5; x >= 0; x--) {
        if (this.state.location[x][y] === '') {
          let loc = this.state.location.slice();
          loc[x][y] = this.state.playerTurn ? 'black' : 'red';

          this.setState(prevState => {
            return {
              location: loc,
              playerTurn: !prevState.playerTurn
            }
          })
          break;
        }
      }
    }

    if (y === '5') {
      for (let x = 5; x >= 0; x--) {
        if (this.state.location[x][y] === '') {
          let loc = this.state.location.slice();
          loc[x][y] = this.state.playerTurn ? 'black' : 'red';

          this.setState(prevState => {
            return {
              location: loc,
              playerTurn: !prevState.playerTurn
            }
          })
          break;
        }
      }
    }

    if (y === '6') {
      for (let x = 5; x >= 0; x--) {
        if (this.state.location[x][y] === '') {
          let loc = this.state.location.slice();
          loc[x][y] = this.state.playerTurn ? 'black' : 'red';

          this.setState(prevState => {
            return {
              location: loc,
              playerTurn: !prevState.playerTurn
            }
          })
          break;
        }
      }
    }

    // console.log(this.state.location)
    if (rowTest(this.state.location, ['black', 'black', 'black', 'black'])
      || colTest(this.state.location, ['black', 'black', 'black', 'black'])
      || leftDiagTest(this.state.location, ['black', 'black', 'black', 'black'])
      || rightDiagTest(this.state.location, ['black', 'black', 'black', 'black'])) {
      this.setState({ winnerFound: true, winner: 'black' })
    }

    if (rowTest(this.state.location, ['red', 'red', 'red', 'red'])
      || colTest(this.state.location, ['red', 'red', 'red', 'red'])
      || leftDiagTest(this.state.location, ['red', 'red', 'red', 'red'])
      || rightDiagTest(this.state.location, ['red', 'red', 'red', 'red'])) {
      this.setState({ winnerFound: true, winner: 'red' })
    }
  }

  render() {

    return (
      <div className="container">

        <h1 className="display-4 mt-3 text-center text-info">CONNECT FOUR</h1>

        <table>
          <tbody>
            <tr onClick={this.handleClick}>
              <td data-x={0} data-y={0} className="slot">{this.state.location[0][0]}</td>
              <td data-x={0} data-y={1} className="slot">{this.state.location[0][1]}</td>
              <td data-x={0} data-y={2} className="slot">{this.state.location[0][2]}</td>
              <td data-x={0} data-y={3} className="slot">{this.state.location[0][3]}</td>
              <td data-x={0} data-y={4} className="slot">{this.state.location[0][4]}</td>
              <td data-x={0} data-y={5} className="slot">{this.state.location[0][5]}</td>
              <td data-x={0} data-y={6} className="slot">{this.state.location[0][6]}</td>
            </tr>
            <tr onClick={this.handleClick}>
              <td data-x={1} data-y={0} className="slot">{this.state.location[1][0]}</td>
              <td data-x={1} data-y={1} className="slot">{this.state.location[1][1]}</td>
              <td data-x={1} data-y={2} className="slot">{this.state.location[1][2]}</td>
              <td data-x={1} data-y={3} className="slot">{this.state.location[1][3]}</td>
              <td data-x={1} data-y={4} className="slot">{this.state.location[1][4]}</td>
              <td data-x={1} data-y={5} className="slot">{this.state.location[1][5]}</td>
              <td data-x={1} data-y={6} className="slot">{this.state.location[1][6]}</td>
            </tr>
            <tr onClick={this.handleClick}>
              <td data-x={2} data-y={0} className="slot">{this.state.location[2][0]}</td>
              <td data-x={2} data-y={1} className="slot">{this.state.location[2][1]}</td>
              <td data-x={2} data-y={2} className="slot">{this.state.location[2][2]}</td>
              <td data-x={2} data-y={3} className="slot">{this.state.location[2][3]}</td>
              <td data-x={2} data-y={4} className="slot">{this.state.location[2][4]}</td>
              <td data-x={2} data-y={5} className="slot">{this.state.location[2][5]}</td>
              <td data-x={2} data-y={6} className="slot">{this.state.location[2][6]}</td>
            </tr>
            <tr onClick={this.handleClick}>
              <td data-x={3} data-y={0} className="slot">{this.state.location[3][0]}</td>
              <td data-x={3} data-y={1} className="slot">{this.state.location[3][1]}</td>
              <td data-x={3} data-y={2} className="slot">{this.state.location[3][2]}</td>
              <td data-x={3} data-y={3} className="slot">{this.state.location[3][3]}</td>
              <td data-x={3} data-y={4} className="slot">{this.state.location[3][4]}</td>
              <td data-x={3} data-y={5} className="slot">{this.state.location[3][5]}</td>
              <td data-x={3} data-y={6} className="slot">{this.state.location[3][6]}</td>
            </tr>
            <tr onClick={this.handleClick}>
              <td data-x={4} data-y={0} className="slot">{this.state.location[4][0]}</td>
              <td data-x={4} data-y={1} className="slot">{this.state.location[4][1]}</td>
              <td data-x={4} data-y={2} className="slot">{this.state.location[4][2]}</td>
              <td data-x={4} data-y={3} className="slot">{this.state.location[4][3]}</td>
              <td data-x={4} data-y={4} className="slot">{this.state.location[4][4]}</td>
              <td data-x={4} data-y={5} className="slot">{this.state.location[4][5]}</td>
              <td data-x={4} data-y={6} className="slot">{this.state.location[4][6]}</td>
            </tr>
            <tr onClick={this.handleClick}>
              <td data-x={5} data-y={0} className="slot">{this.state.location[5][0]}</td>
              <td data-x={5} data-y={1} className="slot">{this.state.location[5][1]}</td>
              <td data-x={5} data-y={2} className="slot">{this.state.location[5][2]}</td>
              <td data-x={5} data-y={3} className="slot">{this.state.location[5][3]}</td>
              <td data-x={5} data-y={4} className="slot">{this.state.location[5][4]}</td>
              <td data-x={5} data-y={5} className="slot">{this.state.location[5][5]}</td>
              <td data-x={5} data-y={6} className="slot">{this.state.location[5][6]}</td>
            </tr>
          </tbody>
        </table>
        <div>{this.state.winnerFound && <h1>The winner is {this.state.winner}!!!</h1>}</div>
        <div onClick={this.refreshHandler}>{this.state.winnerFound && <Button>New Game ?</Button>}</div>
      </div>


    );
  }
}

export default App;