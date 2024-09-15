import { v4 as uuid } from "uuid"

import tworism from "../assets/gif/2rism.webp"
import brownianMotion from "../assets/gif/brownian-motion.gif"
import countdownTimer from "../assets/gif/countdown-timer.gif"
import cutspace from "../assets/gif/cutspace.gif"
import fileDownloader from "../assets/gif/file-downloader.gif"
import houseStaff from "../assets/gif/house-staff.gif"
import pianoGame from "../assets/gif/piano-game.gif"
import rockPaperScissors from "../assets/gif/rock-paper-scissors.gif"
import snakeGame from "../assets/gif/snake-game.gif"
import toDo from "../assets/gif/todo-vanillaJs.gif"

const Works = [
  {
    name: "2rism",
    id: uuid(),
    src: tworism,
    description: "Here is a simple landing-page with some animations, written in HTML/CSS",
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
    description: "Smth about this project",
  },
  {
    name: "ToDo",
    id: uuid(),
    src: toDo,
    description: "Smth about this project",
  },
]

export default Works
