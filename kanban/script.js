document.addEventListener("DOMContentLoaded", () => {
  const todo = document.querySelector("#todo");
  const progress = document.querySelector("#progress");
  const done = document.querySelector("#done");
  const tasks = document.querySelectorAll(".task");
  const toggleModalButton = document.querySelector(".toggle-modal");
  const modal = document.querySelector(".modal");
  const modalbg = document.querySelector(".modal .bg");
  const addTaskButton = document.querySelector("#add-new-task");
  let currDraggedElement = null;

  toggleModalButton.addEventListener("click", () => {
    modal.classList.toggle("active");
  });
  modalbg.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  addTaskButton.addEventListener("click", () => {
    const taskTitle = document.querySelector("#title").value;
    const taskDescription = document.querySelector("#description").value;
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");
    div.innerHTML = `
    <h2>${taskTitle}</h2>
    <p>${taskDescription} </p>
    <button>delete</button>`;
    todo.appendChild(div);
    div.addEventListener("drag", () => {
      currDraggedElement = div;
    });
    modal.classList.remove("active");
  });

  tasks.forEach((task) => {
    task.addEventListener("drag", () => {
      currDraggedElement = task;
    });
  });

  function addDragEvents(column) {
    column.addEventListener("dragenter", (e) => {
      e.preventDefault();
      column.classList.add("hover-over");
    });

    column.addEventListener("dragleave", (e) => {
      e.preventDefault();
      column.classList.remove("hover-over");
    });

    column.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    column.addEventListener("drop", (e) => {
      e.preventDefault();
      column.appendChild(currDraggedElement);
      column.classList.remove("hover-over");
    });
  }

  addDragEvents(todo);
  addDragEvents(progress);
  addDragEvents(done);
});
