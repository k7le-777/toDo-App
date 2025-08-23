import Project from "./project.js";
import ToDo from "./toDo.js";

// 1. Create a new project
const workProject = new Project("Work Tasks");
console.log("New project:", workProject);

// 2. Create new todos
const todo1 = new ToDo("Finish report", "Due by Friday", "2025-08-20", "high");
const todo2 = new ToDo("Email client", "", "2025-08-18", "normal");

// 3. Add todos to project
workProject.addTodo(todo1);
workProject.addTodo(todo2);
console.log("Project after adding todos:", workProject.getAllTodos());

// 4. Test notes
todo1.addNote("Check data accuracy");
todo1.addNote("Add charts");
console.log("Todo1 notes after adding:", todo1.getNotes());

todo1.removeNote(0);
console.log("Todo1 notes after removing first note:", todo1.getNotes());

// 5. Test completion state
console.log("Todo2 completed?", todo2.completed);
todo2.markComplete();
console.log("Todo2 after markComplete:", todo2.completed);
todo2.markIncomplete();
console.log("Todo2 after markIncomplete:", todo2.completed);
todo2.toggleCompleted();
console.log("Todo2 after toggleCompleted:", todo2.completed);

// 6. Update a todo
workProject.updateTodo(todo2.id, {
  priority: "high",
  title: "Email VIP client",
});
console.log("Project after updating todo2:", workProject.getAllTodos());
