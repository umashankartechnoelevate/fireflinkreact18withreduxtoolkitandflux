import { Dispatcher } from "flux";
import ADD_TODO from "../Actions/actionTypes";
import DELETE_TODO from "../Actions/actionTypes";

import dispatcher from "../Dispatcher"; //this is from that component where we created seperate component
import { EventEmitter } from "events";

// const ToDoStore = new Dispatcher(); // you can directely create a dispatcher here or else you can you it from seperate component created for dispatch

let todo = [];
const CHANGE_EVENT = "change";
console.log("todo array in main state", todo);

const TodoStore = Object.assign({}, EventEmitter.prototype, {
  getAllTodos: function () {
    return todo;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});
dispatcher.register((action) => {

  switch (action.type) {
    case ADD_TODO:
      todo.push({ text: action.text, completed: false });
      break;
    case DELETE_TODO:
      todo.splice(action.id, 1);
      break;
    default:
  }
});

export default TodoStore;
