document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const todoError = document.getElementById('todoError');
    const emptyState = document.getElementById('emptyState');

    // Load initial tasks from storage cache or initialize empty array
    let tasks = JSON.parse(localStorage.getItem('savedTasks')) || [];

    // Save and Sync Data inside LocalStorage
    function syncStorage() {
        localStorage.setItem('savedTasks', JSON.stringify(tasks));
        renderTasks();
    }

    // Dynamic Engine to Render Tasks on DOM Layout
    function renderTasks() {
        taskList.innerHTML = '';
        
        if (tasks.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
            
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.className = `task-item ${task.completed ? 'completed' : ''}`;
                
                li.innerHTML = `
                    <div class="task-content" data-index="${index}">
                        <div class="checkbox-custom"></div>
                        <span class="task-text">${escapeHTML(task.text)}</span>
                    </div>
                    <button class="delete-btn" data-index="${index}" title="Delete Task">&times;</button>
                `;
                
                taskList.appendChild(li);
            });
        }
    }

    // Protection Helper: Escape HTML strings to counter XSS injections
    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }

    // Event Action: Add Task Submit Form Handler
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const rawText = taskInput.value.trim();
        todoError.textContent = '';

        if (rawText === '') {
            todoError.textContent = 'Task context string cannot be left completely empty.';
            return;
        }

        // Push element state mapping configuration
        tasks.push({
            text: rawText,
            completed: false
        });

        taskInput.value = ''; // clear text interface field
        syncStorage();
    });

    // Event Delegation Grid Matrix for Complete & Delete triggers
    taskList.addEventListener('click', (e) => {
        // Toggle Task Complete Verification Matrix Click target
        if (e.target.closest('.task-content')) {
            const index = e.target.closest('.task-content').getAttribute('data-index');
            tasks[index].completed = !tasks[index].completed;
            syncStorage();
        }
        
        // Delete Specific Target Row execution trigger
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            tasks.splice(index, 1);
            syncStorage();
        }
    });

    // Initial Engine Bootstrap Initialization Trigger
    renderTasks();
});