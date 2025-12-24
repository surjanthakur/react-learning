document.addEventListener("DOMContentLoaded", () => {
  const todo = document.querySelector("#todo");
  const progress = document.querySelector("#progress");
  const done = document.querySelector("#done");
  const tasks = document.querySelectorAll(".task");

  tasks.forEach((task) => {
    task.addEventListener("drag", () => {});
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
  }

  addDragEvents(todo);
  addDragEvents(progress);
  addDragEvents(done);
});
