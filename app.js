// Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filterToDo');

// Event Listeners 
toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterToDo);

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
    // Animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
  }
  // Check mark
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}
/*
function filterToDO(event) {
  const todos = toDoList.childNodes;
  todos.forEach(function(todo) {
    switch(event.target.value) {
      case "all":
        todo.style.display = 'flex';
      case "Completed":
        if (todo.classList.contains('Completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case "Uncompleted":
        if (!todo.classList.contains('Uncompleted')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}
*/

function filterToDo(e) {
  const todos = toDoList.childNodes;
  todos.forEach(function(todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
