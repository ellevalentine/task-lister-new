const formEl = document.getElementById('create-task-form');
const listBody = document.getElementById('tasks');


function addToList (desc) {
  const newTask = document.createElement('newTask');

  newTask.innerHTML = `
    <li> ${desc} <button class='delete-btn'>X</button> </li> 
    `

  listBody.append(newTask)

  const deleteBtn = newTask.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function(event) {
    newTask.remove();
  });
};


formEl.addEventListener('submit', function(event) {
  event.preventDefault();

  const todo = formEl.description.value;

  addToList(todo);
  });
