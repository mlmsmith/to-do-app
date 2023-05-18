// Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');

// Event Listeners 
toDoButton.addEventListener("click", addToDo);

//Functions
function addToDo(event) {
  // Prevent the form from submitting
  event.preventDefault();
  // Create div 
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");
  // Create list
  const newToDo = document.createElement("li");
  newToDo.innerText = "Hello";//toDoInput.value;
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
}
