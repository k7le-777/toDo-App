export default class ToDo {
  constructor(
    title,
    description = "",
    dueDate = null,
    priority = "normal",
    notes = [],
    completed = false,
    id = Date.now().toString()
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate ? new Date(dueDate) : null;
    this.priority = priority;
    this.completed = completed;
    this.id = id;
    this.notes = [...notes];
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
  getDescription() {
    return this.description;
  }
  setDescription(newDescription) {
    this.description = newDescription;
  }
  getDueDate() {
    return this.dueDate;
  }
  setDueDate(newDueDate) {
    if (newDueDate) {
      const date = new Date(newDueDate);
      if (!isNaN(date)) this.dueDate = date;
      else console.warn("Invalid date. Keeping previous value.");
    } else {
      this.dueDate = null;
    }
  }
  getPriority() {
    return this.priority;
  }
  setPriority(newPriority) {
    const allowed = ["low", "normal", "high"];
    if (allowed.includes(newPriority)) {
      this.priority = newPriority;
    } else {
      console.warn(
        `Invalid priority: "${newPriority}". Keeping previous value: "${this.priority}"`
      );
    }
  }
  getNotes() {
    return this.notes;
  }
  addNote(note) {
    this.notes.push(note);
  }
  removeNote(index) {
    if (index >= 0 && index < this.notes.length) {
      this.notes.splice(index, 1);
    } else {
      console.warn(`Invalid note index: ${index}. No note removed.`);
    }
  }
  // --- State methods ---
  markComplete() {
    this.completed = true;
  }
  markIncomplete() {
    this.completed = false;
  }
  // bulk edit
  editTodo({ title, description, dueDate, priority, notes }) {
    if (title !== undefined) this.setTitle(title);
    if (description !== undefined) this.setDescription(description);
    if (dueDate !== undefined) this.setDueDate(dueDate);
    if (priority !== undefined) this.setPriority(priority);
    if (notes !== undefined) this.notes = [...notes];
  }
}
