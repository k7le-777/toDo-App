// ui.js
export default class UI {
  static renderProject(project, container) {
    // Create project section
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const title = document.createElement("h2");
    title.textContent = project.getTitle();
    projectDiv.appendChild(title);

    // Todos list
    const todoList = document.createElement("ul");

    project.getAllTodos().forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = `${todo.title} (Due: ${
        todo.dueDate ? todo.dueDate.toDateString() : "No due date"
      }, Priority: ${todo.priority}, Completed: ${todo.completed})`;
      todoList.appendChild(li);
    });

    projectDiv.appendChild(todoList);
    container.appendChild(projectDiv);
  }
}
