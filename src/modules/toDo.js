// toDo.js
import { v4 as uuidv4 } from "uuid";

export default class ToDo {
  constructor(
    title,
    description = "",
    dueDate = null,
    priority = "normal",
    notes = [],
    completed = false,
    id = null
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate ? new Date(dueDate) : null;
    this.priority = priority;
    this.notes = [...notes]; // array of strings
    this.completed = completed;
    this.id = id || uuidv4(); // unique ID
  }

  // ===== Todo editing =====
  editTodo({ title, description, dueDate, priority, completed, notes }) {
    if (title !== undefined) this.title = title;
    if (description !== undefined) this.description = description;
    if (dueDate !== undefined)
      this.dueDate = dueDate ? new Date(dueDate) : null;
    if (priority !== undefined) this.priority = priority;
    if (completed !== undefined) this.completed = completed;
    if (notes !== undefined) this.notes = [...notes];
  }

  // ===== Notes management =====
  getNotes() {
    return [...this.notes];
  }

  addNote(note) {
    if (typeof note === "string" && note.trim() !== "") {
      this.notes.push(note);
    } else {
      console.warn("Note must be a non-empty string");
    }
  }

  removeNote(index) {
    if (index >= 0 && index < this.notes.length) {
      this.notes.splice(index, 1);
    } else {
      console.warn("Invalid note index");
    }
  }

  // ===== Completion state =====
  markComplete() {
    this.completed = true;
  }

  markIncomplete() {
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}
