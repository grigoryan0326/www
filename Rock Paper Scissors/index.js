const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user-result img"),
  cpuResult = document.querySelector(".cpu-result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option-image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    // adding active class for each of option images
    image.classList.add("active");

    optionImages.forEach((image2, index2) => {
      // removing active class for the other option images
      if (index !== index2) image2.classList.remove("active");
    });

    gameContainer.classList.add("start");
    setStartingPositions();
    setTimeout(() => {
      result.textContent = "Rock...";
    }, 0);
    setTimeout(() => {
      result.textContent = "Paper...";
    }, 750);
    setTimeout(() => {
      result.textContent = "Scissors...";
    }, 1500);

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // getting the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // setting it as a user result image
      userResult.src = imageSrc;

      // generating a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // creating an array of CPU result images
      let cpuImages = ["img/rock.png", "img/paper.png", "img/scissors.png"];
      // setting random image from the array as a cpu image
      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      // creating an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

      let outcomeValue = outcomes[userValue + cpuValue];
      result.textContent =
        outcomeValue === "Draw"
          ? "Match Draw!"
          : outcomeValue === "User"
          ? "You Won!"
          : "You Lose!";
    }, 2000);
  });
});

function setStartingPositions() {
  userResult.src = "img/rock.png";
  cpuResult.src = "img/rock.png";
}
