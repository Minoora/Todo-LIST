const data = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value;
  const star = "\u2B50";

  if (taskText.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML =
      "<span>" +
      star +
      "   " +
      taskText +
      '</span><button onclick="removeTask(this)">Remove</button>';
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
}

function removeTask(taskElement) {
  const listItem = taskElement.parentNode;
  taskList.removeChild(listItem);
}

document.getElementById("form1").addEventListener("submit", addTask);
