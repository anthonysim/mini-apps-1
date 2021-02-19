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

    let x = e.target.dataset.x;
    let y = e.target.dataset.y;
    console.log(x, y)

    if (y === '0') {
      let x = 5;
      while (x >= 0) {
        let loc = this.state.location.slice();
        loc[x][y] = this.state.playerTurn ? 'black' : 'red';

        this.setState(prevState => {
          return {
            location: loc,
            playerTurn: !prevState.playerTurn
          }
        })
        x -= 1;
      }
    }
    //   if (this.state.location[5][y] === '') {
    //     let loc = this.state.location.slice();
    //     loc[5][y] = this.state.playerTurn ? 'black' : 'red';

    //     this.setState(prevState => {
    //       return {
    //         location: loc,
    //         playerTurn: !prevState.playerTurn
    //       }
    //     })
    //   }
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
              <td data-x={0} data-y={0} className="slot" ></td>
              <td data-x={0} data-y={1} className="slot"></td>
              <td data-x={0} data-y={2} className="slot"></td>
              <td data-x={0} data-y={3} className="slot"></td>
              <td data-x={0} data-y={4} className="slot"></td>
              <td data-x={0} data-y={5} className="slot"></td>
              <td data-x={0} data-y={6} className="slot"></td>
            </tr>
            <tr onClick={this.handleClick}>
              <td data-x={1} data-y={0} className="slot" ></td>
              <td data-x={1} data-y={1} className="slot"></td>
              <td data-x={1} data-y={2} className="slot"></td>
              <td data-x={1} data-y={3} className="slot"></td>
              <td data-x={1} data-y={4} className="slot"></td>
              <td data-x={1} data-y={5} className="slot"></td>
              <td data-x={1} data-y={6} className="slot"></td>
            </tr>
            <tr onClick={this.handleClick}>
              <td data-x={2} data-y={0} className="slot" ></td>
              <td data-x={2} data-y={1} className="slot"></td>
              <td data-x={2} data-y={2} className="slot"></td>
              <td data-x={2} data-y={3} className="slot"></td>
              <td data-x={2} data-y={4} className="slot"></td>
              <td data-x={2} data-y={5} className="slot"></td>
              <td data-x={2} data-y={6} className="slot"></td>
            </tr>
            <tr onClick={this.handleClick}>
              <td data-x={3} data-y={0} className="slot" ></td>
              <td data-x={3} data-y={1} className="slot"></td>
              <td data-x={3} data-y={2} className="slot"></td>
              <td data-x={3} data-y={3} className="slot"></td>
              <td data-x={3} data-y={4} className="slot"></td>
              <td data-x={3} data-y={5} className="slot"></td>
              <td data-x={3} data-y={6} className="slot"></td>
            </tr>
            <tr onClick={this.handleClick}>
              <td data-x={4} data-y={0} className="slot" ></td>
              <td data-x={4} data-y={1} className="slot"></td>
              <td data-x={4} data-y={2} className="slot"></td>
              <td data-x={4} data-y={3} className="slot"></td>
              <td data-x={4} data-y={4} className="slot"></td>
              <td data-x={4} data-y={5} className="slot"></td>
              <td data-x={4} data-y={6} className="slot"></td>
            </tr>
            <tr onClick={this.handleClick}>
              <td data-x={5} data-y={0} className="slot" ></td>
              <td data-x={5} data-y={1} className="slot"></td>
              <td data-x={5} data-y={2} className="slot"></td>
              <td data-x={5} data-y={3} className="slot"></td>
              <td data-x={5} data-y={4} className="slot"></td>
              <td data-x={5} data-y={5} className="slot"></td>
              <td data-x={5} data-y={6} className="slot"></td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;