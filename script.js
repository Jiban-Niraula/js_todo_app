function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

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
  input.value = '';
}
