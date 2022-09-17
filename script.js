const canvasElement = document.querySelector('canvas');

const context = canvasElement.getContext('2d');

const width = 500;
const height = 500;

const radius = 50;

let x = 250;
let y = 100;

let speedX = 0.4;
let speedY = 0.1;

const accelerationY = 0.0125; // Also called gravity
const accelerationX = 0;

// Draw a circle
const drawCircle = () => {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
}

// const clamp = (value, min, max) => Math.max(Math.min(value, max), min);

const clamp = (value, min, max) => {
  return Math.max(Math.min(value, max), min);
}

drawCircle();

setInterval(() => {
  context.clearRect(0, 0, width, height);

  speedY += accelerationY;
  speedX += accelerationX;

  x = clamp(x + speedX, 0 + radius, width - radius);
  y = clamp(y + speedY, 0 + radius, height - radius);

  if (y === radius || y === height - radius) {
    // speedY *= -1;
    speedY = speedY * -1;
  }

  if (x === radius || x === width - radius) {
    speedX = speedX * -1;
  }

  drawCircle();
}, 1000 / 240);
