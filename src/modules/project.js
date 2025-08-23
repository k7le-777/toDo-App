import ToDo from "./toDo.js";

export default class Project {
  constructor(title, todos = [], id = Date.now().toString()) {
    this.title = title;
    this.todos = [...todos];
    this._id = id;
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    if (typeof newTitle === "string" && newTitle.trim() !== "") {
      this.title = newTitle;
    } else {
      console.warn("Invalid title. Keeping previous value.");
    }
  }

  getId() {
    return this._id;
  }

  addTodo(todo) {
    if (todo instanceof ToDo) {
      this.todos.push(todo);
    } else {
      console.warn("Only ToDo instances can be added");
    }
  }

  removeTodo(id) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    } else {
      console.warn(`No todo found with id: ${id}`);
    }
  }

  getTodo(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  getAllTodos() {
    return [...this.todos];
  }

  updateTodo(id, updatedData) {
    const todo = this.getTodo(id);
    if (todo) {
      todo.editTodo(updatedData);
    } else {
      console.warn(`No todo found with id: ${id}`);
    }
  }
}
