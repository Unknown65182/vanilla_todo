import "./styles.scss";

import { Todo } from "./Todo";

const todos = [];

// Selectors
const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__btn");
const todoList = document.querySelector(".todo__list");

// Event Listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  event.preventDefault();
  const ids = todos.map((v) => v.id);

  const todo = new Todo(uniqueId(ids), todoInput.value, false);
  todos.push(todo);

  const todoItem = document.createElement("li");
  const todoText = document.createElement("p");
  const todoRemove = document.createElement("button");
  const removeIcon = document.createElement("i");

  todoItem.classList.add("todo__item");

  todoText.classList.add("todo__text");
  todoText.innerText = todo.value;

  todoRemove.classList.add("todo__remove");
  removeIcon.classList.add("fas", "fa-minus");

  todoRemove.addEventListener("click", removeTodo);

  todoRemove.appendChild(removeIcon);
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoRemove);
  todoList.appendChild(todoItem);
}

function removeTodo(event) {
  if (
    Array.from(document.querySelectorAll(".fa-minus")).includes(event.target)
  ) {
    todoList.removeChild(event.target.parentElement.parentElement);
  } else {
    todoList.removeChild(event.target.parentElement);
  }
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function uniqueId(ids) {
  const id = randomInteger(1000, 9999);
  if (ids.includes(id)) {
    return uniqueId(ids);
  }
  return id;
}
