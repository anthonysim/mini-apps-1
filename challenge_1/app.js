// STATE
let turn = { letter: 'O' }

let matrix = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// DOM GRABS SPOTS ON THE TABLE
let oneSpot = document.getElementById('one');
let twoSpot = document.getElementById('two');
let threeSpot = document.getElementById('three');
let fourSpot = document.getElementById('four');
let fiveSpot = document.getElementById('five');
let sixSpot = document.getElementById('six');
let sevenSpot = document.getElementById('seven');
let eightSpot = document.getElementById('eight');
let nineSpot = document.getElementById('nine');

// DOM GRABS NEW GAME RESET BUTTON
let button = document.getElementById('button');


// Function to determine winner!!!!!
// grabs the winner announcement
// let winner = document.getElementById('winner');

// let html = `<h1 class="display-2 text-center text-secondary">
// Player X is the winner!
// </h1>`
// winner.innerHTML += html;


// FUNC THAT RESETS GAME
const gameReset = function (arr) {
  for (let spot of arr) {
    spot.innerText = ''
  }
}


// NEW GAME RESET
button.addEventListener('click', () => {
  matrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  let spots = [oneSpot, twoSpot, threeSpot, fourSpot, fiveSpot, sixSpot, sevenSpot, eightSpot, nineSpot];

  gameReset(spots);

  let winner = document.getElementById('winner');
  winner.innerHTML = '';

  console.log(matrix)
})


// FUNC SWITCHES B/T X's AND O's
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


// EVENT LISTENERS CLICKING ON THE TABLE
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
