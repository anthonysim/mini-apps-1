// erase later
let board = [
  ['O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'X', 'X', 'X', 'X'],
]

// rowTests
let rowTest = function (table, test) {
  for (let row of table) {
    for (let i = 0; i < row.length / 2; i++) {
      let slicedArr = row.slice(i, 4 + i);

      // replace x, x, x, x with the test for winner in state
      if (JSON.stringify(["X", "X", "X", "X"]) === JSON.stringify(slicedArr)) {
        return true;
      }
    }
  }
  return false;
}

console.log(rowTest(board))

// colTest
let colTest = function (table, test) {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 3; j++) {
      let slicedArr = [table[j][i], table[j + 1][i], table[j + 2][i], table[j + 3][i]];
      // replace x, x, x, x with the test for winner in state
      console.log(JSON.stringify(['X', 'X', 'X', 'X']) === JSON.stringify(slicedArr))
    }
  }
}


console.log(colTest(board))