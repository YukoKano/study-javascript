import { loadLocalStorageLists } from "./loadLocalStorageLists.js";
import { updateLocalStorageLists } from "./updateLocalStorageLists.js";

export const changeStatus = (item, action) => {
  const todoLists = loadLocalStorageLists();

   // itemの親要素を取得して、何番目のデータかを把握する
  const list = item.target.parentNode;
  const listNum = list.dataset.list;

  switch (action) {
    case "delete":
      todoLists[listNum].isDeleted = true;
      list.classList.add('displayNone');
      break;

    case "check":
      if (item.target.checked) {
        todoLists[listNum].isChecked = true;
        list.classList.add('finished');
        setTimeout((i) => { i.target.parentNode.classList.add('hide'); }, 1000, item);
      } else {
        todoLists[listNum].isChecked = false;
        list.classList.remove('finished');
      }
      break;
  }

  updateLocalStorageLists(todoLists);
}
