import Project from "./project.js";
import ToDo from "./toDo.js";
// Create a new Project
const workProject = new Project("Work Tasks");
console.log("New project:", workProject);

// Create todos
const todo1 = new ToDo("Finish report", "Due by Friday", "2025-08-20", "high");
const todo2 = new ToDo("Email client", "", "2025-08-18", "normal");

// Add todos to project
workProject.addTodo(todo1);
workProject.addTodo(todo2);

console.log("Project after adding todos:", workProject.getAllTodos());
workProject.addTodo({ title: "Not a ToDo" }); // should warn
// Remove the first todo
workProject.removeTodo(todo1.id);
console.log("Project after removing todo1:", workProject.getAllTodos());

// Try removing a non-existent ID
workProject.removeTodo("fake-id"); // should warn
// Update todo2
workProject.updateTodo(todo2.id, { title: "Email VIP client", priority: "high" });
console.log("Project after updating todo2:", workProject.getAllTodos());
