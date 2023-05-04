import { loadLocalStorageLists } from "./loadLocalStorageLists.js";
import { updateLocalStorageLists } from "./updateLocalStorageLists.js";
import { createTodo } from "./createList/createTodo.js";

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
  const newListIndex = updateLists.length - 1; // newListの配列番号(=一番最後)を取得
  createTodo(newList, newListIndex);
}
