const selectBox = document.querySelector(".select-box");
const selectBtnX = document.querySelector(".playerx");
const selectBtnO = document.querySelector(".playero");
const playBoard = document.querySelector(".play-board");
const allBox = document.querySelectorAll("section span");
const players = document.querySelector(".players");

window.onload = () => {
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickedBox(this)");
  }

  selectBtnX.onclick = () => {
    selectBox.classList.add("hide"); // hiding select box
    playBoard.classList.add("show"); // showing play board
  };
  selectBtnO.onclick = () => {
    selectBox.classList.add("hide"); // hiding select box
    playBoard.classList.add("show"); // showing play board
    players.setAttribute("class", "players active player"); // adding 3 class names in player element
  };
};

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let playerSign = "X";
let runBot = true;

// user click function
function clickedBox(element) {
  console.log(players);
  if (players.classList.contains("player")) {
    element.innerHTML = `<i class='${playerOIcon}'></i>`; // adding circle icon tag inside user clicked element
    players.classList.add("active");
    playerSign = "O";
    element.setAttribute("id", playerSign);
  } else {
    element.innerHTML = `<i class='${playerXIcon}'></i>`; // adding cross icon tag inside user clicked element
    players.classList.add("active");
    element.setAttribute("id", playerSign);
  }

  element.style.pointerEvents = "none";

  setTimeout(() => {
    bot();
  }, 500); // passing 500ms for bot move
}

// bot click function
function bot() {
  playerSign = "O";
  let array = [];
  for (let i = 0; i < allBox.length; i++) {
    if (allBox[i].childElementCount == 0) {
      // if span has no any child element
      array.push(i); // inserting unselected boxes
    }
  }

  let randomBox = array[Math.floor(Math.random() * array.length)];
  // getting random index from array, so bot will select random free box

  if (array.length > 0) {
    if (players.classList.contains("player")) {
      playerSign = "X";
      allBox[randomBox].innerHTML = `<i class='${playerXIcon}'></i>`; // adding cross icon tag inside user clicked element
      players.classList.add("active");
      allBox[randomBox].setAttribute("id", playerSign);
    } else {
      allBox[randomBox].innerHTML = `<i class='${playerOIcon}'></i>`; // adding circle icon tag inside user clicked element
      players.classList.add("active");
      allBox[randomBox].setAttribute("id", playerSign);
    }
    allBox[randomBox].style.pointerEvents = "none";
    players.classList.remove("active");
  }
}

// winner select functions

