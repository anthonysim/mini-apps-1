import React from 'react';


const Board = ({ pieces }) => {
  let result = '';

  return (
    < div style={{ width: "60%" }
    } className="container mt-5 border border-dark" >

      {/* Row 1 */}
      <div className="row text-center" >
        <div className="col-sm my-auto border-right border-bottom">{pieces[0][0]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[0][1]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[0][2]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[0][3]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[0][4]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[0][5]}</div>
      </div >

      {/* Row 2 */}
      <div className="row text-center" >
        <div className="col-sm my-auto border-right border-bottom">{pieces[1][0]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[1][1]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[1][2]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[1][3]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[1][4]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[1][5]}</div>
      </div >

      {/* Row 3 */}
      <div className="row text-center" >
        <div className="col-sm my-auto border-right border-bottom">{pieces[2][0]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[2][1]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[2][2]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[2][3]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[2][4]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[2][5]}</div>
      </div >

      {/* Row 4 */}
      <div className="row text-center" >
        <div className="col-sm my-auto border-right border-bottom">{pieces[3][0]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[3][1]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[3][2]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[3][3]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[3][4]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[3][5]}</div>
      </div >

      {/* Row 5 */}
      <div className="row text-center" >
        <div className="col-sm my-auto border-right border-bottom">{pieces[4][0]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[4][1]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[4][2]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[4][3]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[4][4]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[4][5]}</div>
      </div >

      {/* Row 6 */}
      <div className="row text-center" >
        <div className="col-sm my-auto border-right border-bottom">{pieces[5][0]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[5][1]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[5][2]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[5][3]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[5][4]}</div>
        <div className="col-sm my-auto border-right border-bottom">{pieces[5][5]}</div>
      </div >

    </div >
  )
}

export default Board;