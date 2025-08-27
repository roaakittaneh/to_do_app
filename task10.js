//I edited the whole file because I submitted the wrong file last week and now I noticed

const taskInput = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {


    const text = taskInput.value.trim();
    if (!text) return;

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => li.classList.toggle('completed'));

    const span = document.createElement('span');
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');

    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => li.remove());

    li.append(checkbox, span, deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}


addBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', e => {
    if (e.key === 'Enter')
       addTask();
});

