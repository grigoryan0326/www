let countDown;
const timerDisplay = document.querySelector(".timer-display-start");
const returnDisplay = document.querySelector(".timer-display-end");
const buttons = document.querySelectorAll("[data-time]");
const form = document.querySelector(".timer-form");

function timer(seconds) {
  const currentTime = Date.now();
  const endTime = currentTime + seconds * 1000;

  displayTimer(seconds);
  displayEndTime(endTime);

  countDown = setInterval(() => {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countDown);
      return;
    }
    displayTimer(secondsLeft);
  }, 1000);
}

function displayTimer(seconds) {
  const minutes = Math.floor(seconds / 60);
  const reminderSeconds = seconds % 60;
  const display = `${minutes}:${
    reminderSeconds < 10 ? "0" : ""
  }${reminderSeconds}s`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timeNow) {
  const end = new Date(timeNow);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  returnDisplay.textContent = `Be back at ${hour < 10 ? "0" : ""}${hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function startTimer() {
  clearInterval(countDown);
  const seconds = +this.dataset.time;
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearInterval(countDown);
  timer(this.timer.value * 60);
  this.reset();
});
