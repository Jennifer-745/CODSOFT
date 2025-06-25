const STORAGE_KEY = "todo-list-demo-tasks";

function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}
function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// --- UI State ---
let tasks = loadTasks();
let editingTaskId = null;

// --- DOM Elements ---
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");
const modal = document.getElementById("modal");
const taskForm = document.getElementById("taskForm");
const modalTitle = document.getElementById("modalTitle");
const cancelBtn = document.getElementById("cancelBtn");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskPriority = document.getElementById("taskPriority");
const taskDueDate = document.getElementById("taskDueDate");

// --- Render Functions ---
function renderTasks() {
  taskList.innerHTML =
    tasks.length === 0
      ? `<li style="color:#4b6e8b;text-align:center;margin-top:32px;">No tasks yet. Add your first task!</li>`
      : "";

  // Sort: incomplete first, then by due date, then priority
  const sortedTasks = tasks.slice().sort((a, b) => {
    if (a.completed !== b.completed) return a.completed - b.completed;
    if (a.dueDate && b.dueDate) return a.dueDate.localeCompare(b.dueDate);
    if (a.dueDate) return -1;
    if (b.dueDate) return 1;
    return ["High", "Medium", "Low"].indexOf(b.priority) - ["High", "Medium", "Low"].indexOf(a.priority);
  });

  for (const task of sortedTasks) {
    const li = document.createElement("li");
    li.className = "task-item" + (task.completed ? " completed" : "");
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""} data-id="${task.id}" class="complete-checkbox">
      <div class="task-info">
        <div class="task-title">${escapeHtml(task.title)}</div>
        ${task.description ? `<div class="task-desc">${escapeHtml(task.description)}</div>` : ""}
        <div class="task-meta">
          <span class="priority ${task.priority}">${task.priority}</span>
          ${task.dueDate ? `<span>Due: <b>${task.dueDate}</b></span>` : ""}
        </div>
      </div>
      <div class="task-actions">
        <button class="action-btn edit-btn" data-id="${task.id}">Edit</button>
        <button class="action-btn del-btn" data-id="${task.id}">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  }
}

// --- Modal Functions ---
function openModal(task) {
  modalTitle.textContent = task ? "Edit Task" : "Add Task";
  taskTitle.value = task ? task.title : "";
  taskDescription.value = task ? task.description : "";
  taskPriority.value = task ? task.priority : "Medium";
  taskDueDate.value = task ? task.dueDate || "" : "";
  editingTaskId = task ? task.id : null;
  modal.classList.add("show");
  taskTitle.focus();
}
function closeModal() {
  modal.classList.remove("show");
  taskForm.reset();
  editingTaskId = null;
}

// --- Event Handlers ---
addTaskBtn.onclick = () => openModal(null);

cancelBtn.onclick = (e) => {
  e.preventDefault();
  closeModal();
};

taskForm.onsubmit = function (e) {
  e.preventDefault();
  const newTask = {
    id: editingTaskId || Date.now(),
    title: taskTitle.value.trim(),
    description: taskDescription.value.trim(),
    priority: taskPriority.value,
    dueDate: taskDueDate.value,
    completed: false,
  };
  if (!newTask.title) {
    taskTitle.focus();
    return;
  }

  if (editingTaskId) {
    tasks = tasks.map((t) => (t.id === editingTaskId ? { ...t, ...newTask } : t));
  } else {
    tasks.push(newTask);
  }
  saveTasks(tasks);
  renderTasks();
  closeModal();
};

// Delegate click events for edit, delete, and completion
taskList.onclick = function (e) {
  if (e.target.classList.contains("edit-btn")) {
    const id = Number(e.target.getAttribute("data-id"));
    const task = tasks.find((t) => t.id === id);
    openModal(task);
  } else if (e.target.classList.contains("del-btn")) {
    const id = Number(e.target.getAttribute("data-id"));
    if (confirm("Delete this task?")) {
      tasks = tasks.filter((t) => t.id !== id);
      saveTasks(tasks);
      renderTasks();
    }
  } else if (e.target.classList.contains("complete-checkbox")) {
    const id = Number(e.target.getAttribute("data-id"));
    tasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    saveTasks(tasks);
    renderTasks();
  }
};

// Close modal on background click
modal.onclick = function (e) {
  if (e.target === modal) closeModal();
};

// --- Utility ---
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function (m) {
    return (
      {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[m] || m
    );
  });
}

// --- Initial Render ---
renderTasks();