// console.log('%c If you see this in your console, the script is connected to your html page!', 'background: #222; color: #bada55');

// grabs the locations on the board
let oneSpot = document.getElementById('one');
let twoSpot = document.getElementById('two');
let threeSpot = document.getElementById('three');
let fourSpot = document.getElementById('four');
let fiveSpot = document.getElementById('five');
let sixSpot = document.getElementById('six');
let sevenSpot = document.getElementById('seven');
let eightSpot = document.getElementById('eight');
let nineSpot = document.getElementById('nine');


// event listeners when board is clicked
oneSpot.addEventListener('click', (e) => {
  e.target.innerText = 'X';
  console.log(e.target.innerText);
})

twoSpot.addEventListener('click', () => {
  console.log('two spot is clicked!')
})

threeSpot.addEventListener('click', () => {
  console.log('three spot is clicked!')
})

fourSpot.addEventListener('click', () => {
  console.log('four spot is clicked!')
})

fiveSpot.addEventListener('click', () => {
  console.log('five spot is clicked!')
})

sixSpot.addEventListener('click', () => {
  console.log('six spot is clicked!')
})

sevenSpot.addEventListener('click', () => {
  console.log('seven spot is clicked!')
})

eightSpot.addEventListener('click', () => {
  console.log('eight spot is clicked!')
})

nineSpot.addEventListener('click', () => {
  console.log('nine spot is clicked!')
})