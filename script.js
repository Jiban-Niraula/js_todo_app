function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;
  renderTask(taskText);
  input.value = '';
}

function renderTask(taskText) {
  const li = document.createElement('li');
  li.className = 'task';

  const span = document.createElement('span');
  span.textContent = taskText;
  span.onclick = () => li.classList.toggle('completed');

  const actions = document.createElement('div');
  actions.className = 'actions';

  const deleteBtn = document.createElement('i');
  deleteBtn.className = 'fas fa-trash-alt';
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(actions);

  document.getElementById('taskList').appendChild(li);
}

// ✅ Save to task.txt
function saveToFile() {
  const tasks = Array.from(document.querySelectorAll('#taskList li span'))
    .map(span => span.textContent)
    .join('\n');

  const blob = new Blob([tasks], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'task.txt';
  a.click();
}

// ✅ Load from task.txt
function loadFromFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const lines = e.target.result.split('\n');
    document.getElementById('taskList').innerHTML = ''; // clear existing
    lines.forEach(task => {
      if (task.trim() !== '') renderTask(task.trim());
    });
  };
  reader.readAsText(file);
}
