import Project from "./project.js";
import ToDo from "./toDo.js";

// Save a project to localStorage
export function saveProject(project) {
  if (!project || !project.id) {
    console.warn("Cannot save project without an id");
    return;
  }
  localStorage.setItem(project.id, JSON.stringify(project));
}

// Load a project from localStorage by id
export function loadProject(id) {
  const data = localStorage.getItem(id);
  if (!data) return null;

  try {
    const parsed = JSON.parse(data);

    // Recreate Project and ToDo instances
    const todos = parsed.todos.map(
      t => new (await import("./toDo.js")).default(
        t.title,
        t.description,
        t.dueDate,
        t.priority,
        t.notes,
        t.completed,
        t.id
      )
    );
    const Project = (await import("./project.js")).default;
    return new Project(parsed.title, todos, parsed.id);
  } catch (err) {
    console.error("Failed to parse project from localStorage", err);
    return null;
  }
}

// Optional: remove project from storage
export function deleteProject(id) {
  localStorage.removeItem(id);
}
