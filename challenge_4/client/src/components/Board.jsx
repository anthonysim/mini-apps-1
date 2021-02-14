import React from 'react';


const Board = (props) => {


  const styleOptions = {
    minHeight: "60px"
  }
  return (
    < div style={{ width: "60%" }} class="container mt-5 border border-dark" >

      {/* Row 1 */}
      <div class="row text-center">
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
      </div>

      {/* Row 2 */}
      <div class="row text-center">
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
      </div>

      {/* Row 3 */}
      <div class="row text-center">
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
      </div>

      {/* Row 4 */}
      <div class="row text-center">
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
      </div>

      {/* Row 5 */}
      <div class="row text-center">
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
      </div>

      {/* Row 6 */}
      <div class="row text-center">
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
        <div class="col-sm my-auto border-right border-bottom">$</div>
      </div>

    </div >
  )
}

export default Board;