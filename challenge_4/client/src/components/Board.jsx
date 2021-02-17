import React from 'react';


const Board = ({ select }) => {
  return (
    < div style={{ width: "60%" }} className="container mt-5 border border-dark" >

      {/* Row 1 */}
      <div onClick={select} className="row text-center" >
        <div data-loc={0} className="zero col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={1} className="one col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={2} className="two col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={3} className="three col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={4} className="four col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={5} className="five col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={6} className="six col-sm my-auto border-right border-bottom">?</div>
      </div >

      {/* Row 2 */}
      <div onClick={select} className="row text-center" >
        <div data-loc={7} className="seven col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={8} className="eight col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={9} className="nine col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={10} className="ten col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={11} className="eleven col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={12} className="twelve col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={13} className="thirteen col-sm my-auto border-right border-bottom">?</div>
      </div >

      {/* Row 3 */}
      <div onClick={select} className="row text-center" >
        <div data-loc={14} className="fourteen col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={15} className="fifteen col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={16} className="sixteen col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={17} className="seventeen col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={18} className="eighteen col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={19} className="nineteen col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={20} className="twenty col-sm my-auto border-right border-bottom">?</div>
      </div >

      {/* Row 4 */}
      <div onClick={select} className="row text-center" >
        <div data-loc={21} className="twenty-one col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={22} className="twenty-two col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={23} className="twenty-three col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={24} className="twenty-four col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={25} className="twenty-five col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={26} className="twenty-six col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={27} className="twenty-seven col-sm my-auto border-right border-bottom">?</div>
      </div >

      {/* Row 5 */}
      <div onClick={select} className="row text-center" >
        <div data-loc={28} className="twenty-eight col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={29} className="twenty-nine col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={30} className="thirty col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={31} className="thirty-one col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={32} className="thirty-two col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={33} className="thirty-three col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={34} className="thirty-four col-sm my-auto border-right border-bottom">?</div>
      </div >

      {/* Row 6 */}
      <div onClick={select} className="row text-center" >
        <div data-loc={35} className="thirty-five col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={36} className="thirty-six col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={37} className="thirty-seven col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={38} className="thirty-eight col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={39} className="thirty-nine col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={40} className="forty col-sm my-auto border-right border-bottom">?</div>
        <div data-loc={41} className="forty-one col-sm my-auto border-right border-bottom">?</div>
      </div >

    </div >
  )
}

export default Board;