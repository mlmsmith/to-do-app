// Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');

// Event Listeners 
toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", deleteCheck);

//Functions
function addToDo(event) {
  // Prevent the form from submitting
  event.preventDefault();
  // Create div 
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");
  // Create list
  const newToDo = document.createElement("li");
  newToDo.innerText = toDoInput.value;
  newToDo.classList.add("todo-item");
  toDoDiv.appendChild(newToDo);
  // Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  toDoDiv.appendChild(completedButton);
  //Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
  deleteButton.classList.add("delete-btn");
  toDoDiv.appendChild(deleteButton);
  //attach final Todo
  toDoList.appendChild(toDoDiv);
  // Clear to do input after adding item
  toDoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  // Delete to do
  if (item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    todo.remove();
  }
  // Check mark
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}