// app.ts

// 1. Define the shape of our data
interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface ApiResponse<T> {
    status: 'success' | 'error';
    message?: string;
    data?: T;
}

const API_URL = 'http://localhost:8000/api.php';

// 2. Fetch data from the PHP backend
async function fetchTasks(): Promise<void> {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Strictly type the expected response
        const result = (await response.json()) as ApiResponse<Task[]>;
        
        if (result.status === 'success' && result.data) {
            renderTasks(result.data);
        }
    } catch (error) {
        console.error("Failed to fetch tasks:", error);
    }
}

// 3. Render the UI (Vanilla TS approach)
function renderTasks(tasks: Task[]): void {
    const container = document.getElementById('task-list');
    if (!container) return;

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