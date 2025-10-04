# ✅ ToDo List Application

A feature-rich task management application with project organization, priority levels, and local storage persistence—built with vanilla JavaScript and Webpack.

[🎯 **Live Demo**](https://k7le-777.github.io/toDo-App/) | [📝 **View Code**](https://github.com/k7le-777/toDo-App)

---

## 📋 About

Built as part of **The Odin Project's Full Stack JavaScript curriculum**, this project challenged me to create a fully functional task manager with data persistence, complex state management, and modern JavaScript build tools.

This was my most advanced Odin Project, requiring me to integrate multiple technologies and manage application state across multiple features—a significant step up from my previous projects.

---

## ✨ Features

- ✅ **Create, Read, Update, Delete (CRUD)** - Full task management functionality
- 📁 **Project Organization** - Group tasks by projects/categories
- 🎯 **Priority Levels** - Mark tasks as low, medium, or high priority
- 📅 **Due Dates** - Set deadlines using date-fns library
- 💾 **Local Storage** - Data persists across browser sessions
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Clean UI** - Intuitive interface focused on usability

---

## 🛠️ Technologies

- **JavaScript (ES6+)** - Modules, classes, arrow functions
- **Webpack** - Module bundling and build automation
- **HTML5** - Semantic markup
- **CSS3** - Modern styling and layout
- **localStorage API** - Client-side data persistence
- **date-fns** - Date manipulation and formatting
- **Git/GitHub** - Version control

---

## 🧠 What I Learned

### Advanced JavaScript Concepts

**ES6 Modules**
- Organizing code into separate, reusable modules
- Import/export syntax for clean dependency management
- Creating a scalable project structure

**LocalStorage API**
- Saving and retrieving data from browser storage
- Serializing/deserializing JavaScript objects with JSON
- Handling data persistence across sessions

**State Management**
- Managing application state for multiple projects and tasks
- Updating UI reactively when data changes
- Keeping localStorage in sync with application state

### Build Tools

**Webpack Configuration**
- Setting up Webpack from scratch
- Configuring loaders for different file types
- Creating development and production builds
- Working with npm packages and dependencies

### Software Architecture

- **Separation of Concerns** - Keeping data logic separate from UI logic
- **SOLID Principles** - Writing maintainable, extensible code
- **Project Organization** - Structuring larger applications effectively

---

## 📂 Project Structure

```
toDo-App/
├── dist/                  # Production build
├── src/
│   ├── index.js          # Entry point
│   ├── dom.js            # DOM manipulation
│   ├── project.js        # Project logic
│   ├── task.js           # Task logic
│   ├── storage.js        # localStorage handling
│   └── styles.css        # Styling
├── package.json          # Dependencies
└── webpack.config.js     # Webpack configuration
```

---

## 🚀 Getting Started

### Play Online
Visit the [**live demo**](https://k7le-777.github.io/toDo-App/) to start managing tasks immediately!

### Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/k7le-777/toDo-App.git
cd toDo-App
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm start
```

4. **Build for production**
```bash
npm run build
```

---

## 💡 Code Highlights

### LocalStorage Integration
```javascript
const storage = {
  saveProjects: (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects));
  },
  
  loadProjects: () => {
    const projects = localStorage.getItem('projects');
    return projects ? JSON.parse(projects) : [];
  }
};
```

### Task Management with Classes
```javascript
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.id = Date.now();
  }
  
  toggleComplete() {
    this.completed = !this.completed;
  }
}
```

---

## 🔮 Future Enhancements

- 🔔 **Notifications** for upcoming due dates
- 🏷️ **Tags and filters** for better task organization
- 🌓 **Dark mode** toggle
- ☁️ **Cloud sync** using Firebase or similar
- 👥 **Collaboration features** for shared projects
- 📊 **Statistics dashboard** showing productivity metrics
- ⌨️ **Keyboard shortcuts** for power users

---

## 📚 Reflections

This project marked a significant milestone in my learning journey. It was the first time I:
- Worked with a **build tool** (Webpack)
- Implemented **data persistence** beyond page reloads
- Managed **complex application state**
- Integrated **third-party libraries** (date-fns)

The challenge wasn't just making features work individually—it was making them work *together* cohesively while keeping the code organized and maintainable.

> "This project taught me that as applications grow in complexity, good architecture becomes essential. What works for small projects breaks down at scale."

---

## 🙏 Acknowledgments

- **[The Odin Project](https://www.theodinproject.com/)** - Comprehensive curriculum and guidance
- **Webpack Documentation** - For helping me understand module bundling
- **date-fns Library** - Clean API for date manipulation

---

## 🤝 Connect

- 💼 [LinkedIn] https://www.linkedin.com/in/ryan-burns-rb/
- 🌐 [Portfolio](https://k7le-777.github.io/ryan-burns-portfolio-DEMO-/)
- 📧 [Email](mailto:kyleburns7.kb@yahoo.com)
- 💻 [More Projects](https://github.com/k7le-777)

---



**Part of The Odin Project - Full Stack JavaScript Path**

[View All My Projects](https://github.com/k7le-777?tab=repositories)

⭐ Star this repo if you found it helpful!
