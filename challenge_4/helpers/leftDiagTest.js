const leftDiagTest = function (table, test) {

  if (table[2][0] && table[3][1] && table[4][2] && table[5][3]) {
    return true;
  }

  if ((table[1][0] && table[2][1] && table[3][2] && table[4][3])
    || (table[2][1] && table[3][2] && table[4][3] && table[5][4])) {
    return true;
  }

  if ((table[0][0] && table[1][1] && table[2][2] && table[3][3])
    || (table[1][1] && table[2][2] && table[3][3] && table[4][4])
    || (table[2][2] && table[3][3] && table[4][4] && table[5][5])) {
    return true;
  }

  if ((table[0][1] && table[1][2] && table[2][3] && table[3][4])
    || (table[1][2] && table[2][3] && table[3][4] && table[4][5])
    || (table[2][3] && table[3][4] && table[4][5] && table[5][6])) {
    return true;
  }

  if ((table[0][2] && table[1][3] && table[2][4] && table[3][5])
    || table[1][3] && table[2][4] && table[3][5] && table[4][6]) {
    return true;
  }

  if ((table[0][3] && table[1][4] && table[2][5] && table[3][6])) {
    return true;
  }

  return false;
}

export default leftDiagTest;




