// getting elements

const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const body = document.querySelector("body");
setInterval(() => {
  body.style.background = generateRandomColor();
}, 10000);

const c = canvas.getContext("2d");
debugger;
let number = prompt("How many circles you want to create?", 100);
let radius = +prompt("What radius of circles do you want?", 15);

// creating class for circles

class Circle {
  constructor(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.strokeStyle = "black";
    c.stroke();
  }

  update() {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

// creating unique colors for balls

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const colors = [];

for (let i = 0; i < number; i++) {
  let color = generateRandomColor();
  while (colors.includes(color)) {
    color = generateRandomColor();
  }
  colors.push(color);
}
function randomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// creating circles

const circlesArray = [];
for (let i = 0; i < number; i++) {
  let x = Math.random() * (window.innerWidth - 2 * radius) + radius;
  let y = Math.random() * (window.innerHeight - 2 * radius) + radius;
  let dx = (Math.random() - 0.5) * 3;
  let dy = (Math.random() - 0.5) * 3;
  let colorI = randomIndex(0, colors.length - 1);
  circlesArray.push(new Circle(x, y, radius, dx, dy, colors[colorI]));
}

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  circlesArray.forEach((item) => item.draw());
  circlesArray.forEach((item) => item.update());
}

animate();
