export class TodoList {
  constructor(todos) {
    this.todos = todos;
  }

  get todos() {
    return this._todos;
  }
  set todos(todos) {
    this._todos = todos;
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(id) {
    this._todos = this.todos.filter((item) => item.id !== id);
  }
}
