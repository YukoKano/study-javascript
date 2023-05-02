import { createTodo } from "./createTodo.js";
import { loadListsArray } from "./loadListsArray.js";

export const renderLists = () => {
  const todoLists = loadListsArray();
  for (var i = 0; i < todoLists.length; i++) {
    !todoLists[i].isDeleted && createTodo(todoLists[i], i);
  }
}
