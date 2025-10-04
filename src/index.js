import Project from "./modules/project.js";
import ToDo from "./modules/toDo.js";
import { saveProject, loadProject } from "./modules/storage.js";
import { renderTodo } from "./modules/dom.js"; // we'll create this next

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const todoList = document.getElementById("todo-list");

  // Load or create project
  const storedProject = loadProject("work-project"); // use a fixed ID for simplicity
  const workProject =
    storedProject || new Project("Work Tasks", [], "work-project");

  // Render existing todos
  workProject
    .getAllTodos()
    .forEach((todo) => renderTodo(todo, workProject, todoList));

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const priority = document.getElementById("priority").value;

    // Create a new ToDo instance
    const dueDate = new Date(`${year}-${month}-${date}`);
    const newTodo = new ToDo(title, description, dueDate, priority);

    // Add to project
    workProject.addTodo(newTodo);
    saveProject(workProject);

    // Render in DOM
    renderTodo(newTodo, workProject, todoList);

    form.reset();
  });
});
