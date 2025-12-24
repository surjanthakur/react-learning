document.addEventListener("DOMContentLoaded", () => {
  const todo = document.querySelector("#todo");
  const progress = document.querySelector("#progress");
  const done = document.querySelector("#done");
  const tasks = document.querySelectorAll(".task");
  let currDraggedElement = null;

  tasks.forEach((task) => {
    task.addEventListener("drag", (e) => {
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

    column.addEventListener("drop", (e) => {
      e.preventDefault();
      column.appendChild(currDraggedElement);
    });
  }

  addDragEvents(todo);
  addDragEvents(progress);
  addDragEvents(done);
});
