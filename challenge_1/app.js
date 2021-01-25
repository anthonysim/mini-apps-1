// console.log('%c If you see this in your console, the script is connected to your html page!', 'background: #222; color: #bada55');

// grabs button to reset to new game
let newGameButton = document.getElementById('newGameButton');

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
    return 'X';

  } else {
    turn.letter = 'O'
    return 'O'
  }

  return turn.letter;
}

// need a function that fills in X's and O's in the matrix
// the function should check if all spots are filled
// if all spots are filled then return the winner
// may have to create other function that tests the winner

// also side note, need to make sure once a click is none you
// can't change it.



// event listeners for new game reset button
newGameButton.addEventListener('click', (e) => {
  console.log('game reset!')
})


// event listeners when board is clicked
oneSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);
    e.target.innerText = result;
  }
  console.log('yes')
})

twoSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);
    e.target.innerText = result;
  }
})

threeSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);
    e.target.innerText = result;
  }
})

fourSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);
    e.target.innerText = result;
  }
})

fiveSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);
    e.target.innerText = result;
  }
})

sixSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);
    e.target.innerText = result;
  }
})

sevenSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);
    e.target.innerText = result;
  }
})

eightSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);
    e.target.innerText = result;
  }
})

nineSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);
    e.target.innerText = result;
  }
})