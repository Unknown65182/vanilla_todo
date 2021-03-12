export class Todo {
  constructor(id, value, complete) {
    this.id = id;
    this.value = value;
    this.complete = complete;
  }

  get id() {
    return this._id;
  }

  get value() {
    return this._value;
  }

  get complete() {
    return this._complete;
  }

  set id(id) {
    this._id = id;
  }

  set value(value) {
    this._value = value;
  }

  set complete(value) {
    this._complete = value;
  }
}
