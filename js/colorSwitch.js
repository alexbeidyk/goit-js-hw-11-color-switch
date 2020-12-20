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
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let colorIntervaId = null;
refs.stopBtn.disabled = true;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomBackgroundColorStart() {
  if (colorIntervaId) {
    return;
  }

  colorIntervaId = setInterval(() => {
    let randomNumber = randomIntegerFromInterval(0, colors.length);
    let randomColor = colors[`${randomNumber}`];
    refs.body.style.backgroundColor = randomColor;
  }, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function randomBackgroundColorStop() {
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
  clearInterval(colorIntervaId);
}

refs.startBtn.addEventListener('click', randomBackgroundColorStart);
refs.stopBtn.addEventListener('click', randomBackgroundColorStop);