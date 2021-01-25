console.log('%c script is connected to your html page!', 'background: #222; color: #bada55');

// grabs the locations on the board
let oneSpot = document.getElementById('one');
let twoSpot = document.getElementById('two');
let threeSpot = document.getElementById('three');
let fourSpot = document.getElementById('four');
let fiveSpot = document.getElementById('five');
let sixSpot = document.getElementById('six');
let sevenSpot = document.getElementById('seven');
let eightSpot = document.getElementById('eight');
let nineSpot = document.getElementById('nine');

// grabs the winner announcement
let winner = document.getElementById('winner');
console.log(winner);

// state, keeps track of what the last player letter
let turn = { letter: 'O' }

// matrix to keep track of all the X's and O's on the table
let matrix = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// function to keep trace of X's and O's
const player = function (letter) {
  if (turn.letter === 'O') {
    turn.letter = 'X';
    console.log(matrix)
    return 'X';

  } else {
    turn.letter = 'O'
    console.log(matrix)
    return 'O'
  }

}

// need a function that fills in X's and O's in the matrix
// the function should check if all spots are filled
// if all spots are filled then return the winner
// may have to create other function that tests the winner

// also side note, need to make sure once a click is none you
// can't change it.

// event listeners when board is clicked
oneSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[0][0] = result;
  }
})

twoSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[0][1] = result;
  }
})

threeSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[0][2] = result;
  }
})

fourSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[1][0] = result;
  }
})

fiveSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[1][1] = result;
  }
})

sixSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[1][2] = result;
  }
})

sevenSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[2][0] = result;
  }
})

eightSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[2][1] = result;
  }
})

nineSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[2][2] = result;
  }
})