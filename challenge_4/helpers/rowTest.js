// rowTests
const rowTest = function (table, test) {
  for (let row of table) {
    for (let i = 0; i < row.length / 2; i++) {
      let slicedArr = row.slice(i, 4 + i);

      // replace x, x, x, x with the test for winner in state
      if (JSON.stringify(test) === JSON.stringify(slicedArr)) {
        return true;
      }
    }
  }
  return false;
}

export default rowTest;