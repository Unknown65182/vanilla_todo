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

  todoRemove.appendChild(removeIcon);
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoRemove);
  todoList.appendChild(todoItem);

  console.log("hello");
}
