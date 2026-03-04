// Show Sections Based on Button Click
function showSection(sectionId) {
    document.getElementById('projectSection').classList.add('hidden');
    document.getElementById('taskSection').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
}

// Add Project
function addProject() {
    let name = document.getElementById('projectName').value;
    let desc = document.getElementById('projectDesc').value;
    let start = document.getElementById('projectStart').value;
    let end = document.getElementById('projectEnd').value;
    let members = document.getElementById('projectMembers').value;
    let status = document.getElementById('projectStatus').value;

    if (name && desc && start && end && members) {
        let dashboard = document.getElementById('projectDashboard');

        let div = document.createElement('div');
        div.classList.add('project-card');

        let statusClass = status === "pending" ? "pending" : status === "in-progress" ? "in-progress" : "completed";

        div.innerHTML = `
            <h3>${name}</h3>
            <p>${desc}</p>
            <p>📅 Start: ${start} | End: ${end}</p>
            <p>👥 Members: ${members}</p>
            <p class="status ${statusClass}">${status}</p>
            <button class="delete-btn" onclick="deleteProject(this)">❌ Delete</button>
        `;

        dashboard.appendChild(div);
    }
}

// Add Task
function addTask() {
    let name = document.getElementById('taskName').value;
    let desc = document.getElementById('taskDesc').value;
    let dueDate = document.getElementById('taskDueDate').value;
    let status = document.getElementById('taskStatus').value;

    if (name && desc && dueDate) {
        let dashboard = document.getElementById('taskDashboard');

        let div = document.createElement('div');
        div.classList.add('task-card');
        div.innerHTML = `
            <h3>${name}</h3>
            <p>${desc}</p>
            <p>📅 Due Date: ${dueDate}</p>
            <button class="delete-btn" onclick="deleteTask(this)">❌ Delete</button>
        `;

        dashboard.appendChild(div);
    }
}

// Delete Functions
function deleteProject(btn) { btn.parentElement.remove(); }
function deleteTask(btn) { btn.parentElement.remove(); }
