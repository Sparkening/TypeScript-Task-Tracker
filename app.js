"use strict";
// app.ts
const API_URL = 'http://localhost:8000/api.php';
// 2. Fetch data from the PHP backend
async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Strictly type the expected response
        const result = (await response.json());
        if (result.status === 'success' && result.data) {
            renderTasks(result.data);
        }
    }
    catch (error) {
        console.error("Failed to fetch tasks:", error);
    }
}
// 3. Render the UI (Vanilla TS approach)
function renderTasks(tasks) {
    const container = document.getElementById('task-list');
    if (!container)
        return;
    container.innerHTML = ''; // Clear loading state
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.title} ${task.completed ? '✅' : '⏳'}`;
        container.appendChild(li);
    });
}
// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    fetchTasks();
});
