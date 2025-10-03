const transformOuter = document.querySelector(".outer");
const ball = document.querySelector(".ball");
const moveButton = document.querySelector("#move-button");
const scaleButton = document.querySelector("#scale-button");
const rotateButton = document.querySelector("#rotate-button");
const resetButton = document.querySelector("#reset-button");

let ballTranslateX = 0;
let ballRotate = 0;
let ballScale = 1;

function updateTransform() {
  ball.style.transform = `translateX(${ballTranslateX}px) rotate(${ballRotate}deg) scale(${ballScale})`;
}

function moveBall() {
  ballTranslateX += 10;
  updateTransform();
}

moveButton.addEventListener("click", moveBall);

function rotateBall() {
  ballRotate += 15;
  updateTransform();
}

rotateButton.addEventListener("click", rotateBall);

function scaleBall() {
  ballScale -= 1;
  updateTransform();
}

scaleButton.addEventListener("click", scaleBall);

function resetBall() {
  ballTranslateX = 0;
  ballRotate = 0;
  ballScale = 1;
  updateTransform();
}

resetButton.addEventListener("click", resetBall);
