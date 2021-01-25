// STATE
let turn = { letter: 'O', prevLetter: 'X', count: 0 }

let matrix = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// DOM GRABS TABLE
let table = document.getElementById('table');

// DOM GRABS WINNER ANNOUNCEMENT
let winner = document.getElementById('winner');

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
// need to initiate if there are 5 or more X + Os combined total




// FUNC THAT RESETS GAME
const gameReset = function (arr) {
  for (let spot of arr) {
    spot.innerText = ''
  }
}


// FUNC SWITCHES B/T X's AND O's
const player = function (turn) {
  if (turn.letter === 'O') {
    turn.prevLetter = 'X'
    turn.letter = 'X';
    console.log(matrix)
    return 'X';

  } else {
    turn.prevLetter = 'O'
    turn.letter = 'O'
    console.log(matrix)
    return 'O'
  }
}

// FUNC DETERMINE WINNER!!!!
// Tests all rows for 3 way match
const rowTest = function (arr) {
  for (let set of arr) {
    let X = set.every((item) => item === 'X');
    let O = set.every((item) => item === 'O');

    if (X) {
      return 'X';
    }
    if (O) {
      return 'O';
    }
  }
  return false;
};

// Tests diagonal from left to right

table.addEventListener('click', () => {
  let row = rowTest(matrix);
  if (row) {
    let html = `<h1 id="announcement">Player ${turn.prevLetter} is the winner!</h1>`;
    winner.innerHTML += html;
  }
})


// NEW GAME RESET
button.addEventListener('click', () => {
  matrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  let spots = [oneSpot, twoSpot, threeSpot, fourSpot, fiveSpot, sixSpot, sevenSpot, eightSpot, nineSpot];
  gameReset(spots);
  winner.innerHTML = '';
  turn.letter = 'O'
  turn.count = 0;
  console.log(matrix);
})


// EVENT LISTENERS CLICKING ON THE TABLE
oneSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[0][0] = result;
    turn.count += 1;
  }
})

twoSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[0][1] = result;
    turn.count += 1;
  }
})

threeSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[0][2] = result;
    turn.count += 1;
  }
})

fourSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[1][0] = result;
    turn.count += 1;
  }
})

fiveSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[1][1] = result;
    turn.count += 1;
  }
})

sixSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[1][2] = result;
    turn.count += 1;
  }
})

sevenSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[2][0] = result;
    turn.count += 1;
  }

})

eightSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[2][1] = result;
    turn.count += 1;
  }
})

nineSpot.addEventListener('click', (e) => {
  if (e.target.innerText === '') {
    let result = player(turn);

    e.target.innerText = result;
    matrix[2][2] = result;
    turn.count += 1;
  }
})


// // tests 3 items
// const threeSetTest = function (arr, letter) {
//   let result = arr.every((item) => item === letter);
//   return result;
// };



// // diagonal test left to right
// const diagLeftToRightTest = function (arr, letter) {
//   let col = 0;
//   let diagLeftToRight = [];

//   // diag left to right
//   for (let row = 0; row < matrix.length; row++) {
//     let rows = matrix[row][col];

//     diagLeftToRight.push(rows);
//     col += 1;
//   }
//   return threeSetTest(diagLeftToRight, letter) ? true : false;
// };

// // diagonal test right to left
// const diagRightToLeftTest = function (arr, letter) {
//   // diag right to left
//   let reverseCol = matrix.length - 1;
//   let diagRightToLeft = [];

//   for (let row = 0; row < matrix.length; row++) {
//     let rows = matrix[row][reverseCol];

//     diagRightToLeft.push(rows);
//     reverseCol -= 1;
//   }
//   return threeSetTest(diagRightToLeft, letter) ? true : false;
// };

// // where all the test originate from
// const gameWinner = function (arr, letter, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     let rows = arr[i];

//     if (callback(rows, letter) === false) {
//       continue;
//     }
//     return `Player ${letter} is the winner!`;
//   }
//   return false;
// };








