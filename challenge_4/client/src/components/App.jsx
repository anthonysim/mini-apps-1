import React, { Component } from 'react';
import Board from './Board.jsx';
import { Button } from 'react-bootstrap';
import { one, two, three, six } from '../../../helpers/selectors';
import '../styles.css'

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
      playerTurn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    // let x = e.target.dataset.x;
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

    // if (y === '0' && this.state.location[5][y] === '') {
    //   let loc = this.state.location.slice();
    //   loc[5][y] = this.state.playerTurn ? 'black' : 'red';

    //   this.setState(prevState => {
    //     return {
    //       location: loc,
    //       playerTurn: !prevState.playerTurn
    //     }
    //   })
    // }
    console.log(this.state.location)
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

      </div>
    );
  }
}

export default App;