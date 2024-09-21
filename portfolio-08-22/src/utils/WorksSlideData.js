import { v4 as uuid } from "uuid"

import tworism from "../assets/worksSlide/2rismVBR.mp4"
import brownianMotion from "../assets/worksSlide/brownian-motionVBR.mp4"
import countdownTimer from "../assets/worksSlide/countdown-timerVBR.mp4"
import cutspace from "../assets/worksSlide/cut-spaceVBR.mp4"
import fileDownloader from "../assets/worksSlide/file-downloaderVBR.mp4"
import houseStaff from "../assets/worksSlide/house-staffVBR.mp4"
import pianoGame from "../assets/worksSlide/piano-gameVBR.mp4"
import rockPaperScissors from "../assets/worksSlide/rock-paper-scissorsVBR.mp4"
import snakeGame from "../assets/worksSlide/snake-gameVBR.mp4"
import toDo from "../assets/worksSlide/ToDoVBR.mp4"

const Works = [
  {
    name: "ToDo",
    id: uuid(),
    src: toDo,
    link: "https://github.com/grigoryan0326/www/tree/main/ToDo",
    description:
      "This is a basic ToDo application that allows users to add, remove, and mark tasks as completed. The tasks are displayed in a list, and users can manage their daily activities efficiently. \n\n Used skills: JavaScript, HTML, CSS",
  },
  {
    name: "2rism",
    id: uuid(),
    src: tworism,
    link: "https://github.com/grigoryan0326/www/tree/main/2rism",
    description:
      "I created a simple one-page website design based on a provided mockup. The project includes basic animations and effects, and it was one of the first websites I built during the early stages of learning. \n\n Used skills: HTML, SCSS",
  },
  {
    name: "File Downloader",
    id: uuid(),
    src: fileDownloader,
    link: "https://github.com/grigoryan0326/www/tree/main/Downloader",
    description:
      "Above is a classic file downloader, where you input a file URL and download it. It was built using pure JavaScript. \n\n Used skills: JavaScript, HTML, CSS.",
  },
  {
    name: "Brownian Motion",
    id: uuid(),
    src: brownianMotion,
    link: "https://github.com/grigoryan0326/www/tree/main/Brownian%20motion",
    description:
      "I developed a JavaScript application that first prompts users to specify the number and size of circles to create. After input, colorful balls are generated and begin performing a Brownian motion. Additionally, the background color of the page randomly changes at regular intervals.  \n\n Used skills: JavaScript, HTML, CSS.",
  },
  {
    name: "CutSpace",
    id: uuid(),
    src: cutspace,
    link: "https://github.com/grigoryan0326/www/tree/main/CutSpace",
    description:
      "There is a simple one-page project based on a mockup with pixel-perfect precision. All colors and hover animations were implemented exactly as specified in the design. \n\n Used skills: HTML, SCSS.",
  },
  {
    name: "Countdown Timer",
    id: uuid(),
    src: countdownTimer,
    link: "https://github.com/grigoryan0326/www/tree/main/Countdown%20timer",
    description:
      "I built a countdown timer using pure JavaScript, where users can input a specific duration or select from predefined templates. Once the time is set, the countdown begins, and the exact time when it will end is displayed in real-time. \n\n Used skills: JavaScript, HTML, CSS.",
  },
  {
    name: "House Staff",
    id: uuid(),
    src: houseStaff,
    link: "https://github.com/grigoryan0326/www/tree/main/house-staff-shop",
    description:
      "Here is a simple single-page React app that illustrates a furniture e-commerce store. It features a category filter, a shopping cart that displays the total price of added items, and the ability to remove items from the cart with the total price updating accordingly. Redux is used for centralized state management across components. \n\n Used skills: React, Redux, JavaScript, HTML, SCSS.",
  },
  {
    name: "Playable Piano",
    id: uuid(),
    src: pianoGame,
    link: "https://github.com/grigoryan0326/www/tree/main/Piano%20Game",
    description:
      "There is an interactive playable piano project that allows users to play notes using either their keyboard or mouse. Each key corresponds to a musical note, creating an engaging and fun experience. The app is built with pure JavaScript and includes additional features such as volume control and the ability to hide key hints. \n\n Used skills: JavaScript, HTML, CSS",
  },
  {
    name: "Rock Paper Scissors",
    id: uuid(),
    src: rockPaperScissors,
    link: "https://github.com/grigoryan0326/www/tree/main/Rock%20Paper%20Scissors",
    description:
      "Here you will find a browser-based implementation of the classic Rock Paper Scissors game. The game tracks the user's choices and compares them with the computer's random selection, determining a winner after each round. \n\n Used skills: JavaScript, HTML, CSS",
  },
  {
    name: "Snake Game",
    id: uuid(),
    src: snakeGame,
    link: "https://github.com/grigoryan0326/www/tree/main/Snake%20Game",
    description:
      "This project is a web-based version of the Snake game, where the player controls a growing snake that moves around the screen and eats food to grow longer. The game ends if the snake crashes into itself or the screen boundaries. It also features a high score system, which tracks the player's best result and allows them to reset it. \n\n Used skills: JavaScript, HTML, CSS",
  },
]

export default Works
