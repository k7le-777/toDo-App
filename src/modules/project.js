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

  //methods
  addTodo(todo) {
      this.todos.push(todo);
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
