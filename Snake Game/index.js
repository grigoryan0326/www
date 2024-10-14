const playBoard = document.querySelector(".play-board");
let scorePoints = document.querySelector(".score .colored");
scorePoints.textContent = 0;

let highScorePoints = document.querySelector(".high-score .colored");
highScorePoints.textContent = localStorage.getItem("highScore")
  ? localStorage.getItem("highScore")
  : 0;
let score = 0;

const reset = document.querySelector(".reset");

let gameOver = false;

let foodX, foodY;

let snakeX = 5;
let snakeY = 5;
let velocityX = 0,
  velocityY = 0;
let snakeBody = [];
let setIntervalId;

const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

const changeDirection = (e) => {
  if (velocityY != -1 && e.key === "ArrowDown") {
    velocityX = 0;
    velocityY = 1;
  }
  if (velocityY != 1 && e.key === "ArrowUp") {
    velocityX = 0;
    velocityY = -1;
  }
  if (velocityX != 1 && e.key === "ArrowLeft") {
    velocityX = -1;
    velocityY = 0;
  }
  if (velocityX != -1 && e.key === "ArrowRight") {
    velocityX = 1;
    velocityY = 0;
  }
};

const handleGameOver = () => {
  // clearing interval and reloading the page on game over
  clearInterval(setIntervalId);
  alert(`Game Over! Your score is ${score}. Press OK to replay...`);
  location.reload();

  localStorage.setItem("highScore", highScorePoints.textContent);
};

const initGame = () => {
  if (gameOver) handleGameOver();
  let htmlMarkup = `<div class='food' style='grid-area: ${foodY} / ${foodX}'></div>`;

  // checking if the snake hit the food
  if (snakeX === foodX && snakeY === foodY) {
    changeFoodPosition();
    snakeBody.push([foodX, foodY]); // pushing food position to snake body array
    score++;
    scorePoints.textContent = score;

    // checking if current score is high score
    if (score > highScorePoints.textContent) {
      highScorePoints.textContent = score;
    }
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    // shifting forward the values of the elements in the snake body by one
    snakeBody[i] = snakeBody[i - 1];
  }

  snakeBody[0] = [snakeX, snakeY]; // setting first element of snake body

  // Updating snake's position based on the current velocity
  snakeX += velocityX;
  snakeY += velocityY;

  // checking if snake is out of walls, in case changing gameOver to true
  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    gameOver = true;
  }

  for (let i = 0; i < snakeBody.length; i++) {
    htmlMarkup += `<div class='snake' style='grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}'></div>`;

    // checking if the snake hit himself
    if (
      i !== 0 &&
      snakeBody[0][1] === snakeBody[i][1] &&
      snakeBody[0][0] === snakeBody[i][0]
    ) {
      gameOver = true;
    }
  }

  playBoard.innerHTML = htmlMarkup;
};

changeFoodPosition();
setIntervalId = setInterval(initGame, 125);

document.addEventListener("keydown", changeDirection);

reset.addEventListener("click", (e) => {
  localStorage.setItem("highScore", 0);
  location.reload();
});
