import React from 'react';


const Board = ({ board, select }) => {
  // console.log(board)

  return (
    < div style={{ width: "60%" }} className="container mt-5 border border-dark" >

      {/* Row 1 */}
      <div onClick={select} className="row text-center" >
        <div data-loc={0} className="zero col-sm my-auto border-right border-bottom">{board[0]}</div>
        <div data-loc={1} className="one col-sm my-auto border-right border-bottom">{board[1]}</div>
        <div data-loc={2} className="two col-sm my-auto border-right border-bottom">{board[2]}</div>
        <div data-loc={3} className="three col-sm my-auto border-right border-bottom">{board[3]}</div>
        <div data-loc={4} className="four col-sm my-auto border-right border-bottom">{board[4]}</div>
        <div data-loc={5} className="five col-sm my-auto border-right border-bottom">{board[5]}</div>
        <div data-loc={6} className="six col-sm my-auto border-right border-bottom">{board[6]}</div>
      </div >

      {/* Row 2 */}
      <div onClick={select} className="row text-center" >
        <div data-loc={7} className="seven col-sm my-auto border-right border-bottom">{board[7]}</div>
        <div data-loc={8} className="eight col-sm my-auto border-right border-bottom">{board[8]}</div>
        <div data-loc={9} className="nine col-sm my-auto border-right border-bottom">{board[9]}</div>
        <div data-loc={10} className="ten col-sm my-auto border-right border-bottom">{board[10]}</div>
        <div data-loc={11} className="eleven col-sm my-auto border-right border-bottom">{board[11]}</div>
        <div data-loc={12} className="twelve col-sm my-auto border-right border-bottom">{board[12]}</div>
        <div data-loc={13} className="thirteen col-sm my-auto border-right border-bottom">{board[13]}</div>
      </div >

      {/* Row 3 */}
      <div onClick={select} className="row text-center" >
        <div data-loc={14} className="fourteen col-sm my-auto border-right border-bottom">{board[14]}</div>
        <div data-loc={15} className="fifteen col-sm my-auto border-right border-bottom">{board[15]}</div>
        <div data-loc={16} className="sixteen col-sm my-auto border-right border-bottom">{board[16]}</div>
        <div data-loc={17} className="seventeen col-sm my-auto border-right border-bottom">{board[17]}</div>
        <div data-loc={18} className="eighteen col-sm my-auto border-right border-bottom">{board[18]}</div>
        <div data-loc={19} className="nineteen col-sm my-auto border-right border-bottom">{board[19]}</div>
        <div data-loc={20} className="twenty col-sm my-auto border-right border-bottom">{board[20]}</div>
      </div >

      {/* Row 4 */}
      <div onClick={select} className="row text-center" >
        <div data-loc={21} className="twenty-one col-sm my-auto border-right border-bottom">{board[21]}</div>
        <div data-loc={22} className="twenty-two col-sm my-auto border-right border-bottom">{board[22]}</div>
        <div data-loc={23} className="twenty-three col-sm my-auto border-right border-bottom">{board[23]}</div>
        <div data-loc={24} className="twenty-four col-sm my-auto border-right border-bottom">{board[24]}</div>
        <div data-loc={25} className="twenty-five col-sm my-auto border-right border-bottom">{board[25]}</div>
        <div data-loc={26} className="twenty-six col-sm my-auto border-right border-bottom">{board[26]}</div>
        <div data-loc={27} className="twenty-seven col-sm my-auto border-right border-bottom">{board[27]}</div>
      </div >

      {/* Row 5 */}
      <div onClick={select} className="row text-center" >
        <div data-loc={28} className="twenty-eight col-sm my-auto border-right border-bottom">{board[28]}</div>
        <div data-loc={29} className="twenty-nine col-sm my-auto border-right border-bottom">{board[29]}</div>
        <div data-loc={30} className="thirty col-sm my-auto border-right border-bottom">{board[30]}</div>
        <div data-loc={31} className="thirty-one col-sm my-auto border-right border-bottom">{board[31]}</div>
        <div data-loc={32} className="thirty-two col-sm my-auto border-right border-bottom">{board[32]}</div>
        <div data-loc={33} className="thirty-three col-sm my-auto border-right border-bottom">{board[33]}</div>
        <div data-loc={34} className="thirty-four col-sm my-auto border-right border-bottom">{board[34]}</div>
      </div >

      {/* Row 6 */}
      <div onClick={select} className="row text-center" >
        <div data-loc={35} className="thirty-five col-sm my-auto border-right border-bottom">{board[35]}</div>
        <div data-loc={36} className="thirty-six col-sm my-auto border-right border-bottom">{board[36]}</div>
        <div data-loc={37} className="thirty-seven col-sm my-auto border-right border-bottom">{board[37]}</div>
        <div data-loc={38} className="thirty-eight col-sm my-auto border-right border-bottom">{board[38]}</div>
        <div data-loc={39} className="thirty-nine col-sm my-auto border-right border-bottom">{board[39]}</div>
        <div data-loc={40} className="forty col-sm my-auto border-right border-bottom">{board[40]}</div>
        <div data-loc={41} className="forty-one col-sm my-auto border-right border-bottom">{board[41]}</div>
      </div >

    </div >
  )
}

export default Board;