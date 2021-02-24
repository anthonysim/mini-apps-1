// colTest
const colTest = function (table, test) {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 3; j++) {
      let slicedArr = [table[j][i], table[j + 1][i], table[j + 2][i], table[j + 3][i]];
      // replace x, x, x, x with the test for winner in state
      if (JSON.stringify(test) === JSON.stringify(slicedArr)) {
        return true;
      }
    }
  }
  return false;
}


export default colTest;