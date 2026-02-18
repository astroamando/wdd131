// W06 Project - FocusFlow Logic
// Author: Amando Evangelista

// Initialize task array by retrieving from localstorage or creating an empty one
let tasks = JSON.parse(localStorage.getItem('focusFlowTasks')) || [];
let completedSessions = Number(localStorage.getItem('focusFlowSessions')) || 0;

// DOM interaction
const taskForm = document.getElementById('task-form');
const taskListElement = document.getElementById('task-list');
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const sessionCountDisplay = document.getElementById('session-count');

// --- TIMER FUNCTIONS ---
let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

// Functions 1
function updateTimerDisplay() {
    if(!timerDisplay) return;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    // Template Literals exclusively for output
    // Format 00:00
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Functions 2
function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    timerInterval = setInterval(() => {
        //Conditional Branching
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            alert("Focus session complete!");
            
            // Local storage
            completedSessions++;
            localStorage.setItem('focusFlowSessions', completedSessions);
            renderSessionCount();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

function renderSessionCount() {
    if(sessionCountDisplay) {
        sessionCountDisplay.textContent = completedSessions;
    }
}

// --- TASK FUNCTIONS ---

// functions array
function renderTasks(filter = 'all') {
    if (!taskListElement) return;

    taskListElement.innerHTML = ''; // clear list

    // Filter
    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    // Template Literals
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <div>
                <strong>${task.category}</strong>: ${task.text}
            </div>
            <div>
                <button onclick="toggleTask(${task.id})">✔</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">✖</button>
            </div>
        `;
        taskListElement.appendChild(li);
    });
}

// Add object to array
function addTask(event) {
    event.preventDefault();

    const input = document.getElementById('task-input');
    const category = document.getElementById('category-select');

    if (input.value.trim() === '') return;

    // Create task object
    const newTask = {
        id: Date.now(),
        text: input.value,
        category: category.value,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    input.value = ''; // Clear input
}

// Global functions for onclick
window.toggleTask = function(id) {
    // Object modification
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
};

window.deleteTask = function(id) {
    // Array method to remove
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
};

// LocalStorage
function saveTasks() {
    localStorage.setItem('focusFlowTasks', JSON.stringify(tasks));
}

// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    if (timerDisplay) {
        updateTimerDisplay();
        renderSessionCount();
        startBtn.addEventListener('click', startTimer);
        resetBtn.addEventListener('click', resetTimer);
    }

    if (taskForm) {
        renderTasks();
        taskForm.addEventListener('submit', addTask);
        
        // Filters
        document.getElementById('filter-all').addEventListener('click', () => renderTasks('all'));
        document.getElementById('filter-active').addEventListener('click', () => renderTasks('active'));
        document.getElementById('filter-completed').addEventListener('click', () => renderTasks('completed'));
    }
});