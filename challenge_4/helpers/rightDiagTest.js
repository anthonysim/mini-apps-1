const rightDiagTest = function (board, test) {
  if (board[3][0] && board[2][1] && board[1][2] && board[0][3]) {
    return true;
  }

  if ((board[4][0] && board[3][1] && board[2][2] && board[1][3])
    || (board[3][1] && board[2][2] && board[1][3] && board[0][4])) {
    return true;
  }

  if ((board[5][0] && board[4][1] && board[3][2] && board[2][3])
    || (board[4][1] && board[3][2] && board[2][3] && board[1][4])
    || (board[3][2] && board[2][3] && board[1][4] && board[0][5])) {
    return true;
  }

  if ((board[5][1] && board[4][2] && board[3][3] && board[2][4])
    || (board[4][2] && board[3][3] && board[2][4] && board[1][5])
    || (board[3][3] && board[2][4] && board[1][5] && board[0][6])) {
    return true;
  }

  if ((board[5][2] && board[4][3] && board[3][4] && board[2][5])
    || (board[4][3] && board[3][4] && board[2][5] && board[1][6])) {
    return true;
  }

  if (board[5][3] && board[4][4] && board[3][5] && board[2][6]) {
    return true;
  }

  return false;
}

export default rightDiagTest;



// console.log(board[5][1])
// console.log(board[4][2])
// console.log(board[3][3])
// console.log(board[2][4])
// console.log(board[1][5])
// console.log(board[0][6])

// console.log(board[5][2])
// console.log(board[4][3])
// console.log(board[3][4])
// console.log(board[2][5])
// console.log(board[1][6])

// console.log(board[5][3])
// console.log(board[4][4])
// console.log(board[3][5])
// console.log(board[2][6])