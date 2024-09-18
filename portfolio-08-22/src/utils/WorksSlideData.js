import { v4 as uuid } from "uuid"

import tworism from "../assets/worksSlide/2rism.webp"
import brownianMotion from "../assets/worksSlide/brownian-motion.webp"
import countdownTimer from "../assets/worksSlide/countdown-timer.webp"
import cutspace from "../assets/worksSlide/cut-space.webp"
import fileDownloader from "../assets/worksSlide/file-downloader.webp"
import houseStaff from "../assets/worksSlide/house-staff.webp"
import pianoGame from "../assets/worksSlide/piano-game.webp"
import rockPaperScissors from "../assets/worksSlide/rock-paper-scissors.webp"
import snakeGame from "../assets/worksSlide/snake-game.webp"
import toDo from "../assets/worksSlide/todo-vanillaJs.webp"

const Works = [
  {
    name: "2rism",
    id: uuid(),
    src: tworism,
    description:
      "Here is a simple landing-page with some animations, written in HTML/CSS",
  },
  {
    name: "Brownian Motion",
    id: uuid(),
    src: brownianMotion,
    description: "Smth about this project",
  },
  {
    name: "Countdown Timer",
    id: uuid(),
    src: countdownTimer,
    description: "Smth about this project",
  },
  {
    name: "Cutspace",
    id: uuid(),
    src: cutspace,
    description: "Smth about this project",
  },
  {
    name: "File Downloader",
    id: uuid(),
    src: fileDownloader,
    description: "Smth about this project",
  },
  {
    name: "House Staff",
    id: uuid(),
    src: houseStaff,
    description: "Smth about this project",
  },
  {
    name: "Piano Game",
    id: uuid(),
    src: pianoGame,
    description: "Smth about this project",
  },
  {
    name: "Rock Paper Scissors",
    id: uuid(),
    src: rockPaperScissors,
    description: "Smth about this project",
  },
  {
    name: "Snake Game",
    id: uuid(),
    src: snakeGame,
    description: "Webp testing version",
  },
  {
    name: "ToDo",
    id: uuid(),
    src: toDo,
    description: "Smth about this project",
  },
]

export default Works
