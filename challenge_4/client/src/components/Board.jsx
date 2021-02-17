import React from 'react';


const Board = ({ test, pieces, select }) => {
  return (
    < div style={{ width: "60%" }} className="container mt-5 border border-dark" >

      {/* Row 1 */}
      <div onClick={select} className="row text-center" >
        <div data-loc={0} className="zero col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={1} className="one col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={2} className="col-sm my-auto border-right border-bottom">{pieces[0][2]}</div>
        <div data-loc={3} className="col-sm my-auto border-right border-bottom">{pieces[0][3]}</div>
        <div data-loc={4} className="col-sm my-auto border-right border-bottom">{pieces[0][4]}</div>
        <div data-loc={5} className="col-sm my-auto border-right border-bottom">{pieces[0][5]}</div>
        <div data-loc={6} className="col-sm my-auto border-right border-bottom">?</div>
      </div >

      {/* Row 2 */}
      <div onClick={select} className="row text-center" >

        <div onClick={select} data-loc={7} className="col-sm my-auto border-right border-bottom">{pieces[1][1]}</div>
        <div onClick={select} data-loc={8} className="col-sm my-auto border-right border-bottom">{pieces[1][2]}</div>
        <div onClick={select} data-loc={9} className="col-sm my-auto border-right border-bottom">{pieces[1][4]}</div>
        <div onClick={select} data-loc={10} className="col-sm my-auto border-right border-bottom">{pieces[1][5]}</div>
        <div onClick={select} data-loc={11} className="col-sm my-auto border-right border-bottom">{pieces[1][3]}</div>
        <div onClick={select} data-loc={12} className="col-sm my-auto border-right border-bottom">?</div>
        <div onClick={select} data-loc={13} className="col-sm my-auto border-right border-bottom">{pieces[1][0]}</div>
      </div >

      {/* Row 3 */}
      <div className="row text-center" >
        <div onClick={select} data-loc={14} className="col-sm my-auto border-right border-bottom">{pieces[2][3]}</div>
        <div onClick={select} data-loc={15} className="col-sm my-auto border-right border-bottom">{pieces[2][4]}</div>
        <div onClick={select} data-loc={16} className="col-sm my-auto border-right border-bottom">{pieces[2][5]}</div>
        <div onClick={select} data-loc={17} className="col-sm my-auto border-right border-bottom">{pieces[2][0]}</div>
        <div onClick={select} data-loc={18} className="col-sm my-auto border-right border-bottom">{pieces[2][1]}</div>
        <div onClick={select} data-loc={19} className="col-sm my-auto border-right border-bottom">{pieces[2][2]}</div>
        <div onClick={select} data-loc={20} className="col-sm my-auto border-right border-bottom">{pieces[2][2]}</div>
      </div >

      {/* Row 4 */}
      <div className="row text-center" >
        <div onClick={select} data-loc={21} className="col-sm my-auto border-right border-bottom">{pieces[3][4]}</div>
        <div onClick={select} data-loc={22} className="col-sm my-auto border-right border-bottom">{pieces[3][5]}</div>
        <div onClick={select} data-loc={23} className="col-sm my-auto border-right border-bottom">{pieces[3][0]}</div>
        <div onClick={select} data-loc={24} className="col-sm my-auto border-right border-bottom">{pieces[3][1]}</div>
        <div onClick={select} data-loc={25} className="col-sm my-auto border-right border-bottom">{pieces[3][2]}</div>
        <div onClick={select} data-loc={26} className="col-sm my-auto border-right border-bottom">{pieces[3][2]}</div>
        <div onClick={select} data-loc={27} className="col-sm my-auto border-right border-bottom">{pieces[3][3]}</div>
      </div >

      {/* Row 5 */}
      <div className="row text-center" >
        <div onClick={select} data-loc={28} className="col-sm my-auto border-right border-bottom">{pieces[4][5]}</div>
        <div onClick={select} data-loc={29} className="col-sm my-auto border-right border-bottom">{pieces[4][0]}</div>
        <div onClick={select} data-loc={30} className="col-sm my-auto border-right border-bottom">{pieces[4][3]}</div>
        <div onClick={select} data-loc={31} className="col-sm my-auto border-right border-bottom">{pieces[4][1]}</div>
        <div onClick={select} data-loc={32} className="col-sm my-auto border-right border-bottom">{pieces[4][2]}</div>
        <div onClick={select} data-loc={33} className="col-sm my-auto border-right border-bottom">{pieces[4][2]}</div>
        <div onClick={select} data-loc={34} className="col-sm my-auto border-right border-bottom">{pieces[4][4]}</div>
      </div >

      {/* Row 6 */}
      <div className="row text-center" >
        <div onClick={select} data-loc={35} className="col-sm my-auto border-right border-bottom">{pieces[5][0]}</div>
        <div onClick={select} data-loc={36} className="col-sm my-auto border-right border-bottom">{pieces[5][1]}</div>
        <div onClick={select} data-loc={37} className="col-sm my-auto border-right border-bottom">{pieces[5][2]}</div>
        <div onClick={select} data-loc={38} className="col-sm my-auto border-right border-bottom">{pieces[5][3]}</div>
        <div onClick={select} data-loc={39} className="col-sm my-auto border-right border-bottom">{pieces[5][4]}</div>
        <div onClick={select} data-loc={40} className="col-sm my-auto border-right border-bottom">{pieces[5][4]}</div>
        <div onClick={select} data-loc={41} className="col-sm my-auto border-right border-bottom">{pieces[5][5]}</div>
      </div >

    </div >
  )
}

export default Board;