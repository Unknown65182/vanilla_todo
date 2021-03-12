// Selectors
const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__btn");
const todoList = document.querySelector(".todo__list");

// Event Listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  event.preventDefault();
  const todoItem = document.createElement("li");
  const todoText = document.createElement("p");
  const todoRemove = document.createElement("button");
  const removeIcon = document.createElement("i");

  todoItem.classList.add("todo__item");

  todoText.classList.add("todo__text");
  todoText.innerText = "new Todo";

  todoRemove.classList.add("todo__remove");
  removeIcon.classList.add("fas", "fa-minus");

  todoRemove.addEventListener("click", removeTodo);

  todoRemove.appendChild(removeIcon);
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoRemove);
  todoList.appendChild(todoItem);
}

function removeTodo(event) {
  if (event.target === document.querySelector(".fa-minus")) {
    todoList.removeChild(event.target.parentElement.parentElement);
  } else {
    todoList.removeChild(event.target.parentElement);
  }
}
