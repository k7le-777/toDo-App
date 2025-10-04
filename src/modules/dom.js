export function renderTodo(todo, project, todoList) {
  const todoItem = document.createElement("li");

  // Title + details span
  const textSpan = document.createElement("span");
  textSpan.textContent = `${todo.title} - ${
    todo.description
  } (${todo.dueDate.toLocaleDateString()}) [${todo.priority}]`;
  todoItem.appendChild(textSpan);

  // ✅ Mark complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔️";
  completeBtn.addEventListener("click", () => {
    todo.toggleCompleted();
    textSpan.style.textDecoration = todo.completed ? "line-through" : "none";
    localStorage.setItem(project.id, JSON.stringify(project)); // save
  });
  todoItem.appendChild(completeBtn);

  // ❌ Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", () => {
    project.removeTodo(todo.id);
    todoList.removeChild(todoItem);
    localStorage.setItem(project.id, JSON.stringify(project)); // save
  });
  todoItem.appendChild(deleteBtn);

  // Append to list
  todoList.appendChild(todoItem);
}
