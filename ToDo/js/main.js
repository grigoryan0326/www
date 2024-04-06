const form = document.querySelector("#form");
const taskInput = document.querySelector("#taskInput");
const emptyList = document.querySelector("#emptyList");

let tasks = [];
if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach((task) => renderTask(task));
}

form.addEventListener("submit", addTask);
tasksList.addEventListener("click", deleteTask);
tasksList.addEventListener("click", doneTask);

function addTask(evt) {
  evt.preventDefault();
  const taskText = taskInput.value;

  const newTask = {
    id: Date.now(),
    text: taskText,
    done: false,
  };

  tasks.push(newTask);

  saveToLocalStorage();

  renderTask(newTask);

  taskInput.value = "";
  taskInput.focus();
}

function deleteTask(evt) {
  if (evt.target.dataset.action === "delete") {
    const parentNode = evt.target.closest(".list-group-item");

    const id = parentNode.id;
    tasks = tasks.filter((item) => item.id != id);
    parentNode.remove();
  }

  checkEmptyList();
  saveToLocalStorage();
}

function doneTask(evt) {
  if (evt.target.dataset.action === "done") {
    const parentNode = evt.target.closest(".list-group-item");

    const id = parentNode.id;
    const index = tasks.findIndex((task) => (task.id == id ? true : false));
    tasks[index].done = !tasks[index].done;

    const taskTitle = parentNode.querySelector(".task-title");
    taskTitle.classList.toggle("task-title--done");
  }

  saveToLocalStorage();
}

function checkEmptyList() {
  if (tasks.length === 0) {
    emptyList.classList.remove("none");
  }

  if (tasks.length > 0) emptyList.classList.add("none");
}

function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTask(task) {
  const cssClass = task.done ? "task-title task-title--done" : "task-title";

  const taskHTML = `
      <li id='${task.id}' class="list-group-item d-flex justify-content-between task-item">
      <span class="${cssClass}">${task.text}</span>
      <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action">
          <img src="./img/tick.svg" alt="Done" width="18" height="18">
        </button>
        <button type="button" data-action="delete" class="btn-action">
          <img src="./img/cross.svg" alt="Done" width="18" height="18">
        </button>
      </div>
      </li>
    `;

  const tasksList = document.querySelector("#tasksList");
  tasksList.insertAdjacentHTML("beforeend", taskHTML);

  checkEmptyList();
}
