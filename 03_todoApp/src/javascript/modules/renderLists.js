import { createTodo } from "./createTodo.js";

export let todoLists = [];

export const renderLists = () => {
  if (localStorage.hasOwnProperty('todoLists')) {
    todoLists = JSON.parse(localStorage.getItem('todoLists'));
    for (var i = 0; i < todoLists.length; i++) {
      !todoLists[i].isDeleted && createTodo(todoLists[i], i);
    }
  }
}
