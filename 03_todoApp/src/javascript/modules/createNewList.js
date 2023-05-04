import { loadLocalStorageLists } from "./loadLocalStorageLists.js";
import { updateLocalStorageLists } from "./updateLocalStorageLists.js";
import { createTodo } from "./createTodo.js";

export const createNewList = (text, due) => {
  const newList = {
    content: text,
    due: due,
    isChecked: false,
    isDeleted: false
  };

  // ローカルストレージのデータを更新する
  const updateLists = loadLocalStorageLists();
  updateLists.push(newList);

  updateLocalStorageLists(updateLists);

  // 新しいリストを追加する
  const newListIndex = updateLists.indexOf(newList); // length - 1番目でもいい
  createTodo(newList, newListIndex);
}
