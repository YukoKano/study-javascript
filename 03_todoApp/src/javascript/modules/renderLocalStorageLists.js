import { loadLocalStorageLists } from "./loadLocalStorageLists.js";
import { createTodo } from "./createTodo.js";

export const renderLocalStorageLists = () => {
  const todoLists = loadLocalStorageLists();

  for (var i = 0; i < todoLists.length; i++) {
    // 削除済みでなければ、リストを表示する
    !todoLists[i].isDeleted && createTodo(todoLists[i], i);
  }
}
