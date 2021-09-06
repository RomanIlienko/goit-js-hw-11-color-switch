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

const CHANGE_TIME = 1000
let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function switchColorStart() {
  timerId = setInterval(() => {
    let colorChange = randomIntegerFromInterval(0, colors.length - 1)
    refs.body.style.backgroundColor = colors[colorChange]
  }, CHANGE_TIME);
  if (timerId) {
    refs.startBtn.setAttribute('disabled', true)
  }
}

function switchColorStop() {
  refs.startBtn.removeAttribute('disabled', true)
  clearInterval(timerId);
};





