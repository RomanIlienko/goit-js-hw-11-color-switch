const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('.start'),
  stopBtn: document.querySelector('.stop')
}

refs.startBtn.addEventListener('click', switchColorStart)
refs.stopBtn.addEventListener('click', switchColorStop)

let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function switchColorStart() {
  timerId = setInterval(() => {

   }, 1000);
  refs.startBtn.setAttribute('disabled', true)
  refs.body.style.backgroundColor = randomIntegerFromInterval
}

function switchColorStop() {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled', true)
};

// function setBodyColor() {
//   refs.body.style.backgroundColor = 
// }

