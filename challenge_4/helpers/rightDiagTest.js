const rightDiagTest = function (table, test) {
  if (table[3][0] && table[2][1] && table[1][2] && table[0][3]) {
    return true;
  }

  if ((table[4][0] && table[3][1] && table[2][2] && table[1][3])
    || (table[3][1] && table[2][2] && table[1][3] && table[0][4])) {
    return true;
  }

  if ((table[5][0] && table[4][1] && table[3][2] && table[2][3])
    || (table[4][1] && table[3][2] && table[2][3] && table[1][4])
    || (table[3][2] && table[2][3] && table[1][4] && table[0][5])) {
    return true;
  }

  if ((table[5][1] && table[4][2] && table[3][3] && table[2][4])
    || (table[4][2] && table[3][3] && table[2][4] && table[1][5])
    || (table[3][3] && table[2][4] && table[1][5] && table[0][6])) {
    return true;
  }

  if ((table[5][2] && table[4][3] && table[3][4] && table[2][5])
    || (table[4][3] && table[3][4] && table[2][5] && table[1][6])) {
    return true;
  }

  if (table[5][3] && table[4][4] && table[3][5] && table[2][6]) {
    return true;
  }

  return false;
}

export default rightDiagTest;



// console.log(table[5][1])
// console.log(table[4][2])
// console.log(table[3][3])
// console.log(table[2][4])
// console.log(table[1][5])
// console.log(table[0][6])

// console.log(table[5][2])
// console.log(table[4][3])
// console.log(table[3][4])
// console.log(table[2][5])
// console.log(table[1][6])

// console.log(table[5][3])
// console.log(table[4][4])
// console.log(table[3][5])
// console.log(table[2][6])